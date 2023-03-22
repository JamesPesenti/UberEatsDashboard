import { Layout, Image } from "antd"
import SideMenu from "../src/components/SideMenu/index"
import AppRoutes from "../src/components/AppRoutes"
import { Amplify } from "aws-amplify"
import awsconfig from "./aws-exports"
import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

const { Sider, Content, Footer } = Layout

Amplify.configure(awsconfig)

function App() {
  return (
    <Layout>
      <Sider style={{height: "100vh", backgroundColor: "white"}}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false} />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{backgroundColor: "white", textAlign: "center"}}> 
          Uber Eats Dashboard 2023
        </Footer>
      </Layout>
    </Layout> 
  );
}




export default withAuthenticator(App);
