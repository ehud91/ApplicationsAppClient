import React, { useState } from "react";
import * as appActions from "../../actions/applicationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import "../../styles/styles.css";

const ApplicationForm = (props) => {
  const [appNameState, setAppName] = useState("");
  const [appKeyState, setAppKey] = useState("");
  const [borderColor, setBorderColor] = useState("");

  function addApplication(e) {
    e.preventDefault();
    setBorderColor("");
    let appName = appNameState.trim();
    let appKey = appKeyState.trim();

    if (!appName || appName.length <= 0 || !appKey || appKey.length <= 0) {
      setBorderColor("border-error");
      toastr.options = configToastr({
        preventDuplicates: true,
        positionClass: "toast-bottom-full-width",
        hideDuration: 300,
      });
      toastr.error(
        "Both parameters Application Name and Application Key are required !"
      );
      return;
    }
    toastr.options = configToastr();

    const res = appActions.addApplication({ appName: appName, appKey: appKey });
    res
      .then((response) => {
        if (typeof response === "object") {
          return response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.Code === 400) {
          setBorderColor("border-error");
          toastr.error(
            "Error in one of the parameters, " +
              data.Desc +
              "   (code: " +
              data.Code +
              ", message: parameters error)"
          );
        } else if (data.Code === 200) {
          setTimeout(() => {
            document.location.reload();
          }, 5000);
          toastr.success("Application saved !");
        }
      })
      .catch((error) => {
        if (error.Code === 400) {
          toastr.error(error.Desc);
        } else {
          toastr.error(
            "Opss... something went wrong..., Could not save the new application. (code: 100, message: error in service)"
          );
        }
      });
  }

  return (
    <div>
      <form>
        <h1>Add Application</h1>
        <div className="col-20">
          <p>
            Enter application info in order to add new application to the system
          </p>
        </div>
        <div className="row">
          <div className="col-md-5 mb-5">
            <input
              type="text"
              className={"form-control " + borderColor}
              id="appName"
              placeholder="Enter Application Name"
              onChange={(e) => {
                setAppName(e.target.value);
                setBorderColor("");
              }}
            />
          </div>
          <div className="col-md-5 mb-5">
            <input
              type="text"
              className={"form-control " + borderColor}
              id="appName"
              placeholder="Enter Application Key"
              onChange={(e) => setAppKey(e.target.value)}
            />
          </div>
          <div className="col-md-5 mb-5">
            <button className="btn btn-primary" onClick={addApplication}>
              Add Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function configToastr() {
  return {
    preventDuplicates: true,
    positionClass: "toast-bottom-full-width",
    hideDuration: 300,
    timeOut: 60000,
    fadeOut: 2000,
  };
}

function mapStateToProps(state, ownProps) {
  return {
    applications: state.addApplicationReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps)(ApplicationForm);
