import DetailedOrder from "../src/components/DetailedOrder";
import Orders from "../src/components/Orders";
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function App() {

  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
    </Routes>  
  );
}




export default App;
