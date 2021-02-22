import React  from 'react';


import s from './Main.module.css';
import stone from './../../common/img/stone.png';
import scissors from './../../common/img/nozni.svg';
import paper from './../../common/img/bumaga.png';
import GamePlace from "../GamePlece/GamePlace";
import GameTwoPlace from "../GameTwoPlace/GameTwoPlace";


const Main = ({lang,
                  computerCountTwo,
                  youCountTwo,
                  setMus,
                  statusWin,
                  setMyNumber,
                  myNumber,
                  setComputerNumber,
                  setZeroNumber,
                  countYou,
                  isOne,
                  countComputer}) => {
    return (
        <div>

            {isOne && <span>
            <div className={s.points}>
                <div className={s.point}>
                    {lang === 'ru' && <span>Ваши очки:</span>}
                    {lang === 'eng' && <span>Your points:</span>}
                    {countYou}</div>
                <div className={s.point}>
                    {lang === 'ru' && <span>Очки компьютера</span>}
                    {lang === 'eng' && <span>Computer points</span>}
                    : {countComputer}</div>
            </div>
            { statusWin === 'win' && <div className={s.mod}>
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
            <GamePlace setComputerNumber={setComputerNumber}
                       lang={lang}
                       setMyNumber={setMyNumber}
                       setMus={setMus}
                       setZeroNumber={setZeroNumber}
                       myNumber={myNumber}
            /> </span>}
            {!isOne && <span>
            <span className={s.points}>
                <div className={s.point}>
                    {lang === 'ru' && <span>Ваши очки:</span>}
                    {lang === 'eng' && <span>Your points:</span>}
                    {youCountTwo}</div>
                <div className={s.point}>
                    {lang === 'ru' && <span>Очки компьютера</span>}
                    {lang === 'eng' && <span>Computer points</span>}
                    : {computerCountTwo}</div>
            </span>
                { statusWin === 'win' && <div className={s.mod}>
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
                <GameTwoPlace setMus={setMus} myNumber={myNumber} lang={lang} />
                </span>

            }


            <div className={s.containerbox}>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>
                        {lang === 'ru' && <span>Камень</span>}
                        {lang === 'eng' && <span>Rock</span>}
                    </h3></div>
                    <img  onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(1)
                    }} src={stone} alt="stone"/>
                </div>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>
                        {lang === 'ru' && <span>Ножницы</span>}
                        {lang === 'eng' && <span>Scissors</span>}
                    </h3></div>

                    <img onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(2)
                    }} src={scissors} alt="scissors"/>
                </div>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>
                        {lang === 'ru' && <span>Бумага</span>}
                        {lang === 'eng' && <span>Paper</span>}
                    </h3></div>

                    <img onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(3)
                    }} src={paper} alt="paper"/>
                </div>
            </div>

        </div>
    );
};

export default Main;