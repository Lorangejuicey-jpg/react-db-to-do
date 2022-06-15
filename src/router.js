import {Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import doggo from'./media/doggo.jpg';

function RouterPage(){
    return (
        <div className="router">
            <img src={doggo}/>
            <Button variant="contained" color="primary"><Link to="/">Go back</Link></Button>
        </div>
    );
}
export default RouterPage;