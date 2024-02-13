// Fungsi untuk mengucapkan Selamat Hari Valentine dengan animasi
function ucapkanHariValentine() {
    // Mendapatkan elemen teks ucapan
    const greetingText = document.getElementById('greetingText');
  
    // Animasi untuk mengucapkan Selamat Hari Valentine
    greetingText.style.opacity = 0; // Set opacity ke 0
    greetingText.style.transition = 'opacity 1s ease-in-out'; // Animasi perubahan opacity
    greetingText.textContent = "happy valentine sayanggg, dan selamat 21 bulan berjalanya hubungan kita, semoga untuk kedepanya aku dan km masih sama dan masih seperti biasanya, seperti apa yang kita lakukan setiap harinya, makasih banyak masih bertahan sampai sejauh ini.";
    setTimeout(() => {
      greetingText.style.opacity = 1; // Set opacity kembali ke 1 setelah 1 detik
    }, 100);
  }
  
  
  // Fungsi untuk memberikan animasi lucu saat foto hati diklik
  function animateHeartPhoto(img) {
    img.classList.add('scroll-right-animation'); // Tambahkan kelas 'scroll-right-animation' untuk memicu animasi scroll dari kiri ke kanan
    setTimeout(() => {
      img.classList.remove('scroll-right-animation'); // Hapus kelas 'scroll-right-animation' setelah 2 detik
    }, 2000);
  }
  // Mendapatkan tombol dan foto-foto hati dari dokumen HTML
  const valentineButton = document.getElementById('valentineButton');
  const heartPhotos = document.querySelectorAll('.heart-photo');
  
  // Menambahkan event listener ke tombol
  valentineButton.addEventListener('click', function() {
    // Memanggil fungsi untuk mengucapkan Selamat Hari Valentine dengan animasi
    ucapkanHariValentine();
  });
  
  // Menambahkan event listener ke setiap foto hati
  heartPhotos.forEach(photo => {
    photo.addEventListener('click', function() {
      // Memanggil fungsi untuk memberikan animasi lucu saat foto hati diklik
      animateHeartPhoto(photo);
    });
  });