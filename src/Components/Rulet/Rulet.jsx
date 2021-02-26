import React, {useState, useEffect} from 'react';
import cn from 'classnames';

import s from './Rulet.module.css'

const Rulet = () => {

    const [state, setState] = useState('circle');

    const startRotation = () => {
        setState('circle')
        setState('circle start-rotate')
        setTimeout(() => {
            setState('circle start-rotate stop-rotate')
        }, 10)
    }

    return (
        <div className={s.rulet}>
            <div>
                <div id={'arrow'} className={s.arrow}></div>
                <ul id={'ul'} className={ cn({
                    [s.circle] : state === 'circle',
                    [`${s.circle} ${s.startrotate}`]: state === 'circle start-rotate',
                    [`${s.circle} ${s.startrotate} ${s.stoprotate}`]: state === 'circle start-rotate stop-rotate'
                })}>
                    <li className={s.li}>
                        <div className={s.text}>1</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>2</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>3</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>4</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>5</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>6</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>7</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>8</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>9</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>10</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>11</div>
                    </li>
                    <li className={s.li}>
                        <div className={s.text}>12</div>
                    </li>
                </ul>
            </div>
            <div>
                <button onClick={() => startRotation()} className={s.btnSpin}>spin</button>
            </div>
            <div>
                <button onClick={() => {
                    console.log(document.documentElement)

                }}>
                    firstchild
                </button>
            </div>
        </div>
    );
};

export default Rulet;