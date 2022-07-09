#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};

#[tauri::command]
fn my_custom_command() -> String {
  use mkpasswd::mkpasswd;
  mkpasswd().into()
}


fn main() {
  let context = tauri::generate_context!();

  tauri::Builder::default()
    .setup(|app| {
      let window = app.get_window("main").unwrap();
      #[cfg(target_os = "macos")]
      apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow).expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
      Ok(())
    })
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    })
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(context)
    .expect("error while running tauri application");
}
