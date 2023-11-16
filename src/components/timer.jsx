import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearTimeout(timerID);
  }, [time]);

  return <p style={{ color: "red", fontSize: "25px" }}>TimeSecond : {time}</p>;
};
