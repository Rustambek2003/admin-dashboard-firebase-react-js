import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebare/Sidebare";

import { Route, Routes } from "react-router-dom";
import Item from "./pages/item/Item";
import ItemInfo from "./pages/ItemInfo/ItemInfo";
import Update from "./pages/ItemInfo/Update";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/item" element={<Item />} />
          <Route path="/item-info/:id" element={<ItemInfo />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <RightSide />
      </div>
    </div>
  );
}

export default App;
