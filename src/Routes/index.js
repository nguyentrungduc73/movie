import Login from "../pages/Auth/Login";
import LoginGoogle from "../pages/Auth/LoginGoogle";
import redirect from "../pages/Auth/redirect";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import MovieInfo from "../pages/MovieInfo/MovieInfo";
import SearchMovie from "../pages/SearchMovie/SearchMovie";
import Watch from "../pages/Watch/Watch";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/google",
    component: LoginGoogle,
  },
  {
    path: "/category/:categoryName",
    component: Category,
  },
  {
    path: "/movieinfo/:movieId",
    component: MovieInfo,
  },
  {
    path: "/search",
    component: SearchMovie,
  },
  {
    path: "/watch/:movieId",
    component: Watch,
  },
  {
    path: "/redirect",
    component: redirect,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
