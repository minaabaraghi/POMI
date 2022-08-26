import React, { useState, useEffect } from "react";
import users from "../../services/users";
import CardList from "./CardList";

export default function UsersList() {
  // const [user, setUser] = useState([{ }]);
  // useEffect(() => {
  //    users().then(res => {
  //     console.log(res);
  //     setUser(res);
  //   });

  // }, [])
  return (
    <div>
      <CardList />
    </div>
  );
}
