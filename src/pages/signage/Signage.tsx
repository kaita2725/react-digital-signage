import GenerateTime from "../../components/Time/GenerateTime";
import GenerateDate from "../../components/Date/GenerateDate";
import GenerateSignage from "../../components/Signage/GenerateSinage";
import { useSignage } from "../../features/signage/context/signageCtx";
// import { useMemo } from "react";
import "./style.css";

const SignagePage = () => {
  const { message } = useSignage();

  return (
    <div className="signage-page">
      <GenerateTime />
      <GenerateDate />
      <GenerateSignage message={message} />
    </div>
  );
};

export default SignagePage;
