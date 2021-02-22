import React, {useState} from 'react';
import {Button} from "antd";
import 'antd/dist/antd.css';



import s from './Setting.module.css';
import ColorThem from "../ColorThem/ColorThem";
import MusicMenu from "../MusicMenu/MusicMenu";
import History from "../History/History";
import NewGame from "../NewGame/NewGame";
import {setZeroTwoHistory} from "../../Redux/reducers/StatisticTwoReducer";

const Setting = ({setTheme,
                     voluem,
                     stata,
                     setZeroTwoHistory,
                     setLang,
                     setVoluem,
                     deleteAllStats,
                     setStatusWin,
                     lang,
                     isOne,
                     setIsOne,
                     statistics,
                     voluemSignal,
                     setVoluemSignal}) => {
    setStatusWin(null)

    const [isColorThem, setIsColorThem] = useState(false);
    const [isMusicMenu, setIsMusicMenu] = useState(false);
    const [isHistory, setIsHistory] = useState(false);
    const [isNewGame, setIsNewGame] = useState(false);

    return (
        <div className={s.setting}>
            <div className={s.cent}>
                <h1 className={s.h1}>
                    {lang === 'ru' && <span>Настройки</span>}
                    {lang === 'eng' && <span>Settings</span>}
                </h1>
                <div className={s.flex}>

                    <Button onClick={() => setIsNewGame(true) } type="primary" size={'large'} >
                        {lang === 'ru' && <span>Новая игра</span>}
                        {lang === 'eng' && <span>New game</span>}
                    </Button>


                    <Button onClick={() => setIsColorThem(true)} type="primary" size={'large'}>
                        {lang === 'ru' && <span>Выбрать тему</span>}
                        {lang === 'eng' && <span>Choose a background</span>}
                    </Button>

                    <Button onClick={() => setIsMusicMenu(true)} type="primary" size={'large'} >
                        {lang === 'ru' && <span>Настройки музыки</span>}
                        {lang === 'eng' && <span>Music settings</span>}
                    </Button>

                    <Button onClick={() => setIsHistory(true)}  type="primary" size={'large'}>
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
                                   isOne={isOne}
                                   statistics={statistics}
                                   setIsHistory={setIsHistory}
                                   deleteAllStats={deleteAllStats} />}

            {isNewGame && <NewGame deleteAllStats={deleteAllStats} setZeroTwoHistory={setZeroTwoHistory} setIsOne={setIsOne} lang={lang} setIsNewGame={setIsNewGame}  />}
        </div>
    );
};

export default Setting;