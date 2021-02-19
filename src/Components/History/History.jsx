import React from 'react';
import ReactDOM from 'react-dom';

import s from './History.module.css';
import {CloseOutlined, DeleteOutlined} from '@ant-design/icons';



const History = ({setIsHistory, deleteAllStats, statistics, lang}) => {
    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>

                    <div className={s.wrap}>
                        <div>
                            <h1 className={s.h1}>
                                {lang === 'eng' && <span>Statistics</span>}
                                {lang === 'ru' && <span>Статистика</span>}
                            </h1>
                            <span onClick={() => setIsHistory(false)} className={s.clouse}><CloseOutlined /></span>
                            <span onClick={() => deleteAllStats()} className={s.delete}><DeleteOutlined /></span>
                        </div>
                        <div className={s.divContainer}>
                            {statistics.map(el => <div className={s.fl} key={el.move}>
                                <span>{el.move}</span>
                                <span>
                                    {lang === 'eng' && <span>You:</span>}
                                    {lang === 'ru' && <span>Вы:</span>}

                                    {el.youChooce === 1 && <span className={s.probel}><b>
                                        {lang === 'eng' && <span>rock</span>}
                                        {lang === 'ru' && <span>камень</span>}
                                    </b></span>}
                                    {el.youChooce === 2 && <span className={s.probel}><b>

                                        {lang === 'eng' && <span>scissors</span>}
                                        {lang === 'ru' && <span>ножницы</span>}
                                    </b></span>}
                                    {el.youChooce === 3 && <span className={s.probel}><b>
                                        {lang === 'eng' && <span>paper</span>}
                                        {lang === 'ru' && <span>бумага</span>}
                                    </b></span>}
                                    <span className={s.probel}>vs</span>
                                    <span>
                                        <span className={s.probel}>
                                            {lang === 'eng' && <span>Computer:</span>}
                                            {lang === 'ru' && <span>Компьютер:</span>}

                                        </span>
                                        {el.computerChoose === 1 && <span className={s.probel}><b>
                                            {lang === 'eng' && <span>rock</span>}
                                            {lang === 'ru' && <span>камень</span>}
                                        </b></span>}
                                        {el.computerChoose === 2 && <span className={s.probel}><b>
                                            {lang === 'eng' && <span>scissors</span>}
                                            {lang === 'ru' && <span>ножницы</span>}
                                        </b></span>}
                                        {el.computerChoose === 3 && <span className={s.probel}><b>
                                            {lang === 'eng' && <span>paper</span>}
                                            {lang === 'ru' && <span>бумага</span>}
                                        </b></span>}

                                    </span>
                                </span>
                                <span>
                                    {(el.youChooce === 1) && (el.computerChoose === 1) && <span>
                                        {lang === 'eng' && <span>draw</span>}
                                        {lang === 'ru' && <span>ничья</span>}
                                    </span>}
                                    {(el.youChooce === 1) && (el.computerChoose === 2) && <span>
                                        {lang === 'eng' && <span>win</span>}
                                        {lang === 'ru' && <span>победа</span>}
                                    </span>}
                                    {(el.youChooce === 1) && (el.computerChoose === 3) && <span>
                                        {lang === 'eng' && <span>lose</span>}
                                        {lang === 'ru' && <span>поражение</span>}
                                    </span>}

                                    {(el.youChooce === 2) && (el.computerChoose === 1) && <span>
                                        {lang === 'eng' && <span>lose</span>}
                                        {lang === 'ru' && <span>поражение</span>}
                                    </span>}
                                    {(el.youChooce === 2) && (el.computerChoose === 2) && <span>
                                        {lang === 'eng' && <span>draw</span>}
                                        {lang === 'ru' && <span>ничья</span>}
                                    </span>}
                                    {(el.youChooce === 2) && (el.computerChoose === 3) && <span>
                                        {lang === 'eng' && <span>win</span>}
                                        {lang === 'ru' && <span>победа</span>}
                                    </span>}

                                    {(el.youChooce === 3) && (el.computerChoose === 1) && <span>
                                        {lang === 'eng' && <span>win</span>}
                                        {lang === 'ru' && <span>победа</span>}
                                    </span>}
                                    {(el.youChooce === 3) && (el.computerChoose === 2) && <span>
                                        {lang === 'eng' && <span>lose</span>}
                                        {lang === 'ru' && <span>поражение</span>}
                                    </span>}
                                    {(el.youChooce === 3) && (el.computerChoose === 3) && <span>
                                        {lang === 'eng' && <span>draw</span>}
                                        {lang === 'ru' && <span>ничья</span>}
                                    </span>}






                                </span>
                            </div>)}
                        </div>
                    </div>

                </div>,
                document.getElementById('modal')
            )}
        </div>
    );
};

export default History;