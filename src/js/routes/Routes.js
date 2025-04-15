import App from './App.js';
import SuccessApp from './SucessApp.js';
import { createBrowserRouter, RouterProvider, } from "react-router";

function Routes () {
  const newsletterRoutes = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/InitialCard',
      element: <App />
    },
    {
      path: '/SuccessCard',
      element: <SuccessApp />
    }
  ])

  return (
    <RouterProvider  router={newsletterRoutes}/>
  )
}

export default Routes;