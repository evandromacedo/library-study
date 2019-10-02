import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

export default function LibraryStudy() {
  return (
    <div className={style.container}>
      <p>Library Study</p>
    </div>
  );
}

ReactDOM.render(<LibraryStudy />, document.getElementById("root"));
