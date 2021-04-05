import "./App.css";
import { fetchUsers } from "./Redux";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Forms from "./forms";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
function App(props) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/forms">
          <Forms />
        </Route>
      </Switch>
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
