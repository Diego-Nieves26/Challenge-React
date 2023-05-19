import { createBrowserRouter } from "react-router-dom";
import { HomePage, RecordingPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recording/:id",
    element: <RecordingPage />,
  },
]);
