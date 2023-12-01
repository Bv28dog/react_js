export const Table = () => {
    const [cellNumber, setCellNumber] = useState(null);
  
    const handleTableClick = (event) => {
      if (event.target.tagName === "TD") {
        const number = parseInt(event.target.textContent, 10);
        setCellNumber(number);
      }
    };
  
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
          <tbody>
            {Array.from({ length: 4 }, (_, i) => (
              <tr key={i}>
                {Array.from({ length: 4 }, (_, j) => (
                  <td key={i * 4 + j + 1}>{i * 4 + j + 1}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {cellNumber && (
          <p style={{ color: "yellow" }}>Номер клітинки: {cellNumber}</p>
        )}
      </div>
    );
  };
  