import React  from 'react';


import s from './Main.module.css';
import stone from './../../common/img/stone.png';
import scissors from './../../common/img/nozni.svg';
import paper from './../../common/img/bumaga.png';
import GamePlace from "../GamePlece/GamePlace";


const Main = ({ name,statusWin, setMyNumber, myNumber, setComputerNumber, setZeroNumber, countYou, countComputer}) => {

    return (
        <div>

        <div className={s.name}>Ваше имя: {name}</div>
            <div className={s.points}>
                <div className={s.point}>Ваши очки: {countYou}</div>
                <div className={s.point}>Очки компьютера: {countComputer}</div>
            </div>
            { statusWin === 'win' && <div className={s.mod}>
                <h2 className={s.h2}>В этом ходу вы победили :)</h2>
            </div>}
            {statusWin === 'lose'&& <div className={s.modtwo}>
                <h2 className={s.h2}>В этом ходу вы проиграли :(</h2>
            </div>}
            {statusWin === 'noWinNoLose' && <div className={s.modthree}>
                <h2 className={s.h2}>Ничья :|</h2>

            </div>}
            <GamePlace setComputerNumber={setComputerNumber}
                       setMyNumber={setMyNumber}
                       setZeroNumber={setZeroNumber}
                       myNumber={myNumber}
            />


            <div className={s.containerbox}>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>Камень</h3></div>
                    <img  onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(1)
                    }} src={stone} alt="stone"/>
                </div>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>Ножницы</h3></div>

                    <img onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(2)
                    }} src={scissors} alt="scissors"/>
                </div>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={s.right}>Бумага</h3></div>

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