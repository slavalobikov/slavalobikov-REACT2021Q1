import React from 'react';
import cn from 'classnames';



import s from './Main.module.css';
import stone from './../../common/img/stone.png';
import scissors from './../../common/img/nozni.svg';
import paper from './../../common/img/bumaga.png';
import GamePlace from "../GamePlece/GamePlace";
import GameTwoPlace from "../GameTwoPlace/GameTwoPlace";
import Points from "../Points/Points";
import GamePlaceAutoplay from "../GamePlaceAutoplay/GamePlaceAutoplay";
import StatusWin from "../StatusWin/StatusWin";


const Main = ({
                  lang,
                  computerCountTwo,
                  youCountTwo,
                  enemyComputerPoint,
                  youComputerPoint,
                  theme,
                  setMus,
                  statusWin,
                  setMyNumber,
                  myNumber,
                  setComputerNumber,
                  setZeroNumber,
                  countYou,
                  isAutoplay,
                  isOne,
                  countComputer
              }) => {
    return (
        <div>

            {isOne && (!isAutoplay) && <span>
                <Points lang={lang} countComputer={countComputer}
                        theme={theme}
                        countYou={countYou}
                        textRuComp={'Очки компьютера'}
                        textRuYou={'Ваши очки'}
                        textEngYou={'Your points'}
                        textEngComp={'Computer points'}/>
                <StatusWin statusWin={statusWin} lang={lang}/>

            <GamePlace setComputerNumber={setComputerNumber}
                       lang={lang}
                       theme={theme}
                       setMyNumber={setMyNumber}
                       setMus={setMus}
                       setZeroNumber={setZeroNumber}
                       myNumber={myNumber}
            /> </span>}
            {!isOne && (!isAutoplay) && <span>
                <Points countYou={youCountTwo}
                        textRuComp={'Очки компьютера'}
                        textEngYou={'Your points'}
                        theme={theme}
                        textEngComp={'Computer points'}
                        lang={lang}
                        textRuYou={'Ваши очки'}
                        countComputer={computerCountTwo}/>
                <StatusWin statusWin={statusWin} lang={lang}/>
                <GameTwoPlace theme={theme} setMus={setMus} myNumber={myNumber} lang={lang}/>
                </span>}
            {isAutoplay && <span>
                                <Points countYou={youComputerPoint}
                                        textRuComp={'Очки вражеского компьютера<'}
                                        textEngYou={'Computer points'}
                                        theme={theme}
                                        textEngComp={'Enemy computer points'}
                                        lang={lang}
                                        textRuYou={'Очки вашего компьютера'}
                                        countComputer={enemyComputerPoint}/>
                                <StatusWin statusWin={statusWin} lang={lang}/>
                                        <div className={s.mig}>
                                            autoplay
                                        </div>

                                        <GamePlaceAutoplay youEng={'Your computer'}
                                                           setMus={setMus}
                                                           theme={theme}
                                                           EnemyEng={'Enemy computer'}
                                                           EnemyRu={'Компьютер противника'}
                                                           youRu={'Ваш компьютер'} lang={lang}/>
            </span>}


            <div className={s.containerbox}>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={cn(s.right,
                        {
                            [s.darck]: theme === 'dark',
                            [s.ligh]: theme === 'light',
                            [s.gold]: theme === 'gold',
                        })}>
                        {lang === 'ru' && <span>Камень</span>}
                        {lang === 'eng' && <span>Rock</span>}
                    </h3></div>
                    <img onClick={() => {
                        if (myNumber !== 0) {
                            return
                        }
                        setMyNumber(1)
                    }} src={stone} alt="stone"/>
                </div>
                <div className={s.knbCon}>
                    <div className={s.visability}><h3 className={cn(s.right,
                        {
                            [s.darck]: theme === 'dark',
                            [s.ligh]: theme === 'light',
                            [s.gold]: theme === 'gold',
                        }
                        )}>
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
                    <div className={s.visability}><h3 className={cn(s.right,
                        {
                            [s.darck]: theme === 'dark',
                            [s.ligh]: theme === 'light',
                            [s.gold]: theme === 'gold',
                        }
                        )}>
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