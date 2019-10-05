import React from "react";
import style from "./index.css";

export default function LibraryStudy({ className }) {
  let classNames = style.container;
  classNames += className ? ` ${className}` : "";

  return (
    <div className={classNames}>
      <p>Library Study</p>
    </div>
  );
}
