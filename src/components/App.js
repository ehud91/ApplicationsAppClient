import React from "react";
import { connect } from "react-redux";
import "../App.css";

function App() {
  return <div></div>;
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
