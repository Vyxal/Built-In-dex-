import './App.css'
import HomePage from './homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import { createContext } from 'react';
import BulitInsList from './list';
import BuiltInDetailPage from './infopage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "", element: <HomePage />
        },
        { path: "/all", element: <BulitInsList /> },
        {
          path: "/builtin/:name", element: <BuiltInDetailPage />
        }]
    }
  ])

  const context = createContext()

  return (
    <context.Provider value={{}}>
      <RouterProvider router={router} />
    </context.Provider >
  )
}

export default App
