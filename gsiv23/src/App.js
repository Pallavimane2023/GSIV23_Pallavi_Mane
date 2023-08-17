import "./App.css";
import ListPage from "./components/ListPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import SingleMoviePage from "./components/SingleMoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListPage />} />
          <Route exact path="/singlemoviepage" element={<SingleMoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
