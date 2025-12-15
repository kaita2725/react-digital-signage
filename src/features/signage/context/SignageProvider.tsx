import { useSignageState } from "../hooks/useSignageState";
import type { signageCtxT, SignageProvProps } from "../type";
import { SignageContext } from "./signageCtx";

const SignageProvider = ({ children }: SignageProvProps) => {
  const { message, setMessage, timing, setTiming } = useSignageState();

  const value: signageCtxT = { message, setMessage, timing, setTiming };
  return (
    <SignageContext.Provider value={value}>{children}</SignageContext.Provider>
  );
};

export default SignageProvider;
