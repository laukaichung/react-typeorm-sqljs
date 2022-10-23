import {FunctionComponent, PropsWithChildren} from "react";

export type FunctionComponentWithChildren<T = { [key: string]: any }> =
    FunctionComponent<PropsWithChildren<T>>;