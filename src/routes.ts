import { lazy, LazyExoticComponent } from "react";
import paths from "./data/paths";

export interface RoutePage {
    path: string;
    Component: LazyExoticComponent<any>;
}

export const routes: RoutePage[] = [
    {
        path: paths.home,
        Component: lazy(() => import("./page/home")),
    },
]

