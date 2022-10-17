import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Main from "./components/Main";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/add" element={<AddTask />} />

        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
