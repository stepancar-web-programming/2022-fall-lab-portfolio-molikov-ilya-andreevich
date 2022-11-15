import React from "react";
import style from "./PlayingHistory.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams from "./Teams/Teams";
import Tournaments from "./Tournaments/Tournaments";

const PlayingHistory = (props) => {

    return (
        <div>
            <div className={style.text}>
                Я начал свою карьеру в EU Masters командах еще в 2013 году, на следующий год я уже вышел в LEC. Вот
                команды в которых мне удалось сыграть за это время и титулы которые мне удалось получить.
            </div>
            <div>
                <div className={style.table}>
                    <h2>Команды</h2>
                    <Teams teams={props.data.teams}/>

                </div>
            </div>
            <div className={style.table}>
                <h2>Турниры</h2>
                <Tournaments tournaments={props.data.tournaments}/>
            </div>
        </div>

    )
}
export default PlayingHistory;