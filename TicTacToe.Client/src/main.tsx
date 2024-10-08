import { StrictMode } from 'react'
import { createRoot  } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/index.css'
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Game from './pages/Game.tsx';
import CharacterSelect from './pages/CharacterSelect.tsx';
import SignUp from './pages/SignUp.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/character',
    element: <CharacterSelect />,
  },
  {
    path: '/startgame',
    element: <Game />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
