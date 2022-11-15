import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router/Router";


function App() {
  return (
    <div className="max-w-screen-lg bg-white dark:bg-gray-800 dark:text-white	mx-auto">
      <div className="mx-8">
        <RouterProvider router={router}>

        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
