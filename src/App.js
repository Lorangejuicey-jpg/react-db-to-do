import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { db } from "./firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import "./App.css";
import Content from "./content";
import RouterPage from "./router";
import Login from "./components/login";
import Register from "./components/Registreren";
import Reset from "./components/Reset";
import Dashboard from "./components/Reset";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/router" element={<RouterPage />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
