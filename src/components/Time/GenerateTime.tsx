import { useEffect, useState } from "react";
import "./style.css";

const GenerateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString();
  return (
    <div className="time-container">
      <span>{formattedTime}</span>
    </div>
  );
};
export default GenerateTime;
