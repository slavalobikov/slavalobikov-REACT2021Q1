import React from 'react';


import s from "../Main/Main.module.css";
import Ava from "../../common/ava/Ava";
import ComputerPlace from "./ComputerPlace/ComputerPlace";

const GamePlace = ({myNumber, lang, setComputerNumber,setMus, setMyNumber, setZeroNumber}) => {





    return (
        <div className={s.main}>
            <div className={s.mainscreen}>
                <div>
                    <h2>
                        {lang === 'ru' && <span>Вы</span>}
                        {lang === 'eng' && <span>You</span>}
                    </h2>
                    <div><Ava number={myNumber}/></div>
                </div>
                <ComputerPlace setComputerNumber={setComputerNumber}
                               setMyNumber={setMyNumber}
                               lang={lang}
                               setMus={setMus}
                               setZeroNumber={setZeroNumber}
                               myNumber={myNumber}
                                />
            </div>
        </div>
    );
};

export default GamePlace;