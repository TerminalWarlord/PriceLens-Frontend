import { ThemeProvider } from './components/theme-provider';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/pages/Home';
import Layout from './components/layout/Layout';
import SearchPage from './components/pages/SearchPage';
import { Toaster } from './components/ui/sonner';
import NotFound from './components/pages/NotFound';
import TermsOfUse from './components/pages/TermsOfUse';
import Disclaimer from './components/pages/Disclaimer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />
      },
      {
        path: 'disclaimer',
        element: <Disclaimer />
      }
    ]
  }
])
function App() {
  return <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider >
}

export default App
