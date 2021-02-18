import React from 'react';
import ReactDOM from 'react-dom';

import s from './History.module.css';
import {CloseOutlined, DeleteOutlined} from '@ant-design/icons';



const History = ({setIsHistory, deleteAllStats}) => {
    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>

                    <div className={s.wrap}>
                        <div>
                            <h1 className={s.h1}>Статистика</h1>
                            <span onClick={() => setIsHistory(false)} className={s.clouse}><CloseOutlined /></span>
                            <span onClick={() => deleteAllStats()} className={s.delete}><DeleteOutlined /></span>
                        </div>
                    </div>

                </div>,
                document.getElementById('modal')
            )}
        </div>
    );
};

export default History;