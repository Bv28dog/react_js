import React, { useState } from "react";

export const Table = () => {
  const [cellNumber, setCellNumber] = useState(null);

  const handleCellClick = (rowIndex, colIndex) => {
    const number = rowIndex * 4 + colIndex + 1;
    setCellNumber(number);
  };

  const renderTable = () => {
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const cells = [];
      for (let j = 0; j < 4; j++) {
        cells.push(
          <td key={j} onClick={() => handleCellClick(i, j)}>
            {i * 4 + j + 1}
          </td>,
        );
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div
      style={{
        marginLeft: "650px",
        cursor: "pointer",
        color: "blue",
        fontSize: "40px",
      }}
    >
      <table>
        <tbody>{renderTable()}</tbody>
      </table>
      {cellNumber && (
        <p style={{ color: "yellow" }}>Номер клітинки: {cellNumber}</p>
      )}
    </div>
  );
};
