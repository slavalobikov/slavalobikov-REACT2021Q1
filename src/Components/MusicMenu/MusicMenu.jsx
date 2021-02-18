import React from 'react';
import ReactDOM from 'react-dom';

import {CloseOutlined, DownOutlined, UpOutlined} from '@ant-design/icons';
import s from './MusicMenu.module.css';


const MusicMenu = ({ setIsMusicMenu, setVoluem, voluem}) => {
    const DownMusic = () => {
        setVoluem(voluem - 0.1)
    }
    const UpMusic = () => {
        setVoluem(voluem + 0.1)
    }

    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>
                        <div>
                            <h1 className={s.h1}>Настройки звука</h1>
                            <div onClick={() => setIsMusicMenu(false)} className={s.clouse}><CloseOutlined /></div>

                        </div>
                        <div className={s.flex}>
                            <div>Громкость музыки:
                                {!(voluem < 0.1) && <DownOutlined onClick={() => DownMusic()} className={s.icon} /> }
                                <b>{Math.round(voluem * 100)}%</b>
                                {!(voluem > 0.89) && <UpOutlined onClick={() => UpMusic()} className={s.icon} />}</div>
                        </div>
                        <button onClick={() => setIsMusicMenu(false)}>ddd</button>
                    </div>
                </div>, document.getElementById('modal')
            )}
        </div>
    );
};

export default MusicMenu;