import React from "react";
import "./Dialog.css";
import { open } from "@tauri-apps/api/dialog";

const Dialog = () => {
  function openDialog() {
    open().then((file) => console.log(file));
  }

  return (
    <div className="dialog">
      <button className="button" onClick={() => openDialog()}>
        Open dialog
      </button>
    </div>
  );
};

export default Dialog;
