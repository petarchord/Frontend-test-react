import React from "react";

const Table = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
