// Firebase Configuration (Pastikan Anda mengganti dengan konfigurasi Firebase Anda sendiri)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
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
  