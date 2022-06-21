import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import { db } from "../firebase.js";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import "./todo.css";
const update = doc(db, "todos", "test");
const Todo = ({ arr }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} />
      </ListItem>

      <DeleteIcon
         fontSize="large"
         style={{ opacity: 0.7 }}
         onClick={() => {
           deleteDoc(doc(db, "todos", arr.id));}}
      />
    </List>
  );
};
export default Todo;
