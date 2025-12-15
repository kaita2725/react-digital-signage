import type { ReactNode } from "react";
import SignageProvider from "../features/signage/context/SignageProvider";

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return <SignageProvider>{children}</SignageProvider>;
};

export default AppProvider;
