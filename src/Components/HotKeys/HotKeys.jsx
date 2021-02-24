import React from 'react';
import ReactDOM from 'react-dom';

import s from './HotKeys.module.css';
import {CloseOutlined} from "@ant-design/icons";


const HotKeys = ({setIsHotKeys , lang}) => {
    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>
                        <h2 className={s.h2}>
                            {lang === 'ru' && <span>Горячие клавиши</span>}
                            {lang === 'eng' && <span>Hot keys</span>}
                        </h2>
                        <div className={s.clouse} onClick={() => setIsHotKeys(false)} ><CloseOutlined /></div>
                        <div className={s.abs}>
                            <div className={s.feed}><h4>Q</h4> -
                                {lang === 'ru' && <span>Камень</span>}
                                {lang === 'eng' && <span>Rock</span>}
                            </div>
                            <div className={s.feed}><h4>W </h4>
                                {lang === 'ru' && <span> - Ножницы</span>}
                                {lang === 'eng' && <span> - scissors</span>}
                            </div>
                            <div className={s.feed}><h4>E </h4>
                                {lang === 'ru' && <span> - Бумага</span>}
                                {lang === 'eng' && <span> - Paper</span>}
                            </div>
                            <div className={s.feed}><h4>' </h4>
                                {lang === 'ru' && <span> - Настройки/ выйти из настроек</span>}
                                {lang === 'eng' && <span> - Setting/unsetting</span>}
                            </div>
                            <div className={s.feed}><h4>[ </h4>
                                {lang === 'ru' && <span> - Развернуть на большой экран</span>}
                                {lang === 'eng' && <span> - Full screen</span>}
                            </div>
                            <div className={s.feed}><h4>] </h4>
                                {lang === 'ru' && <span> - Выйти из большого экрана</span>}
                                {lang === 'eng' && <span> - Unfull screen</span>}
                            </div>
                        </div>


                    </div>
                </div>, document.getElementById('modal')
            )}
        </div>
    );
};

export default HotKeys;