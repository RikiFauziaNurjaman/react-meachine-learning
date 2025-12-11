import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => {
            const component = await import(
              "../pages/predict-diabetes/PredictPage"
            );
            return component.default;
          },
        },
      },
      {
        path : "rps",
        lazy : {
          Component : async () => {
            const component = await import("../pages/rps/RpsPage");
            return component.default;
          },
        },
      }
    ],
  },
]);

export default router;
