import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AllRecipes from "../pages/AllRecipes";
import AddRecipes from "../pages/AddRecipes";
import MyRecipes from "../pages/MyRecipes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecipeDetails from "../pages/RecipeDetails";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Mainlayout,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/allrecipes',
        loader: () => fetch('https://recipe-book-server-indol.vercel.app/recipes'),
        Component: AllRecipes
      },
      {
        path: '/addrecipes',
        element: <PrivateRoutes><AddRecipes></AddRecipes></PrivateRoutes>
      },
      {
        path: '/myrecipes',
        // loader: ({params})=> fetch(`https://recipe-book-server-indol.vercel.app/recipes/${params}`),
        element: <PrivateRoutes><MyRecipes></MyRecipes></PrivateRoutes>
      },
      {
        path:'/recipedetails/:id',
        loader: ({params})=>fetch(`https://recipe-book-server-indol.vercel.app/recipes/id/${params.id}`),
        element: <PrivateRoutes><RecipeDetails></RecipeDetails></PrivateRoutes>
      }
    ]
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  },
  {
    path: '*',
    Component: ErrorPage

  }

])