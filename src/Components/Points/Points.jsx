import React from 'react';
import s from "../Main/Main.module.css";

import cn from 'classnames';


const Points = ({lang, countYou, countComputer, textRuYou, textEngYou, textRuComp, textEngComp, theme }) => {

    return (
            <span className={s.points}>
                <div className={cn(s.point, {
                        [s.darck]: theme === 'dark',
                        [s.ligh]: theme === 'light',
                        [s.gold]: theme === 'gold',
                })}>
                    {lang === 'ru' && <span>{textRuYou}: </span>}
                    {lang === 'eng' && <span>{textEngYou}: </span>}
                     {countYou}</div>
                <div className={cn(s.point, {
                     [s.darck]: theme === 'dark',
                        [s.light]: theme === 'light',
                        [s.gold]: theme === 'gold',
                })}>
                    {lang === 'ru' && <span> {textRuComp}</span>}
                    {lang === 'eng' && <span> {textEngComp}</span>}
                    : {countComputer}</div>
            </span>
    );
};

export default Points;