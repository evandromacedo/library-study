import React from "react";
import style from "./index.css";

export default function LibraryStudy({ className }) {
  let classNames = style.container;
  classNames += className ? ` ${className}` : "";

  return (
    <div className={classNames}>
      <p>This is the Component that I want to publish on NPM???</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi aperiam
        ipsam maiores blanditiis, beatae voluptatibus voluptatum ab expedita
        libero minus laboriosam! Omnis quaerat, facilis vel deserunt sapiente
        natus delectus. Teste
      </p>
    </div>
  );
}
