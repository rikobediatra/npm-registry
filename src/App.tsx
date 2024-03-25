import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Pages/Root"
import HomePage from "./Pages/Home/HomePage"
import DetailPage from "./Pages/details/DetailPage"
import SearchPage from "./Pages/search/SearchPage"
import { searchLoader } from "./Pages/search/searchLoader"
import { detailLoader } from "./Pages/details/detailLoader"
import { homeLoader } from "./Pages/Home/homeLoader"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      { path: '/search', element: <SearchPage />, loader: searchLoader },
      { path: '/packages/:name', element: <DetailPage />, loader: detailLoader }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App