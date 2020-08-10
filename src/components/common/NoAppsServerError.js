import React from "react";

const NoAppsServerError = (props) => {
  return (
    <div className="col-md-20">
      <div className="fade alert alert-danger show">
        <strong>Error !</strong>
        <p>
          Opss... something went wrong... (code: 100, message: error in service)
        </p>
      </div>
    </div>
  );
};
export default NoAppsServerError;
