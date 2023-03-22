import DetailedOrder from "../src/components/DetailedOrder";
import Orders from "../src/components/Orders";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function App() {

  const navigate = useNavigate()

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path=":id" element={<DetailedOrder />} />
    </Routes>
  </BrowserRouter>    
  );
}




export default App;
