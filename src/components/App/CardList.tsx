import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { dataList } from "./models";
import { toast } from "react-toastify";
import deleteUser from "../../services/deleteUser";
import editeUser from "../../services/editeUser";
import { Navigate } from "react-router-dom";
import users from "../../services/users";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import EditForm from "./EditForm";
import "./styles.css";
import getUser from "../../services/getUser";
import Register from "./Register";

export default function CardList() {
  const [user, setUser] = useState([{}]);

  useEffect(() => {
    users().then((res) => {
      setUser(res);
    });
  }, []);
  const getUserAfterPUT = () => {
    users().then((res) => {
      setUser(res);
    });
  };

  const onDelete = (id: any) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteUser(id).then((result) => {
              if (result) {
                toast.success("کاربر با موفقیت حذف شد");
                users().then((res) => {
                  console.log(res);
                  setUser(res);
                });
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => {
            return true;
          },
        },
      ],
    });
  };

  return (
    <div  className="test-content-wrapper">
      <Register getUserAfterPUT={getUserAfterPUT}/>
      <br />

      <table className="table ">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">userName</th>
            <th scope="col">
              <EditTwoToneIcon />
            </th>
            <th scope="col">
              <DeleteOutlineIcon />
            </th>
          </tr>
        </thead>
        <tbody className="thead-dark">
          {user.map((item: any, index: number) => {
            index += 1;
            return (
              <tr key={++index}>
                <th scope="row">{index}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.username}</td>
                <td>
                  {" "}
                  <EditForm id={item._id} getUserAfterPUT={getUserAfterPUT} />
                </td>{" "}
                <td>
                  <DeleteIcon
                    className="pointer"
                    onClick={() => onDelete(item._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
