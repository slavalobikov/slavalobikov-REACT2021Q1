import React, {useState} from 'react';
import {Button} from "antd";
import 'antd/dist/antd.css';
import {QuestionOutlined} from '@ant-design/icons';




import s from './Setting.module.css';
import ColorThem from "../ColorThem/ColorThem";
import MusicMenu from "../MusicMenu/MusicMenu";
import History from "../History/History";
import NewGame from "../NewGame/NewGame";
import {Link} from "react-router-dom";
import HotKeys from "../HotKeys/HotKeys";

const Setting = ({setTheme,
                     voluem,
                     stataAutoplay,
                     stata,
                     deleteAutoplayStata,
                     setZeroTwoHistory,
                     setLang,
                     setVoluem,
                     editIsAutoPlay,
                     deleteAllStats,
                     setStatusWin,
                     lang,
                     isOne,
                     isAutoplay,
                     setIsOne,
                     statistics,
                     voluemSignal,
                     setVoluemSignal}) => {
    setStatusWin(null)

    const [isColorThem, setIsColorThem] = useState(false);
    const [isMusicMenu, setIsMusicMenu] = useState(false);
    const [isHistory, setIsHistory] = useState(false);
    const [isNewGame, setIsNewGame] = useState(false);
    const [isHotKeys, setIsHotKeys] = useState(false)

    return (
        <div className={s.setting}>
            <div className={s.cent}>
                <h1 className={s.h1}>
                    {lang === 'ru' && <span>Настройки</span>}
                    {lang === 'eng' && <span>Settings</span>}
                </h1>

                <div className={s.flex}>

                    <Button disabled={false} className={s.btn} loading={false} onClick={() => setIsNewGame(true) } type="primary" size={'large'} >
                        {lang === 'ru' && <span>Новая игра</span>}
                        {lang === 'eng' && <span>New game</span>}
                    </Button>


                    {!isAutoplay && <Link className={s.hund}  to={'/'}>
                        <Button className={s.btn}  onClick={() =>{
                        editIsAutoPlay(true)
                    } }  type="primary"

                                 size={'large'}>
                        {lang === 'ru' && <span>Автопроигрование</span>}
                        {lang === 'eng' && <span>Autoplay</span>}
                    </Button></Link>}
                    {!!isAutoplay && <Button  className={s.btn} onClick={() => {
                        deleteAutoplayStata()
                        editIsAutoPlay(false)
                    }}  type="primary" size={'large'}>
                        {lang === 'ru' && <span>Остановить автопроигрование</span>}
                        {lang === 'eng' && <span>stop Autoplay</span>}
                    </Button>}


                    <Button className={s.btn} onClick={() => setIsColorThem(true)} type="primary" size={'large'}>
                        {lang === 'ru' && <span>Выбрать тему</span>}
                        {lang === 'eng' && <span>Choose a background</span>}
                    </Button>

                    <Button className={s.btn} onClick={() => setIsMusicMenu(true)} type="primary" size={'large'} >
                        {lang === 'ru' && <span>Настройки музыки</span>}
                        {lang === 'eng' && <span>Music settings</span>}
                    </Button>

                    <Button className={s.btn} onClick={() => setIsHistory(true)}  type="primary" size={'large'}>
                        {lang === 'ru' && <span>Статистика</span>}
                        {lang === 'eng' && <span>Statistics</span>}
                    </Button>
                    <div className={s.left}>

                        <Button onClick={() => setLang('ru')}   type="primary" size={'little'}>
                            Русский
                        </Button>

                        <Button onClick={() => setLang('eng')}  type="primary" size={'little'}>
                            English
                        </Button>

                    </div>

                </div>


            </div>
            {isColorThem && <ColorThem lang={lang} setTheme={setTheme} setIsColorThem={setIsColorThem} />}
            {isMusicMenu && <MusicMenu voluem={voluem}
                                       lang={lang}
                                       setVoluemSignal={setVoluemSignal}
                                       setVoluem={setVoluem}
                                       voluemSignal={voluemSignal}
                                       isMusicMenu={isMusicMenu}
                                       setIsMusicMenu={setIsMusicMenu} />}
            {isHistory && <History lang={lang}
                                   setZeroTwoHistory={setZeroTwoHistory}
                                   stata={stata}
                                   stataAutoplay={stataAutoplay}
                                   isAutoplay={isAutoplay}
                                   isOne={isOne}
                                   statistics={statistics}
                                   setIsHistory={setIsHistory}
                                   deleteAllStats={deleteAllStats} />}

            {isNewGame && <NewGame deleteAllStats={deleteAllStats} setZeroTwoHistory={setZeroTwoHistory} setIsOne={setIsOne} lang={lang} setIsNewGame={setIsNewGame}  />}
            {isHotKeys && <HotKeys lang={lang}  setIsHotKeys={setIsHotKeys}/>}
            <div onClick={() => setIsHotKeys(true)} className={s.qu}>
                <QuestionOutlined />
            </div>
        </div>
    );
};

export default Setting;