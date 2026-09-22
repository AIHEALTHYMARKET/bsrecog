// ============================================================
// BS GLOBAL Recognition System
// Firebase + Google Apps Script Configuration
// ============================================================

// =========================
// Firebase Configuration
// =========================

const firebaseConfig = {
  apiKey: "AIzaSyDpWeR78Lwfi9mDOS4mCzUsTYVI7SOsDV",
  authDomain: "bsrecog.firebaseapp.com",
  projectId: "bsrecog",
  storageBucket: "bsrecog.firebasestorage.app",
  messagingSenderId: "104751827465",
  appId: "1:104751827465:web:ee5e360dedbd4a70b246d8",
  measurementId: "G-JEPWHQ6FQ9"
};


// =========================
// Google Apps Script Web App
// =========================
//
// 這個網址就是目前已經測試過
// 「Web App GET 正常」的 Apps Script /exec
//

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbycfMlsXP84tZxRB22oDpoAEStBqvi_dt3zhVsEzNJ9YKL75XEKIca-ZEl8weMl_iqe/exec";


// =========================
// Administrator
// =========================

const ADMIN_EMAIL = "diabolo.weien@gmail.com";


// =========================
// Google Drive Photo Folder
// =========================

const PHOTO_FOLDER_ID =
  "1TmPzlU-txD8klUzoOf_rLIMUNNpp7Ejv";


// =========================
// Export
// =========================
//
// 讓 admin.html 可以直接使用：
//
// import {
//   firebaseConfig,
//   APPS_SCRIPT_URL,
//   ADMIN_EMAIL,
//   PHOTO_FOLDER_ID
// } from "./js/firebase-config.js";
//
// =========================

export {
  firebaseConfig,
  APPS_SCRIPT_URL,
  ADMIN_EMAIL,
  PHOTO_FOLDER_ID
};
