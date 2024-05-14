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
    { path: "/", element: <HomePage /> },
    { path: "/get-started", element: <GetStarted /> },
    { path: "/get-started/loginpage", element: <LoginPage /> },
    { path: "/get-started/create-store", element: <CreateStore /> },
    { path: "/get-started/store-name", element: <StoreName /> },
    { path: "/get-started/store-category", element: <Category /> },
    { path: "/get-started/category", element: <ShowCategory /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
