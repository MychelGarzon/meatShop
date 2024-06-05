import Root from './layout/Root';
import ErrorComponent from './components/errorComponent/ErrorComponent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';

// lazy load routes
import { lazy } from 'react';

const Home = lazy(() => import('./routes/home/Home'));
const PageNotFound = lazy(() => import('./routes/pageNotFound/PageNotFound'));
const TermsAndConditions = lazy(() => import('./routes/termsAndConditions/TermsAndConditions'));
const ShoppingCart = lazy(() => import('./routes/shoppingCart/ShoppingCart'));
const About = lazy(() => import('./routes/about/About'));
const Success = lazy(() => import('./routes/success/Success'));
const Privacy = lazy(() => import('./routes/privacy/Privacy'));

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <ShoppingCart />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/terms",
          element: <TermsAndConditions />
        },
        {
          path: "/privacy",
          element: <Privacy />
        },
        {
          path: "/success",
          element: <Success />
        },
        {
          path: "*",
          element: <PageNotFound />
        },
      ],
      errorElement: <ErrorComponent />
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App;
