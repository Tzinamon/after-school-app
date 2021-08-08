import React from "react";
import { Table, thead, tbody } from "react-bootstrap";

function WeeklySchedule(props) {
  return (
    <div>
      <Table borderless hover>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>17:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
          <tr>
            <td>18:00</td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default WeeklySchedule;
