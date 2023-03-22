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
    <Sider style={{height: "100vh", backgroundColor: "white"}}>
      <Image src="https://1000logos.net/wp-content/uploads/2021/04/Uber-Eats-logo.png" />
    </Sider>
  </Layout>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
);


