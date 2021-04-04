import "./App.css";
import { fetchUsers } from "./Redux";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Forms from "./forms";

function App(props) {
  return (
    <>
      <Forms />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.employee.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
