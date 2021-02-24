import React from 'react';
import cn from 'classnames';



import Ava from "../../common/ava/Ava";

import s from './GameTwoPlace.module.css'
import GameTwoComputerTwo from "./GameTwoComputerTwo/GameTwoComputerTwo";

const GameTwoPlace = ({lang, myNumber, setMus, theme}) => {
    return (
        <div className={s.GameTwoPlace}>
            <div className={s.you}>
                <h2 className={cn(
                    {
                        [s.darck]: theme === 'dark',
                        [s.ligh]: theme === 'light',
                        [s.gold]: theme === 'gold',
                    }
                )}>

                    {lang === 'ru' && <span>Вы</span>}
                    {lang === 'eng' && <span>You</span>}
                </h2>
                <div><Ava number={myNumber}/></div>
            </div>
            <GameTwoComputerTwo theme={theme} setMus={setMus} lang={lang} />
        </div>

    );
};

export default GameTwoPlace;