import { useEffect, useState } from "react";
import "../styles/Signage.css";

const Signage = () => {
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

  const today = new Date();

  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const formattedDateISO = today.toISOString().split("T")[0];

  return (
    <div>
      <div>{formattedTime}</div>
      <div>{formattedDate}</div>
      <div>{formattedDateISO}</div>
      <div className="marquee">
        {" "}
        <span>EXAMPLE TEXT</span>{" "}
      </div>
    </div>
  );
};

export default Signage;
