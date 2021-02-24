import React, {useEffect} from 'react';
import s from "../Main/Main.module.css";
import cn from 'classnames';

import Ava from "../../common/ava/Ava";
import {connect} from "react-redux";
import {
    addEnemyComputerPoint,
    addMove, addMoveInHistoryAutoplay,
    addYouComputerPoint,
    editComputerNumber,
    editYouNumber,
    setZeroInfo
} from "../../Redux/reducers/AutoplayReducer";
import {setStatusWin} from "../../Redux/reducers/CountNumberReducer";

const GamePlaceAutoplay = ({
                               lang,
                               computerNumber,
                               setZeroInfo,
                               addMoveInHistoryAutoplay,
                               addMove,
                                theme,
                               setStatusWin,
                               editComputerNumber,
                               youRu,
                               addYouComputerPoint,
                               youEng,
                               addEnemyComputerPoint,
                               editYouNumber,
                               EnemyRu, EnemyEng, youNumber
                           }) => {

    //console.log('computerNumber', computerNumber)

    const winFunc = () => {
        setStatusWin('win')
        addYouComputerPoint()
        addMoveInHistoryAutoplay(youNumber, computerNumber, 'win')
    }
    const noWinNoLoseFunc = () => {
        setStatusWin('noWinNoLose')
        addMoveInHistoryAutoplay(youNumber, computerNumber, 'noWinNoLose')

    }
    const loseFunc = () => {
        setStatusWin('lose')
        addEnemyComputerPoint()
        addMoveInHistoryAutoplay(youNumber, computerNumber, 'lose')

    }

    if (youNumber === 0) {
        setTimeout(() => {
            editYouNumber()
        }, 2000)
    }
    if (youNumber !== 0 && computerNumber === 0) {
        let numberComputer
        const random = Math.random();
        if (random < 0.33) {
            numberComputer = 1;
        } else if (random < 0.66) {
            numberComputer = 2;
        } else {
            numberComputer = 3
        }
        editComputerNumber(numberComputer)
    }

    if (youNumber !== 0 && computerNumber !== 0) {
        setStatusWin(null)
        setTimeout(() => {
            addMove()
            if (youNumber === 1 && computerNumber === 1) {
                noWinNoLoseFunc()
            }
            if (youNumber === 1 && computerNumber === 2) {
                winFunc()
            }
            if (youNumber === 1 && computerNumber === 3) {
                loseFunc()
            }


            if (youNumber === 2 && computerNumber === 1) {
                loseFunc()
            }
            if (youNumber === 2 && computerNumber === 2) {
                noWinNoLoseFunc()
            }
            if (youNumber === 2 && computerNumber === 3) {
                winFunc()
            }


            if (youNumber === 3 && computerNumber === 1) {
                winFunc()
            }
            if (youNumber === 3 && computerNumber === 2) {
                loseFunc()
            }
            if (youNumber === 3 && computerNumber === 3) {
                noWinNoLoseFunc()
            }
            setZeroInfo()
        }, 1000)
    }

    return (
        <div className={s.main}>
            <div className={s.mainscreen}>
                <div>
                    <h2 className={cn({
                        [s.darck]: theme === 'dark',
                        [s.ligh]: theme === 'light',
                        [s.gold]: theme === 'gold',
                    })}>
                        {lang === 'ru' && <span>{youRu}</span>}
                        {lang === 'eng' && <span>{youEng}</span>}
                    </h2>
                    <div><Ava number={youNumber}/></div>
                </div>
                <div>
                    <h2 className={cn({
                        [s.darck]: theme === 'dark',
                        [s.ligh]: theme === 'light',
                        [s.gold]: theme === 'gold',
                    })}>
                        {lang === 'ru' && <span>{EnemyRu}</span>}
                        {lang === 'eng' && <span>{EnemyEng}</span>}
                    </h2>
                    <div>
                        <Ava number={computerNumber}/>
                    </div>
                </div>

            </div>


        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        youNumber: state.AutoplayReducer.youNumber,
        computerNumber: state.AutoplayReducer.computerNumber,


    }
};

export default connect(mapStateToProps, {
    editYouNumber,
    setZeroInfo,
    addMove,
    addEnemyComputerPoint,
    setStatusWin,
    addMoveInHistoryAutoplay,
    addYouComputerPoint,
    editComputerNumber,
})(GamePlaceAutoplay);