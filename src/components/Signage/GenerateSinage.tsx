import { useMemo } from "react";
import "./style.css";
import { useSignage } from "../../features/signage/context/signageCtx";
type Props = {
  message: string;
};

const GenerateSignage = ({ message }: Props) => {
  const { timing } = useSignage();
  const msgMemo = useMemo(() => {
    return message;
  }, [message]);

  const timingMemo = useMemo(() => timing, [timing]);

  return (
    <div className="marquee">
      <span style={{ animation: `marquee ${timingMemo}s linear infinite` }}>
        {msgMemo}
      </span>
    </div>
  );
};

export default GenerateSignage;
