import React from "react";
import Table from "react-bootstrap/Table";
import style from "../PlayingHistory.module.css";

const Teams = (props) => {

    let rowsTeams = props.teams.map(el => <tr>
        <th>{el.region}</th>
        <th><img className={style.Logo} src={el.teamLogo}/> {el.team}</th>
        <th><img className={style.Logo} src={el.positionLogo}/> {el.start}</th>
        <th>{el.end}</th>
        <th>{el.time}</th>
    </tr>)
    return (<Table striped bordered hover>
        <thead>
        <tr>
            <th></th>
            <th>Team</th>
            <th>Start</th>
            <th>End</th>
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        {rowsTeams}
        </tbody>
    </Table>)
}
export default Teams;