import React from 'react';
import ReactDOM from 'react-dom'

import s from './NewGame.module.css';
import {Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const NewGame = (props) => {

    const onevsone = () => {
        props.setZeroTwoHistory()
        props.deleteAllStats()
        props.setIsOne(true)
        props.history.push('/')
    }

    const onevstwo = () => {
        props.setZeroTwoHistory()
        props.deleteAllStats()
        props.setIsOne(false)
        props.history.push('/')
    }


    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>
                        <h1>
                            {props.lang === 'ru' && <span>Выберите режим игры</span>}
                            {props.lang === 'eng' && <span>Select game mode</span>}
                        </h1>
                        <div onClick={() => props.setIsNewGame(false)} className={s.icon}><CloseOutlined /></div>
                        <div className={s.buttons}>
                            <Button onClick={() => onevsone()}   type="primary" size={'little'}>
                                1 vs 1
                            </Button>
                            <Button onClick={() => onevstwo()}   type="primary" size={'little'}>
                                1 vs 2
                            </Button>
                        </div>
                    </div>

                </div>, document.getElementById('modal')
            )}
        </div>
    );
};

export default compose(withRouter)(NewGame);