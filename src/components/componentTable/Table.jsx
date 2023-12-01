export const Table = () => {
    const [cellNumber, setCellNumber] = useState(null);
  
    const handleCellClick = (number) => {
      setCellNumber(number);
    };
  
    const renderTable = () => {
      const cells = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const number = i * 4 + j + 1;
          cells.push(
            <td key={number} onClick={() => handleCellClick(number)}>
              {number}
            </td>,
          );
        }
      }
      return cells;
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
          <tbody>
            <tr>{renderTable()}</tr>
          </tbody>
        </table>
        {cellNumber && (
          <p style={{ color: "yellow" }}>Номер клітинки: {cellNumber}</p>
        )}
      </div>
    );
  };
  