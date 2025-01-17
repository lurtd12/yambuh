// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIeEIuVcna2BZOiz9ImWzcq89R7l3RRSA",
  authDomain: "menfess-x9.firebaseapp.com",
  projectId: "menfess-x9",
  storageBucket: "menfess-x9.firebasestorage.app",
  messagingSenderId: "536941295630",
  appId: "1:536941295630:web:dbdd5241c604b463c1a45f",
  measurementId: "G-NGTPCNDP43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Ambil elemen-elemen yang dibutuhkan
  const form = document.getElementById('menfess-form');
  const messageInput = document.getElementById('message');
  const messageList = document.getElementById('message-list');
  
  // Fungsi untuk menampilkan pesan
  function displayMessages() {
      // Ambil pesan dari Firebase Realtime Database
      const messagesRef = database.ref('messages');
      messagesRef.on('value', function(snapshot) {
          const messages = snapshot.val();
          messageList.innerHTML = '';  // Kosongkan daftar pesan yang ada
  
          // Loop untuk menampilkan pesan-pesan yang ada
          for (const id in messages) {
              const menfessDiv = document.createElement('div');
              menfessDiv.classList.add('menfess');
              menfessDiv.textContent = messages[id].text;  // Tampilkan pesan
              messageList.appendChild(menfessDiv);
          }
      });
  }
  
  // Fungsi untuk menyimpan pesan ke dalam Firebase
  function saveMessage(messageText) {
      const messagesRef = database.ref('messages');
      const newMessageRef = messagesRef.push();
      newMessageRef.set({
          text: messageText
      });
  }
  
  // Event listener saat form disubmit
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Mencegah halaman reload
  
      const messageText = messageInput.value.trim();
  
      if (messageText !== "") {
          saveMessage(messageText);  // Simpan pesan ke Firebase
          messageInput.value = '';  // Kosongkan input
      } else {
          alert("Tolong masukkan pesan terlebih dahulu!");
      }
  });
  
  // Tampilkan pesan saat halaman dimuat
  displayMessages();
  
