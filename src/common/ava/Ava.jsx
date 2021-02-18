import React from 'react';

import stone from './../../common/img/stone.png';
import scissors from './../../common/img/nozni.svg';
import paper from './../../common/img/bumaga.png';

import s from './Ava.module.css'

const Ava = ({number}) => {
    return (

        <div >
            {(number === 0) && <span className={s.ava}>
                Ожидает
            </span>}
            {(number === 1) && <span className={s.stone}>
                <img src={stone} alt="stone"/>
            </span>}
            {(number === 2) && <span className={s.stone}>
                <img src={scissors} alt="scissors"/>
            </span>}
            {(number === 3) && <span className={s.stone}>
                <img src={paper} alt="paper"/>
            </span>}
            {(number === 9) && <span className={s.ava}>
                3
            </span>}
            {(number === 8) && <span className={s.ava}>
                Ожидает
            </span>}
            {(number === 7) && <span className={s.ava}>
                Ожидает
            </span>}
        </div>
    );
};

export default Ava;