import React from "react";
import Square from "./sqaure";

const Table = ({ width, height }) => {
  const rows = [];
  for (let i = 0; i < height; i++) {
    rows.push(
      <tbody key={i}>
        <tr key={i}>
          <Square width={width}/>
        </tr>
      </tbody>
    );
  }

  return (
    <table>
      {rows}
    </table>
  );
};

export default Table;
