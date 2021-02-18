import React from 'react';


import s from "../Main/Main.module.css";
import Ava from "../../common/ava/Ava";
import ComputerPlace from "./ComputerPlace/ComputerPlace";

const GamePlace = ({myNumber, /*computerNumber,*/ setComputerNumber, setMyNumber, setZeroNumber}) => {





    return (
        <div className={s.main}>
            <div className={s.mainscreen}>
                <div>
                    <h2>Вы</h2>
                    <div><Ava number={myNumber}/></div>
                </div>
                <ComputerPlace setComputerNumber={setComputerNumber}
                               setMyNumber={setMyNumber}
                               setZeroNumber={setZeroNumber}
                               myNumber={myNumber}
                               /*computerNumber={computerNumber}*/ />
            </div>
        </div>
    );
};

export default GamePlace;