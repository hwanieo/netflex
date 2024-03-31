import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import CreateAccount from './routes/create-account'
import Detail from './routes/detail'
import Home from './routes/home'
import Login from './routes/login'
import Profile from './routes/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'detail/:movieId',
        element: <Detail />,
      },
    ],
  },
  {
    path: 'create-account',
    element: <CreateAccount />,
  },
  {
    path: 'login',
    element: <Login />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
