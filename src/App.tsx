import Root from './layout/Root';
import Home from './routes/home/Home';
import ShoppingCart from './routes/shoppingCart/ShoppingCart';
import ErrorComponent from './components/errorComponent/ErrorComponent';
import PageNotFound from './routes/pageNotFound/PageNotFound'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    <RouterProvider router={router}>
    </RouterProvider>
  )
  

}

export default App;

