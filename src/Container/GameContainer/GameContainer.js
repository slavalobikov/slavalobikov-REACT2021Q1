import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";


import Game from "../../Components/Game/Game";
import {setLang, setTheme} from "../../Redux/reducers/ThemReducer";
import {setVoluem, setVoluemSignal} from "../../Redux/reducers/MusicReducer";
import {setMyNumber, setStatusWin} from "../../Redux/reducers/CountNumberReducer";
import {AddCountYou, deleteAllStats} from "../../Redux/reducers/StatisticReducer";
import {setIsOne} from "../../Redux/reducers/OneTwoReducer";
import {setZeroTwoHistory} from "../../Redux/reducers/StatisticTwoReducer";
import {deleteAutoplayStata, editIsAutoPlay} from "../../Redux/reducers/AutoplayReducer";

const GameContainer = (props) => {

    return (
        <Game  {...props} />
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemReducer.theme,
        voluem: state.MusicReducer.voluem,
        name:state.StatisticsReducer.name,
        myNumber: state.CountNumberReducer.myNumber,
        isOne: state.OneTwoReducer.isOne,
        stata:state.StatisticTwoReducer.stata,


        statistics: state.StatisticsReducer.statistics,
        voluemSignal: state.MusicReducer.voluemSignal,
        lang: state.ThemReducer.lang,
        stataAutoplay:state.AutoplayReducer.stataAutoplay,
        isAutoplay: state.AutoplayReducer.isAutoplay,

    }
};

export default compose(
    connect(mapStateToProps, {setTheme,
        setVoluem,
        AddCountYou,
        setMyNumber,
        setZeroTwoHistory,
        setStatusWin,
        deleteAllStats,
        setVoluemSignal,
        setIsOne,
        deleteAutoplayStata,
        editIsAutoPlay,
        setLang,
    })
)(GameContainer);