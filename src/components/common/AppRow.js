import React from "react";
import Moment from "moment";

const AppRow = (props) => {
  let bgColor = initBgColor(props.index);
  return (
    <tr className={"table-tbody-tr " + bgColor}>
      <td className="table-td column-first">{props.app.app_uuid}</td>
      <td className="table-td column">{props.app.app_name}</td>
      <td className="table-td column">{props.app.app_key}</td>
      <td className="table-td column">
        {Moment(props.app.creation_time).format("YYYY-MM-DD HH:mm:ss")}
      </td>
    </tr>
  );
};

function initBgColor(index) {
  return index % 2 === 0 ? "" : "bg-white";
}

export default AppRow;
