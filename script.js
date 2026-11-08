// --- ATUR TANGGAL ULANG TAHUN OLA DI SINI ---
// Contoh: Tanggal 15 Mei. Anda bisa mengganti teks ini sesuai tanggal aslinya!
const tanggalUlangTahun = "14 Maret 2007"; 
// ------------------------------------------

// 1. SET TANGGAL PADA SAAT HALAMAN DIMUAT
window.onload = function() {
    document.getElementById("bdayDateText").textContent = tanggalUlangTahun;
    typeWriter();
    
    // Efek kembang api/konfeti otomatis saat dibuka
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

// 2. ANIMASI MENGETIK UCAPAN ULANG TAHUN
const bdayText = `Selamat ulang tahun untuk Randhitia Dwi Fayola ! Semoga bertambahnya usiamu membawa kebahagiaan yang melimpah, kesehatan, dan tercapai semua impianmu. Have the most wonderful birthday! 💖🎂`;
let index = 0;

function typeWriter() {
    if (index < bdayText.length) {
        document.getElementById("typingMessage").textContent += bdayText.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

// 3. FITUR TIUP LILIN KUE
let isCandleBlown = false;
function blowCandle() {
    const candleIcon = document.getElementById("candleIcon");
    const cakeMessage = document.getElementById("cakeMessage");

    if (!isCandleBlown) {
        candleIcon.textContent = "🎂💨";
        cakeMessage.textContent = "Yeay! Lilin berhasil ditiup! Selamat ulang tahun, semoga semua harapan dan doa baikmu terkabul! 🎉✨";
        isCandleBlown = true;

        confetti({
            particleCount: 80,
            spread: 90,
            origin: { y: 0.5 }
        });
    } else {
        candleIcon.textContent = "🎂🔥";
        cakeMessage.textContent = "Lilin dinyalakan kembali! Ayo tiup lagi kalau mau buat permohonan baru! 😉";
        isCandleBlown = false;
    }
}

// 4. PEMUTAR MUSIK (MUSIC PLAYER)
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");
const musicVolume = document.getElementById("musicVolume");

if (bgMusic && musicButton) {
    bgMusic.volume = 0.5;

    musicButton.addEventListener("click", async function() {
        if (bgMusic.paused) {
            try {
                await bgMusic.play();
                musicButton.innerHTML = "⏸ Pause Musik";
                musicStatus.innerHTML = "Now Playing: Selamat Ulang Tahun ♡";
            } catch (error) {
                alert("Musik gagal diputar. Pastikan file music.mp3 sudah ada di folder yang sama!");
                console.error(error);
            }
        } else {
            bgMusic.pause();
            musicButton.innerHTML = "▶ Play Musik";
            musicStatus.innerHTML = "Musik dijeda ♡";
        }
    });

    if (musicVolume) {
        musicVolume.addEventListener("input", function() {
            bgMusic.volume = Number(this.value);
        });
    }

    bgMusic.addEventListener("ended", function() {
        musicButton.innerHTML = "▶ Play Musik";
        musicStatus.innerHTML = "Musik selesai diputar ♡";
    });
}

// 5. LOVE METER / KALKULATOR KEBAHAGIAAN
function calculateLove() {
    const score = Math.floor(Math.random() * 21) + 80;
    document.getElementById("loveResult").textContent = score + "% Level Bahagia Hari Ini! 💖🥰";
}

// 6. KOTAK KADO SURPRISE
function openSurprise() {
    const surprises = [
        "Hadiah terindah hari ini adalah melihat senyuman di wajahmu. Keep shining, Olaa! ✨",
        "Semoga kue ulang tahunmu manis, semanis hari-hari yang akan datang! 🎂🍰"
    ];
    const random = Math.floor(Math.random() * surprises.length);
    document.getElementById("surpriseIcon").textContent = "💝";
    document.getElementById("surpriseMessage").textContent = surprises[random];
}

// 7. GENERATOR DOA / WISH ULANG TAHUN
function randomWish() {
    const wishes = [
        `“Semoga di usia yang baru pada tanggal ${14} ini, segala hal baik, berkah, dan kebahagiaan selalu menyertaimu, Olaa.” 🌸`,
        "“Semoga semua mimpi-mimpi hebatmu satu per satu menjadi kenyataan tahun ini! ✨”",
        "“Tetaplah menjadi pribadi yang baik, ceria, dan membawa energi positif untuk sekitar ya! 💖”",
        "“Semoga hari ulang tahunmu dipenuhi dengan tawa, cinta, dan kado-kado spesial! 🎁”"
    ];
    const random = Math.floor(Math.random() * wishes.length);
    document.getElementById("wishResult").textContent = wishes[random];
}

// 8. KUIS ULANG TAHUN
function answerQuiz(type) {
    const quizResult = document.getElementById("quizResult");
    if (type === 'correct') {
        quizResult.textContent = `100% Benar! Tanggal ${14} adalah hari spesial milik Olaa sepenuhnya! 🥰🎂`;
        quizResult.style.color = "#c2185b";
    } else {
        quizResult.textContent = "Hmm, hampir benar, tapi yang paling bahagia dan spesial tentu saja Olaa! 😉";
        quizResult.style.color = "#ad1457";
    }
}

// 9. TOGGLE DARK/COZY MODE
function toggleCozyMode() {
    document.body.classList.toggle("cozy-mode");
}

// 10. SIMPAN HARAPAN PRIBADI
function saveUserWish() {
    const inputVal = document.getElementById("userWishInput").value.trim();
    const output = document.getElementById("userWishOutput");
    
    if (inputVal !== "") {
        // 1. Ganti dengan nomor WhatsApp Anda 
        // (Gunakan format internasional tanpa angka 0 di depan, contoh: 628123456789)
        const nomorWhatsAppanda = "6285709246654"; 
        
        // 2. Format pesan yang akan otomatis terkirim ke WhatsApp Anda
        const pesan = encodeURIComponent(`Halo! Ini harapan ulang tahunku botakk: "${inputVal}" 🎂✨`);
        
        // 3. Membuka tautan WhatsApp secara otomatis di tab baru
        window.open(`https://wa.me/${6285709246654}?text=${pesan}`, '_blank');
        
        // Tampilkan pemberitahuan di halaman web
        output.textContent = "Harapan berhasil dikirim ke WhatsApp! 💖✨";
        document.getElementById("userWishInput").value = "";
    } else {
        output.textContent = "Yuk, tuliskan sedikit harapan atau doamu di ulang tahun ini! 🎂";
    }
}