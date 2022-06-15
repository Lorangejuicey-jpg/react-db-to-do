import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { db } from './firebase.js';
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import './App.css';
import Content from './content';
import RouterPage from './router';

function App() {
return (
<div className="App">
<Router>
    <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/router" element={<RouterPage />} />
    </Routes>
</Router>
</div>
);
}
export default App;