import React from 'react';
import ReactDOM from 'react-dom';

import s from './ColorThem.module.css'
import {Button} from "antd";


const ColorThem = ({setIsColorThem, setTheme, lang}) => {

    const theme = (them) => {
        setTheme(them)
        setIsColorThem(false)
    }

    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.main}>
                        <div><h1 className={s.h1}>
                            {lang === 'eng' && <span>Choose a background</span>}
                            {lang === 'ru' && <span>Выберите тему</span>}
                        </h1></div>
                        <div className={s.fle}>
                            <div><Button onClick={() => theme('dark')} type="primary" size={'large'}>
                                {lang === 'eng' && <span>Dark</span>}
                                {lang === 'ru' && <span>Темная</span>}
                            </Button>
                            </div>
                            <div>
                                <Button onClick={() => theme('light')} type="primary" size={'large'}>
                                    {lang === 'eng' && <span>Light</span>}
                                    {lang === 'ru' && <span>Светлая</span>}
                            </Button>
                            </div>
                            <div>
                                <Button onClick={() => theme('gold')} type="primary" size={'large'}>
                                    {lang === 'eng' && <span>Gold</span>}
                                    {lang === 'ru' && <span>Золотая</span>}
                            </Button>
                            </div>
                        </div>


                    </div>
                </div>, document.getElementById('modal')
            )}
        </div>
    );
};

export default ColorThem;