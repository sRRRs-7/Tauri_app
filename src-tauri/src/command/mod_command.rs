
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Message {
    field_text: String,
    field_id: i32
}

#[tauri::command]
pub fn serialize_command(message: Message) -> Message {
    let Message { field_text, field_id } = message;
    Message {
        field_text: format!("{} by rust", field_text),
        field_id: field_id + 1,
    }
}

#[tauri::command]
pub fn result_command(num: i32) -> Result<String, String> {
    if num % 2 == 0 {
        Ok(format!("{} is even", num))
    } else {
        Err(format!("{} is odd", num))
    }
}

#[tauri::command]
pub fn submit_command(name: String) -> Result<String, String> {
    if name.len() == 0 {
        Err(format!("name is empty"))
    } else {
        Ok(format!("{} is intelligence", name))
    }
}

#[tauri::command]
pub fn simple_command() {
  println!("simple command is invoked");
}

#[tauri::command]
pub fn command_message(message: String) -> String {
    format!("{} by rust", message)
}

