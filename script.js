// Tahun otomatis di footer
document.addEventListener("DOMContentLoaded", function () {
    const tahun = document.getElementById("tahun");

    if (tahun) {
        tahun.textContent = new Date().getFullYear();
    }

    // Tema gelap dan terang
    const tombolTema = document.getElementById("theme-toggle");

    if (tombolTema) {
        tombolTema.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            const modeTerang = document.body.classList.contains("light-mode");

            tombolTema.textContent = modeTerang ? "☀️" : "🌙";
        });
    }

    // Form kontak
    const formKontak = document.getElementById("form-kontak");
    const hasilPesan = document.getElementById("hasil-pesan");

    if (formKontak && hasilPesan) {
        formKontak.addEventListener("submit", function (event) {
            event.preventDefault();

            const inputNama = document.getElementById("nama");
            const nama = inputNama ? inputNama.value.trim() : "";

            hasilPesan.textContent =
                "Terima kasih, " + nama + "! Formulir berhasil diperiksa.";

            formKontak.reset();
        });
    }
});
/* ===== ANIMASI SAAT SCROLL ===== */
document.addEventListener("DOMContentLoaded", function () {
    const elemenAnimasi = document.querySelectorAll(
        "#tentang, #keahlian, #pengalaman, #kontak, #galeri, .about-card"
    );

    if ("IntersectionObserver" in window) {
        const pengamat = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        elemenAnimasi.forEach(function (elemen) {
            elemen.classList.add("reveal");
            pengamat.observe(elemen);
        });
    } else {
        elemenAnimasi.forEach(function (elemen) {
            elemen.classList.add("show");
        });
    }
});