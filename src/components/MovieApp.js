import AddMovie from "./AddMovie";
import Header from "./Header";
import Heading from "./Heading"
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList"
import {
    BrowserRouter,
    createBrowserRouter,
    HashRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//             <Header />
//             <MovieList />
//         </>
//         ),
//     },
//     {
//         path: "/movie-detail/:movieId",
//         element: (
//           <>
//               <Header />
//               <MovieDetail />
//           </>
//           ),
//       },
//       {
//         path: "/add-movie",
//         element: (
//           <>
//               <Header />
//               <AddMovie />
//           </>
//           ),
//       }
//   ]);
// const MovieApp = () => {
//     return (
//         <div>
//             <RouterProvider router={router} />
//         </div>
//     )
// }
const MovieApp = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
                <Route path="/add-movie" element={<AddMovie />} />
            </Routes>
        </HashRouter>
    )
}
export default MovieApp;