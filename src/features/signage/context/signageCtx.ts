import { createContext, useContext } from "react";
import type { signageCtxT } from "../type";

export const SignageContext = createContext<signageCtxT | undefined>(undefined);

export const useSignage = () => {
  const ctx = useContext(SignageContext);
  if (!ctx) throw new Error("useSignage must be used within a SignageProvider");
  return ctx;
};
