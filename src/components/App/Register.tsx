import React, { useState } from "react";
import { toast } from "react-toastify";
import register from "../../services/register";
import { Navigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import "./styles.css";
const Register = ({getUserAfterPUT}:{getUserAfterPUT:any}) => {
  const [open, setOpen] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      RePassword: "",
    },
    onSubmit: (values: any) => {
      const val12 = JSON.stringify(values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(30, "first name maximun 30 char")
        .required("Required"),
      lastName: Yup.string()
        .max(50, "last name maximun 50 char")
        .required("Required"),
      username: Yup.string()
        .max(50, "user name maximun 50 char")
        .required("Required"),
      password: Yup.string().required("Password is required"),
      RePassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
      setOpen(true);
  };
  const register1 = () => {
    register(
      formik.values.firstName,
      formik.values.lastName,
      formik.values.username,
      formik.values.password
    ).then((result) => {
      if (result) {
        toast.success("ثبت موفقیت آمیز");
        
        setOpen(false);
        getUserAfterPUT();
        formik.resetForm();
      }
    });
  };
  return (
    <div >
      <Button sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />} onClick={handleClickOpen} >Add User</Button>
      <Dialog open={open} onClose={handleClose}>
      <main className="form-signin w-100 m-auto " >
      <form>
        <h1 className="h3 mb-3 fw-normal text-center"> Register</h1>
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="first Name"
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
          <label htmlFor="firstName">first Name</label>
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="fieldsErrorRegister">{formik.errors.firstName}</div>
        ) : null}
        <br />
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Name"
            id="lastName"
            {...formik.getFieldProps("lastName")}
          />
          <label htmlFor="lastName">last Name</label>
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="fieldsErrorRegister">{formik.errors.lastName}</div>
        ) : null}
        <br />
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="user name"
            id="username"
            {...formik.getFieldProps("username")}
          />
          <label htmlFor="username">user name</label>
        </div>
        {formik.touched.username && formik.errors.username ? (
          <div className="fieldsErrorRegister">{formik.errors.username} </div>
        ) : null}
        <br />
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          <label htmlFor="password">Password</label>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="fieldsErrorRegister">{formik.errors.password}</div>
        ) : null}
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="RePassword"
            id="RePassword"
            {...formik.getFieldProps("RePassword")}
          />
          <label htmlFor="RePassword">Re-Password</label>
        </div>
        {formik.touched.RePassword && formik.errors.RePassword ? (
          <div className="fieldsErrorRegister">{formik.errors.RePassword}</div>
        ) : null}
        <button
          className="w-100 btn btn-lg btn-primary"
          type="button"
          onClick={register1}
          disabled={!(formik.isValid && formik.dirty && formik.values.RePassword)}
        >
          Register
        </button>
      </form>
    </main>
    </Dialog>
    </div>
    
  );
};

export default Register;
