import DetailedOrder from "../src/components/DetailedOrder";
import Orders from "../src/components/Orders";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/" element={<DetailedOrder />} />
    </Routes>
  </BrowserRouter>
  );
}




export default App;
