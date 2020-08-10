import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../common/Header";
import Table from "../common/Table";
import NoAppsFoundMessage from "../common/NoAppsFoundMessage";
import * as appActions from "../../actions/applicationActions";
import ApplicationForm from "../common/ApplicationForm";

const AppsPage = (props) => {
  return (
    <div>
      <Header loading={props.loading} route={"apps"} />
      <div className="jumbotron">
        <h1>Apps Page</h1>
        <br />
        {props.applications.length > 0 && <Table apps={props.applications} />}
        {props.applications.length <= 0 && props.fetchStatusReducer < 1 && (
          <NoAppsFoundMessage />
        )}
      </div>

      <ApplicationForm />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    fetchStatusReducer: state.fetchStatusReducer,
    applications: state.applicationReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppsPage);
