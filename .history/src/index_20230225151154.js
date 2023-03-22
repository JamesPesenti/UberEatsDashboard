import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Layout, Image} from "antd"
// import "antd/dist/antd.css"
import { useNavigate } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
// const navigate = useNavigate() 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


