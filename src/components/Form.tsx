import "./Form.css";
import { invoke } from "@tauri-apps/api/tauri";
import { useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Form() {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null!);

  function invokedHandler() {
    invoke("simple_command");
  }

  function messageHandler() {
    invoke("command_message", {
      message: "tauri is faster than electron",
    }).then((message) => {
      console.log(message);
    });
  }

  function serializeHandler() {
    invoke("serialize_command", {
      message: { field_text: "beautiful days", field_id: 7 },
    }).then((message: any) => {
      console.log(message);
    });
  }

  function resultHandler() {
    for (let i of [1, 2]) {
      invoke("result_command", {
        num: i,
      })
        .then((message: any) => {
          console.log(message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  async function submitCommand(
    name: string,
    inputRef: React.MutableRefObject<HTMLInputElement> | null
  ) {
    await invoke("submit_command", { name: name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (inputRef == null) {
      return;
    }
    inputRef.current.value = "";
    setText("");
  }

  return (
    <div className="BackGround">
      <div className="Button">
        <button className="Btn" onClick={invokedHandler}>
          invoke Rust command
        </button>
        <button className="Btn" onClick={messageHandler}>
          invoke command message
        </button>
        <button className="Btn" onClick={serializeHandler}>
          invoke serialize command
        </button>
        <button className="Btn" onClick={resultHandler}>
          invoke serialize command
        </button>
      </div>
      <div className="Form">
        <p>{text}</p>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <button onClick={() => submitCommand(text, inputRef)}>Submit</button>
      </div>
      <div>
        <Link to="/">Form</Link>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Form;
