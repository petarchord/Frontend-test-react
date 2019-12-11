import React from "react";

const Table = ({ rows }) => {
  return (
    <div className="table_holder">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Slot</th>
            <th scope="col">City</th>
            <th scope="col">Velocity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.index}>
              <td>{row.index}</td>
              <td>{row.slot ? row.slot : 0}</td>
              <td>{row.city ? row.city : "None"}</td>
              <td>{row.velocity ? row.velocity : 0.0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
