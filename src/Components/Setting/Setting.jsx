import React, {useState} from 'react';
import {Button} from "antd";
import 'antd/dist/antd.css';



import s from './Setting.module.css';
import ColorThem from "../ColorThem/ColorThem";
import MusicMenu from "../MusicMenu/MusicMenu";
import History from "../History/History";

const Setting = ({setTheme, voluem, setVoluem,deleteAllStats,setStatusWin}) => {
    setStatusWin(null)

    const [isColorThem, setIsColorThem] = useState(false);
    const [isMusicMenu, setIsMusicMenu] = useState(false);
    const [isHistory, setIsHistory] = useState(false);

    return (
        <div className={s.setting}>
            <div className={s.cent}>
                <h1 className={s.h1}>Настройки</h1>
                <div className={s.flex}>
                    <Button onClick={() => setIsColorThem(true)} type="primary" size={'large'}>
                        Выбрать тему
                    </Button>

                    <Button onClick={() => setIsMusicMenu(true)} type="primary" size={'large'} >
                        Настройки музыки
                    </Button>

                    <Button onClick={() => setIsHistory(true)}  type="primary" size={'large'}>
                        Статистика
                    </Button>

                </div>


            </div>
            {isColorThem && <ColorThem setTheme={setTheme} setIsColorThem={setIsColorThem} />}
            {isMusicMenu && <MusicMenu voluem={voluem}
                                       setVoluem={setVoluem}
                                       isMusicMenu={isMusicMenu}
                                       setIsMusicMenu={setIsMusicMenu} />}
            {isHistory && <History setIsHistory={setIsHistory} deleteAllStats={deleteAllStats} />}
        </div>
    );
};

export default Setting;