import React from 'react';

import Ava from "../../../common/ava/Ava";
import {connect} from "react-redux";
import {
    addComputerChoose,
    AddCountComputer,
    AddCountYou, addMove,
    addMoveHistory,
    addYouChoose
} from "../../../Redux/reducers/StatisticReducer";
import {setStatusWin} from "../../../Redux/reducers/CountNumberReducer";
import cn from "classnames";
import s from "../../Main/Main.module.css";

const ComputerPlace = ({myNumber,
                           addMove,
                           computerNumber,
                           addComputerChoose,
                           AddCountComputer,
                           setMus,
                           theme,
                           lang,
                           setZeroNumber,
                           addYouChoose,
                           addMoveHistory,
                           setStatusWin,
                           setComputerNumber,
                           AddCountYou}) => {

    const computerRandomNumber = Math.random();

    const WinFunc = () => {
        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber();
            AddCountYou();
            setMus(true)
            setStatusWin('win')
            addMoveHistory()
        }, 1000)
    }
    const LoseFunc = () => {
        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber()
            AddCountComputer()
            setStatusWin('lose')
            addMoveHistory()
        }, 1000)
    }
    const noWinNoLoseFunc = () => {
        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber()
            setStatusWin('noWinNoLose')
            addMoveHistory()
        }, 1000)
    }


    if (myNumber === 1 && computerNumber === 0) {
        addMove()
        addYouChoose(1)
        if (0.33 > computerRandomNumber) {
            addComputerChoose(1)
            setComputerNumber(1)
            noWinNoLoseFunc()
        } else if (0.66 > computerRandomNumber) {
            addComputerChoose(2)
            setComputerNumber(2)
            WinFunc()
        } else {
            addComputerChoose(3)

            setComputerNumber(3)
            LoseFunc()
        }
    }
    if (myNumber === 2 && computerNumber === 0) {
        addMove()
        addYouChoose(2)
        if (0.33 > computerRandomNumber) {
            //ножницы против камня
            addComputerChoose(1)

            setComputerNumber(1)
            LoseFunc()
        } else if (0.66 > computerRandomNumber) {
            //ножницы против ножниц
            addComputerChoose(2)

            setComputerNumber(2)
            noWinNoLoseFunc()
        } else {
            // ножницы против бумаги
            addComputerChoose(3)

            setComputerNumber(3)
            WinFunc()
        }
    }
    if (myNumber === 3 && computerNumber === 0) {
        addMove()
        addYouChoose(3)
        if (0.33 > computerRandomNumber) {
            //бумага против камня
            addComputerChoose(1)
            setComputerNumber(1)
            WinFunc()
        } else if (0.66 > computerRandomNumber) {
            //бумага против ножниц
            addComputerChoose(2)

            setComputerNumber(2)
            LoseFunc()
        } else {
            // буммага против бумаги
            addComputerChoose(3)
            setComputerNumber(3)
            noWinNoLoseFunc()
        }
    }

    return (
        <div>
            <h2 className={cn(
                {
                    [s.darck]: theme === 'dark',
                    [s.ligh]: theme === 'light',
                    [s.gold]: theme === 'gold'
                }

            )}>
                {lang === 'ru' && <span>Компьютер</span>}
                {lang === 'eng' && <span>Computer</span>}
            </h2>
            <div>
                <Ava number={computerNumber} />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        computerNumber: state.CountNumberReducer.computerNumber,
    }
};

export default connect(mapStateToProps, {
    AddCountYou,
    AddCountComputer,
    addYouChoose,
    addMove,
    setStatusWin,
    addMoveHistory,
    addComputerChoose,
})(ComputerPlace);