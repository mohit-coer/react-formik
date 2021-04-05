import React, { Component } from "react";
import { useFormik } from "formik";
import SEO from "./seo";
const Forms = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
    validate: (values) => {
      let error = {};
      if (values.username === "") {
        error.username = "Username cannot be empty";
      }
      return error;
    },
  });
  return (
    <>
      <SEO
        siteTitle={"Forms Page"}
        siteDescription={"This is a Forms Page and Forms Page is form Page"}
      />
      <form className="container" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control mt-2"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control mt-2"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="form-group mt-2">
          <button type="text" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Forms;
