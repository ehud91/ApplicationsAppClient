import React from "react";
import AppRow from "./AppRow";
import AppRowsTitles from "./AppRowsTitles";
import NoAppsServerError from "./NoAppsServerError";

const Table = (props) => {
  if (props.length <= 0) {
    return <div></div>;
  }
  const apps = props.apps;

  if (apps.length === 1 && apps[0].code === 100) {
    return (
      <div>
        <NoAppsServerError />
      </div>
    );
  }

  const appsTableRow = apps.map((app, index) => {
    return <AppRow app={app} key={index} index={index} />;
  });

  return (
    <div className="wrap-table">
      <div className="table-sub-wrap">
        <div className="table-head">
          <table className="table-container">
            <thead className="table-head-container">
              <AppRowsTitles />
            </thead>
            <tbody>{appsTableRow}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
