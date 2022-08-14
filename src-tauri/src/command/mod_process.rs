use std::{thread, time};
use tauri;
use tauri::Manager;

pub fn web_to_core() {
    tauri::Builder::default().setup(|app| {
        let id = app.listen_global("WebToCore", |eve| {
            println!("got payload {}", eve.payload().unwrap());
        });
        println!("core event{}", id);
        Ok(())
    })
    .run(tauri::generate_context!())
    .expect("Error tauri application");
}

// pub fn core_to_web() {
//     tauri::Builder::default().setup(|app| {
//         let handler = app.app_handle();
//         thread::spawn(move || loop {
//             handler.emit_all("CoreToWeb", "This is payload from Rust".to_string()).unwrap();
//             thread::sleep(time::Duration::from_secs(3));
//         });
//         Ok(())
//     })
//     .run(tauri::generate_context!())
//     .expect("Error tauri application");
// }

