import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import "./todo.css";

const Todo = ({ arr }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} />
      </ListItem>
      <CheckIcon
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </List>
  );
};
export default Todo;
