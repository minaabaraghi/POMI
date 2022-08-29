import React, { useState } from "react";
import { toast } from "react-toastify";
import login from "../../services/login";
import { Link ,useNavigate} from "react-router-dom";
import './styles.css'
import { Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
//todo: Convert to funcation base
export default function LoginComponent() {
  //todo: get username and password from form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const login1 = () => {
    login(username, password).then((result) => {
      if (result) {
        toast.success("ورود موفقیت آمیز");
        return navigate('/dashboards/crypto');
      }
    });
  };
  return (
    
    <main className="form-signin w-150  login-page">
      <form>
      <h1 className="h3 mb-4 fw-normal text-center" color="blueviolet"> Sign in to POMI</h1>
        
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingInput"
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingInput">user name</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <Button color="primary" fullWidth
          type="button"
          onClick={login1}
        >
          <LockIcon/>
          Sign in
        </Button>
      </form>
      <div className="minameee">@_minameee</div>
    </main>
    

  );
}
