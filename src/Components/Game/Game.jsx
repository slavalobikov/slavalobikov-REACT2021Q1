import React, {useState} from 'react';
import {compose} from "redux";
import {NavLink, Route, withRouter} from "react-router-dom";


import {FullscreenOutlined, SettingOutlined, ArrowLeftOutlined, SoundOutlined} from '@ant-design/icons';
import cn from 'classnames';
import ReactPlayer from "react-player";





import s from './Game.module.css'
import Setting from "../Setting/Setting";
import MainContainer from "../../Container/MainContainer/MainContainer";




const Game = (props) => {

    const [mus, setMus] = useState(false);



    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMusic, setIsMusic] = useState(false);

    const fullscreen = () => {
        document.documentElement.webkitRequestFullScreen();
    }

    const key = (event) => {
        if (event.keyCode === 219) {
            document.documentElement.webkitRequestFullScreen();
            setIsFullscreen(true)
        }
        if (event.keyCode === 221) {
            document.webkitCancelFullScreen();
            setIsFullscreen(false)
        }

        if (event.keyCode === 192) {
            if (props.location.pathname === '/') {
                props.history.push('setting')
            } else if (props.location.pathname === '/setting') {
                props.history.push('/')
            }
        }

        if (event.keyCode === 81) {
            if (props.myNumber !== 0) {
                return
            }
            props.setMyNumber(1)
        }
        if (event.keyCode === 87) {
            if (props.myNumber !== 0) {
                return
            }
            props.setMyNumber(2)
        }
        if (event.keyCode === 69) {
            if (props.myNumber !== 0) {
                return
            }
            props.setMyNumber(3)
        }
        console.log(event.keyCode)

    }
    return (
        <div  onKeyDown={key} className={cn(s.game, {
            [s.darkback]: props.theme === 'dark',
            [s.lightback]: props.theme === 'light',
            [s.goldBack]: props.theme === 'gold',
        })} tabIndex="0">
            <div className={s.hidden}>
                {isMusic && <ReactPlayer url={'https://freesound.org/data/previews/401/401736_7744890-lq.mp3'}
                                         playing={mus}
                                         volume={props.voluemSignal}
                                         onEnded={() => setMus(false)}
                                         controls={true}  />}
            </div>
            <div className={s.hidden}>
                <ReactPlayer  controls={true}
                              volume={props.voluem}
                              playing={isMusic}
                              url={'https://a1.dlshare.net/sdb/13/c8/65/67168033_99902550.mp3?name=adriano-chelentano-confessa.mp3&id=232631'} />
            </div>

            {!isFullscreen && <div onClick={(e)=> {fullscreen()}}
                   className={cn(s.fullscreen,{
                        [s.darckIcon]: props.theme === 'dark',
                        [s.lightIcon]: props.theme === 'light',
                        [s.goldIcon]: props.theme === 'gold',

                   })}><FullscreenOutlined /></div>}

            {props.location.pathname === '/setting' && <NavLink to={'/'}>
                <div className={cn(s.setting,{
                        [s.darckIcon]: props.theme === 'dark',
                        [s.lightIcon]: props.theme === 'light',
                        [s.goldIcon]: props.theme === 'gold',


                })}><ArrowLeftOutlined /></div>
            </NavLink>}
            {props.location.pathname === '/' && <NavLink to={'/setting'}>
                <div className={cn(s.setting,{
                        [s.darckIcon]: props.theme === 'dark',
                        [s.lightIcon]: props.theme === 'light',
                        [s.goldIcon]: props.theme === 'gold',


                })}><SettingOutlined /></div>
            </NavLink>}

            <div onClick={() => setIsMusic(!isMusic)} className={cn(s.music, {
                [s.darckIconMusic]: props.theme === 'dark',
                [s.lightIconMusic]: props.theme === 'light',
                [s.goldIconMusic]: props.theme === 'gold',
            })}>
                <SoundOutlined />
                <div className={cn({
                    [s.nomus]: isMusic === false
                })}></div>
            </div>


            <Route path={'/setting'} render={() => <Setting voluem={props.voluem}
                                                            setLang={props.setLang}
                                                            lang={props.lang}
                                                            stataAutoplay={props.stataAutoplay}
                                                            isAutoplay={props.isAutoplay}
                                                            stata={props.stata}
                                                            isOne={props.isOne}
                                                            deleteAutoplayStata={props.deleteAutoplayStata}
                                                            editIsAutoPlay={props.editIsAutoPlay}
                                                            setIsOne={props.setIsOne}
                                                            statistics={props.statistics}
                                                            setZeroTwoHistory={props.setZeroTwoHistory}
                                                            setVoluemSignal={props.setVoluemSignal}
                                                            setStatusWin={props.setStatusWin}
                                                            voluemSignal={props.voluemSignal}
                                                            setVoluem={props.setVoluem}
                                                            deleteAllStats={props.deleteAllStats}
                                                            setTheme={props.setTheme} />} />
            <Route path={'/'} exact render={() => <MainContainer
                name={props.name}
                lang={props.lang}
                theme={props.theme}
                isAutoplay={props.isAutoplay}
                setMus={setMus}
                isMusic={isMusic}
                setIsMusic={setIsMusic} />} />



        </div>
    );
};

export default compose(withRouter)(Game);