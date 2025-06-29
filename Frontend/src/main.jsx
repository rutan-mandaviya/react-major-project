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
        <ToastContainer  autoClose={2000} draggable="mouse" ></ToastContainer>
    </BrowserRouter>
    </Provider>
    
);
