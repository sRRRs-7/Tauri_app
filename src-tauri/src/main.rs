#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows",
)]

mod command;

fn main() {
    // // invoked command
    // command::mod_invoked::invoked();

    // web to core process
    command::mod_process::web_to_core();

    // // core to web process
    // command::mod_process::core_to_web();

}

