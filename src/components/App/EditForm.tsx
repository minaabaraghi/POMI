import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { editeFormModels } from "./models";
import editeUser from "../../services/editeUser";
import { toast } from "react-toastify";
import users from "../../services/users";
import getUser from "../../services/getUser";

function EditForm({ id, getUserAfterPUT }: editeFormModels) {
  const [open, setOpen] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState([{}]);
  const handleClickOpen = (id: any) => {
    getUser(id).then((res) => {
      setFirstname(res.firstName);
      setLastname(res.lastName);
      setUserName(res.username);
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    editeUser(id, firstname, lastname, userName).then((result) => {
      if (result) {
        toast.success("ویرایش موفقیت آمیز");
        // return <Navigate to="/" replace={true}/>;
      }
    });
    setOpen(false);
    getUserAfterPUT();
  };
  return (
    <div>
      <EditIcon className="pointer" onClick={() => handleClickOpen(id)} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please enter your data here. We will send updates occasionally.
          </DialogContentText>
          <br />
          <label style={{ color: "#31baf5" }} htmlFor="firstName">
            firstName:
          </label>
          <TextField
            autoFocus
            id="firstName"
            sx={{ width: "300px", alignItems: "center" }}
            onChange={(e) => setFirstname(e.target.value)}
            variant="standard"
            value={firstname}
          />
          <br />
          <br />
          <label style={{ color: "#31baf5" }} htmlFor="lastName">
            lastName:
          </label>
          <TextField
            autoFocus
            id="lastName"
            sx={{ width: "300px", alignItems: "center" }}
            onChange={(e) => setLastname(e.target.value)}
            variant="standard"
            value={lastname}
          />
          <br />
          <br />
          <label style={{ color: "#31baf5" }} htmlFor="username">
            username:
          </label>
          <TextField
            autoFocus
            id="username"
            sx={{ width: "300px", alignItems: "center" }}
            onChange={(e) => setUserName(e.target.value)}
            variant="standard"
            value={userName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditForm;
