import type { ReactNode } from "react";

export type signageCtxT = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  timing: number;
  setTiming: React.Dispatch<React.SetStateAction<number>>;
};

export type SignageProvProps = {
  children: ReactNode;
};
