import { useMemo } from "react";
import "./style.css";
type Props = {
  message: string;
};

const GenerateSignage = ({ message }: Props) => {
  const msgMemo = useMemo(() => {
    return message;
  }, [message]);

  return (
    <div className="marquee">
      <span style={{ animation: `marquee ${10}s linear infinite` }}>
        {msgMemo}
      </span>
    </div>
  );
};

export default GenerateSignage;
