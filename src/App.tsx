import Root from './layout/Root';
import Home from './routes/home/Home';
import ShoppingCart from './routes/shoppingCart/ShoppingCart';
import ErrorComponent from './components/errorComponent/ErrorComponent';
import PageNotFound from './routes/pageNotFound/PageNotFound'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';

const App: React.FC = () =>{
  const router = createBrowserRouter ( [
{
path:"/",
element:<Root/>,
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
    path: "*",
    element: <PageNotFound />
  },
],
errorElement:<ErrorComponent/>


},
  
  ]);
  return (
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  )
  

}

export default App;

