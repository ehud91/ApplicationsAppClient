import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../common/Header";

const HomePage = (props) => {
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  return (
    <div data-reactroot className="container-fluid">
      <Header loading={props.loading} route={"home"} />
      <div className="jumbotron">
        <h1 className={"hello-" + color}>Hello Guest !</h1>
        <p>Welcome to website!</p>
        <select onChange={handleChange}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(HomePage);
