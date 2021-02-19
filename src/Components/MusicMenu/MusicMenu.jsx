import React from 'react';
import ReactDOM from 'react-dom';

import {CloseOutlined, DownOutlined, UpOutlined} from '@ant-design/icons';
import s from './MusicMenu.module.css';


const MusicMenu = ({ setIsMusicMenu, setVoluem, voluem, voluemSignal, setVoluemSignal, lang}) => {
    const DownMusic = () => {
        setVoluem(voluem - 0.1)
    }
    const UpMusic = () => {
        setVoluem(voluem + 0.1)
    }
    const DownSignal = () => {
        setVoluemSignal(voluemSignal - 0.1)
    }

    const UpSignal = () => {
        setVoluemSignal(voluemSignal + 0.1)
    }

    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>
                        <div>
                            <h1 className={s.h1}>
                                {lang === 'ru' && 'Настройки звука'}
                                {lang === 'eng' && 'Music settings'}
                            </h1>
                            <div
                                onClick={() => setIsMusicMenu(false)} className={s.clouse}><CloseOutlined /></div>

                        </div>
                        <div className={s.flex}>
                            <div>
                                {lang === 'ru' && <span>Громкость музыки:</span>}
                                {lang === 'eng' && <span>Music volume:</span>}
                                {!(voluem < 0.1) && <DownOutlined onClick={() => DownMusic()} className={s.icon} /> }
                                <b>{Math.round(voluem * 100)}%</b>
                                {!(voluem > 0.89) && <UpOutlined onClick={() => UpMusic()} className={s.icon} />}</div>
                        </div>
                        <div className={s.h1}>
                            {lang === 'ru' && <span>Громкость звуков:</span>}
                            {lang === 'eng' && <span>Signal volume:</span>}
                            {!(voluemSignal < 0.1) && <DownOutlined onClick={() => DownSignal()} className={s.icon} />}
                            <b>{Math.round(voluemSignal * 100)}%</b>
                            {!(voluemSignal > 0.89) && <UpOutlined onClick={() => UpSignal()} className={s.icon} />}

                        </div>

                    </div>
                </div>, document.getElementById('modal')
            )}
        </div>
    );
};

export default MusicMenu;