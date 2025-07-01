import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(

    <Provider store={store}>    
    <BrowserRouter>
        <App />
       <ToastContainer
  position="top-right"
  autoClose={1000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark" // this adds dark background + white text
  toastClassName="!bg-black !text-white rounded shadow-lg"
  bodyClassName="text-sm"
  closeButton={false} // this removes close icon
/>
    </BrowserRouter>
    </Provider>
    
);
