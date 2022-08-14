import React, { useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

const CoreToWeb = () => {
  useEffect(() => {
    let unListen: any;

    async function func() {
      unListen = await listen("CoreToWeb", (eve) => {
        console.log(`got payload  ${eve.payload} ${new Date()}`);
      });
    }
    func();

    return () => {
      if (unListen) {
        unListen();
      }
    };
  }, []);

  return (
    <div>
      <p>Core to web</p>
    </div>
  );
};

export default CoreToWeb;
