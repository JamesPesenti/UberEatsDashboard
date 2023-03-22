import DetailedOrder from "../src/components/DetailedOrder";
import Orders from "../src/components/Orders";
import { Routes, Route } from "react-router-dom"
import { Layout, Image } from "antd"
import SideMenu from "../src/components/SideMenu/index"

const { Sider, Content, Footer } = Layout


function App() {

  return (
    <Layout>
      <Sider style={{height: "100vh", backgroundColor: "white"}}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false} />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="menu/:id" element={<RestaurantMenu />} />
          </Routes>
        </Content>
        <Footer style={{backgroundColor: "white", textAlign: "center"}}> 
          Uber Eats Dashboard 2023
        </Footer>
      </Layout>
    </Layout> 
  );
}




export default App;
