import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import Home from './routes/home'
import Profile from './routes/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  )
}

export default App
