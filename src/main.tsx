import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Policy from './pages/Policy/Index.tsx';
import Form from "./pages/VacancyForm";
import Login from "./pages/LoginForm";
import Registration from "./pages/registrationForm";
import UserInfo from "./pages/userInfo";
import AdminPage from "./pages/Admin";
import MainPage from './pages/Main/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage/>
      },
      {
        path: 'admin',
        element: <AdminPage />,
        errorElement: <ErrorPage/>
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage/>
      },
      {
        path: 'registration',
        element: <Registration />,
        errorElement: <ErrorPage/>
      },
      {
        path: "policy",
        element: <Policy />,
        errorElement: <ErrorPage />,
      },
      {
        path: "form",
        element: <Form />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'profile',
        element: <UserInfo/>,
        errorElement: <ErrorPage />,
    
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
