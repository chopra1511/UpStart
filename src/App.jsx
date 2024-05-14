import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router";
import HomePage from "./components/Homepage/HomePage"
import GetStarted from "./components/UpStart/GetStarted"
import LoginPage from "./components/UpStart/LoginPage"
import CreateStore from "./components/UpStart/GetStarted/CreateStore";
import StoreName from "./components/UpStart/GetStarted/StoreName";
import Category from "./components/UpStart/GetStarted/Category";
import ShowCategory from "./components/UpStart/GetStarted/ShowCategory";

function App() {
  const router = createBrowserRouter([
    { path: "/UpStart", element: <HomePage /> },
    { path: "/UpStart/get-started", element: <GetStarted /> },
    { path: "/UpStart/get-started/loginpage", element: <LoginPage /> },
    { path: "/UpStart/get-started/create-store", element: <CreateStore /> },
    { path: "/UpStart/get-started/store-name", element: <StoreName /> },
    { path: "/UpStart/get-started/store-category", element: <Category /> },
    { path: "/UpStart/get-started/category", element: <ShowCategory /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
