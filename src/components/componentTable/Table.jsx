import { useState } from "react";
export const Table = () => {
    const [cellNumber, setCellNumber] = useState(null);
  
    const handleTableClick = (event) => {
      if (event.target.tagName === "TD") {
        const number = parseInt(event.target.textContent, 10);
        setCellNumber(number);
      }
    };
  
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const cells = [];
      for (let j = 0; j < 4; j++) {
        const number = i * 4 + j + 1;
        cells.push(
          <td key={number}>{number}</td>
        );
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
  
    return (
      <div
        style={{
          marginLeft: "650px",
          cursor: "pointer",
          color: "blue",
          fontSize: "40px",
        }}
        onClick={handleTableClick}
      >
        <table>
          <tbody>{rows}</tbody>
        </table>
        {cellNumber && (
          <p style={{ color: "yellow" }}>Номер клітинки: {cellNumber}</p>
        )}
      </div>
    );
  };
  