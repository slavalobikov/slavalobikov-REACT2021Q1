import React from 'react';
import s from "../Main/Main.module.css";

const StatusWin = ({statusWin, lang}) => {
    return (
        <>
            {statusWin === 'win' && <div className={s.mod}>
                <h2 className={s.h2}>
                    {lang === 'ru' && <span>В этом ходу вы победили :)</span>}
                    {lang === 'eng' && <span>You win this turn :)</span>}
                </h2>
            </div>}
            {statusWin === 'lose'&& <div className={s.modtwo}>
                <h2 className={s.h2}>
                    {lang === 'ru' && <span>В этом ходу вы проиграли :(</span>}
                    {lang === 'eng' && <span>You lost this turn :(</span>}

                </h2>
            </div>}
            {statusWin === 'noWinNoLose' && <div className={s.modthree}>
                <h2 className={s.h2}>
                    {lang === 'ru' && <span>Ничья :|</span>}
                    {lang === 'eng' && <span>This turn is a draw :|</span>}
                </h2>

            </div>}
        </>
    );
};

export default StatusWin;