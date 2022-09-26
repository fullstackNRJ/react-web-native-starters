import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  color?: string;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "center" | "left" | "right";
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
};
export type { TextProps };
