#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod command;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      // -> core process
      command::mod_command::simple_command,
      // -> web view process
      command::mod_command::command_message,
      command::mod_command::serialize_command,
      command::mod_command::result_command,
      command::mod_command::submit_command,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

