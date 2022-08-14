import React from "react";
import { emit } from "@tauri-apps/api/event";

type Props = {};

const WebToCore = (props: Props) => {
  function emitHandler() {
    emit("WebToCore", "This is payload");
  }

  return (
    <div>
      <button onClick={() => emitHandler()}>emit message</button>
    </div>
  );
};

export default WebToCore;
