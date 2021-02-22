import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";


import Ava from "../../../common/ava/Ava";
import s from './GameTwoComputerTwo.module.css'
import {
    setComputerNumber,
    setComputerNumberTwo,
    setStatusWin,
    setZeroNumber
} from "../../../Redux/reducers/CountNumberReducer";
import StatisticTwoReducer, {
    addCountComputertTwo,
    addCountYouTwo,
    addHistoryTwo,
    addMoveTwoReducer
} from "../../../Redux/reducers/StatisticTwoReducer";

const GameTwoComputerTwo = ({lang,
                                myNumber,
                                addHistoryTwo,
                                computerNumber,
                                setComputerNumber,
                                computerNumberTwo,
                                setStatusWin,
                                addCountYouTwo,
                                addCountComputertTwo,
                                addMoveTwoReducer,
                                setMus,
                                setComputerNumberTwo,
                                setZeroNumber, } ) => {

    const computerRandomNumberOne = Math.random();
    const computerRandomNumberTwo = Math.random();


    const LoseFunc = () => {
        addMoveTwoReducer()
        addHistoryTwo(myNumber,computerNumber,computerNumberTwo, 'lose')

        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber()
            addCountComputertTwo()
            setStatusWin('lose')
            //addMoveHistory()
        }, 1000)
    }


    const noWinNoLoseFunc = () => {
        addMoveTwoReducer()
        addHistoryTwo(myNumber,computerNumber,computerNumberTwo, 'noWinNoLose')

        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber()
            setStatusWin('noWinNoLose')
        }, 1000)
    }

    const WinFunc = () => {
        addMoveTwoReducer()

        addHistoryTwo(myNumber,computerNumber,computerNumberTwo, 'win')

        setStatusWin(null)
        setTimeout(() => {
            setZeroNumber();
            addCountYouTwo();
            //AddCountYou();
            setMus(true)
            setStatusWin('win')
            //addMoveHistory()
        }, 1000)
    }



    const SetComputerNumberOneFunc = () => {
        if (0.33 > computerRandomNumberOne) {
            setComputerNumber(1)
        } else if (0.66 > computerRandomNumberOne) {
            setComputerNumber(2)

        } else {
            setComputerNumber(3)

        }
    }

    const SetComputerNumberTwoFunc = () => {
        if (0.33 > computerRandomNumberTwo) {
            setComputerNumberTwo(1)
        } else if (0.66 > computerRandomNumberTwo) {
            setComputerNumberTwo(2)
        } else {
            setComputerNumberTwo(3)
        }
    }



    if (myNumber !== 0 && computerNumber === 0) {
        SetComputerNumberOneFunc()
        SetComputerNumberTwoFunc()
    }


    if (myNumber === 1) {
        if (computerNumber === 1 && computerNumberTwo === 1) {
            //
            //addHistoryTwo(1,1,1, 'noWinNoLose')
            noWinNoLoseFunc()
        } else if (computerNumber === 2 && computerNumberTwo === 3) {
            //
            //addHistoryTwo(1,2,3, 'noWinNoLose')
            noWinNoLoseFunc()

        } else if (computerNumber === 3 && computerNumberTwo === 2) {
            //
            //addHistoryTwo(1,3,2, 'noWinNoLose')

            noWinNoLoseFunc()

        } else if (computerNumber === 2 && computerNumberTwo === 1) {
            //
            //addHistoryTwo(1,2,1, 'noWinNoLose')

            noWinNoLoseFunc()

        } else if (computerNumber === 1 && computerNumberTwo === 2) {
            //
            //addHistoryTwo(1,1,2, 'noWinNoLose')

            noWinNoLoseFunc()

        } else if (computerNumber === 2 && computerNumberTwo === 2) {
            //
            //addHistoryTwo(1,2,2, 'win')

            WinFunc()
        } else if (computerNumber === 3 || computerNumberTwo === 3) {
            //addHistoryTwo(1,computerNumber,computerNumberTwo, 'lose')

            LoseFunc()
        }
    }

    if (myNumber === 2) {
        if (computerNumber === 2 && computerNumberTwo === 2) {
            //
            //addHistoryTwo(myNumber,computerNumber,computerNumberTwo, 'noWinNoLose')

            noWinNoLoseFunc()

        } else if ( computerNumber === 1 && computerNumberTwo === 3) {
            //
            noWinNoLoseFunc()

        } else if (computerNumber === 3 && computerNumberTwo === 1) {
            //
            noWinNoLoseFunc()

        } else if (computerNumber === 2 && computerNumberTwo === 3) {
            //
            noWinNoLoseFunc()

        } else if (computerNumber === 3 && computerNumberTwo === 2) {
            //
            noWinNoLoseFunc()

        } else if (computerNumber === 3 && computerNumberTwo === 3) {
            WinFunc()
        } else if (computerNumber === 1 || computerNumberTwo === 1) {
            LoseFunc()
        }
    }

    if (myNumber === 3) {
        if (computerNumber === 3 && computerNumberTwo === 3) {
            noWinNoLoseFunc()
        } else if ( computerNumber === 1 && computerNumberTwo === 2) {
            noWinNoLoseFunc()
        } else if (computerNumber === 2 && computerNumberTwo === 1) {
            noWinNoLoseFunc()
        } else if (computerNumber === 1 && computerNumberTwo === 3) {
            noWinNoLoseFunc()
        } else if (computerNumber === 3 && computerNumberTwo === 1) {
            noWinNoLoseFunc()
        } else if (computerNumber === 1 && computerNumberTwo === 1) {
            WinFunc()
        } else if (computerNumber === 2 || computerNumberTwo === 2) {
            LoseFunc()
        }
    }






    return (
        <div className={s.flex}>
            <div>
                <h2>
                    {lang === 'ru' && <span>Компьютер</span>}
                    {lang === 'eng' && <span>Computer</span>}
                </h2>
                <div>
                    <Ava number={computerNumber}/>
                </div>
            </div>
            <div>
                <h2>
                    {lang === 'ru' && <span>Компьютер</span>}
                    {lang === 'eng' && <span>Computer</span>}
                </h2>
                <div>
                    <Ava number={computerNumberTwo}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        computerNumber: state.CountNumberReducer.computerNumber,
        computerNumberTwo:state.CountNumberReducer.computerNumberTwo,
        myNumber:state.CountNumberReducer.myNumber,


    }
};

export default compose(
    connect(mapStateToProps, {
        setComputerNumberTwo,
        setComputerNumber,
        setZeroNumber,
        setStatusWin,
        addCountYouTwo,
        addHistoryTwo,
        addMoveTwoReducer,
        addCountComputertTwo,
    })
)(GameTwoComputerTwo);