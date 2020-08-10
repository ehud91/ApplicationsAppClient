import React from "react";

const NoAppsFoundMessage = (props) => {
  return (
    <div className="col-md-20">
      <div className="fade alert alert-primary show">
        <strong>Info !</strong>
        <p>Currently there are no applications in system...</p>
      </div>
    </div>
  );
};
export default NoAppsFoundMessage;
