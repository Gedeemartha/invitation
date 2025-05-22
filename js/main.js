// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true, // perbaikan di sini
    autoplayTimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end

// waktu start
const countDownDate = new Date("Jun 30, 2025 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// hover blur effect
$('.blur').mouseenter(function(){
  $('.blur').css('filter','blur(5px)');
  $(this).css('filter','blur(0px)');
});
$('.blur').mouseleave(function(){
  $('.blur').css('filter','blur(0px)');
});

// Capitalize nama (opsional tapi rapi)
function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// semua dijalankan saat halaman selesai dimuat
window.onload = function () {
  // buka modal otomatis
  document.getElementById("klikmodal").click();

  // ambil parameter nama dari URL, misal ?nama=Kadek%20Lia
  const params = new URLSearchParams(window.location.search);
  const nama = params.get('nama');
  if (nama) {
    document.getElementById('front-name').textContent = capitalizeWords(decodeURIComponent(nama));
  }

  // jika pakai parameter lain seperti ?to=Pak%20Budi
  const to = params.get('to');
  if (to) {
    document.getElementById("nama").innerHTML = decodeURIComponent(to);
  }
};

