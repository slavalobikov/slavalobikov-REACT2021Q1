import React from 'react';
import ReactDOM from 'react-dom';

import s from './ColorThem.module.css'
import {Button} from "antd";


const ColorThem = ({setIsColorThem, setTheme}) => {

    const theme = (them) => {
        setTheme(them)
        console.log(them)
        setIsColorThem(false)
    }

    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.main}>
                        <div><h1 className={s.h1}>Выберите подходящую вам тему</h1></div>
                        <div className={s.fle}>
                            <div><Button onClick={() => theme('dark')} type="primary" size={'large'}>
                                Темную тему
                            </Button>
                            </div>
                            <div>
                                <Button onClick={() => theme('light')} type="primary" size={'large'}>
                                Светлую тему
                            </Button>
                            </div>
                            <div>
                                <Button onClick={() => theme('gold')} type="primary" size={'large'}>
                                Золотую тему
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