import React from 'react';
import Ava from "../../common/ava/Ava";

import s from './GameTwoPlace.module.css'
import GameTwoComputerTwo from "./GameTwoComputerTwo/GameTwoComputerTwo";

const GameTwoPlace = ({lang, myNumber, setMus}) => {
    return (
        <div className={s.GameTwoPlace}>
            <div className={s.you}>
                <h2>

                    {lang === 'ru' && <span>Вы</span>}
                    {lang === 'eng' && <span>You</span>}
                </h2>
                <div><Ava number={myNumber}/></div>
            </div>
            <GameTwoComputerTwo setMus={setMus} lang={lang} />
        </div>

    );
};

export default GameTwoPlace;