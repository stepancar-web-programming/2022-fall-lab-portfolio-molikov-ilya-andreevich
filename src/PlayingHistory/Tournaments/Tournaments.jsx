import React from 'react';
import Table from 'react-bootstrap/Table';
import style from '../PlayingHistory.module.css';

const colorOfPlace = (place) => {
  switch (place) {
    case '1':
      return style.first;
    case '2':
      return style.second;
    case '3':
      return style.third;
    default:
      return style.any;
  }
};
function Tournaments(props) {
  const rowsTournaments = props.tournaments.map((el) => (
    <tr>
      <th>{el.date}</th>
      <th className={colorOfPlace(el.place)}>{el.place}</th>
      <th>
        <img alt="logo of event" className={style.Logo} src={el.eventLogo} />
        {' '}
        {el.event}
      </th>
      <th>
        {el.result}
        {' '}
        <img alt="opposite team logo" className={style.Logo} src={el.opositeTeamLogo} />
      </th>
      <th>
        <img alt="team logo" className={style.Logo} src={el.teamLogo} />
        {' '}
        {el.team}
      </th>

    </tr>
  ));
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Place</th>
          <th>Event</th>
          <th>Last result</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {rowsTournaments}
      </tbody>
    </Table>
  );
}
export default Tournaments;
