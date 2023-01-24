import React from 'react';
import Table from 'react-bootstrap/Table';
import style from '../PlayingHistory.module.css';

function Teams(props) {
  const rowsTeams = props.teams.map((el) => (
    <tr>
      <th>{el.region}</th>
      <th>
        <img alt="logo of team" className={style.Logo} src={el.teamLogo} />
        {' '}
        {el.team}
      </th>
      <th>
        <img alt="logo of team" className={style.Logo} src={el.positionLogo} />
        {' '}
        {el.start}
      </th>
      <th>{el.end}</th>
      <th>{el.time}</th>
    </tr>
  ));
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Region</th>
          <th>Team</th>
          <th>Start</th>
          <th>End</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {rowsTeams}
      </tbody>
    </Table>
  );
}
export default Teams;
