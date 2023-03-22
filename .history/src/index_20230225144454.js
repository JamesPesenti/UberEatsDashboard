import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Layout, Image} from "antd"
// import "antd/dist/antd.css"

const { Sider, Content, Footer } = Layout

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
    <Sider style={{height: "100vh", backgroundColor: "white"}}></Sider>
  </Layout>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
);


