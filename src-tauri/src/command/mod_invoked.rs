
// use super::mod_command;
// use tauri;

// pub fn invoked() {
//     tauri::Builder::default()
//     .invoke_handler(tauri::generate_handler![
//       // -> core process
//       mod_command::simple_command,
//       // -> web view process
//       mod_command::command_message,
//       mod_command::serialize_command,
//       mod_command::result_command,
//       mod_command::submit_command,
//     ])
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
//   }