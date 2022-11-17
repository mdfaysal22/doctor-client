import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router/Router";
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-lg bg-white dark:bg-gray-800 dark:text-white	mx-auto">
      <div className="mx-8">
        <RouterProvider router={router}>
          
        </RouterProvider>
      </div>
      <Toaster></Toaster>
    </div>
    </div>
  );
}

export default App;
