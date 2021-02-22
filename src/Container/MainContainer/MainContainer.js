import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";



import Main from "../../Components/Main/Main";
import {setComputerNumber, setMyNumber, setZeroNumber} from "../../Redux/reducers/CountNumberReducer";

const MainContainer = (props) => {

    console.log('stata', props.stata)

    return (
        <Main  {...props} />
    );
};

const mapStateToProps = (state) => {
    return {
        myNumber: state.CountNumberReducer.myNumber,
        countYou: state.StatisticsReducer.countYou,
        countComputer: state.StatisticsReducer.countComputer,
        statusWin: state.CountNumberReducer.statusWin,
        isOne: state.OneTwoReducer.isOne,

        youCountTwo: state.StatisticTwoReducer.youCountTwo,
        computerCountTwo: state.StatisticTwoReducer.computerCountTwo,
        statisticTwo: state.StatisticTwoReducer.statisticTwo,
        stata:state.StatisticTwoReducer.stata,
    }
};

export default compose(
    connect(mapStateToProps, {
        setMyNumber,
        setComputerNumber,
        setZeroNumber,

    })
)(MainContainer);