import { ThemeProvider } from './components/theme-provider';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import SearchPage from './components/pages/SearchPage';
import { Toaster } from './components/ui/sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
])
function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider >
}

export default App
