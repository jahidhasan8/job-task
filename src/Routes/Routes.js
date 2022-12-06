import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Step1 from "../Pages/Step1/Step1";
import Step2 from "../Pages/Step2/Step2";
import Step3 from "../Pages/Step3/Step3";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Step1></Step1>
            },
            {
                path: '/step2',
                element: <Step2></Step2>
            },
            {
                path: '/step3',
                element: <Step3></Step3>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }


])