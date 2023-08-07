var limit = 6
$(document).ready(() => {
    for (i = 0; i < limit; i++) {

        $("#baristarian").append(`
        <div class="col"><div class="card h-100"><div class="card-img-wrap ">
                <img src="${tarian[i].img_url}" class="card-img-top" alt="..."></div>
            <div class="card-body">
                <h5 class="card-title">${tarian[i].name}</h5>
                <p class="card-text ">${tarian[i].description}</p>
            </div></div></div>
        `);
    }



    $("#search-holder").hide();
    $("#more").click(show_more);
    $("#search-query").on({
        focus: () => {
            $("#search-holder").show();
        },
        keyup: () => {
            $("#main").hide();
            $("#search-result").empty();
            let query = $("#search-query").val().toLowerCase();
            console.log(query);
            tarian.forEach((val, i) => {
                if (val.name.toLowerCase().includes(query)) {
                    console.log(val);
                    $("#search-result").append(`
          <div class="col"><div class="card h-100"><div class="card-img-wrap ">
                  <img src="${val.img_url}" class="card-img-top" alt="..."></div>
              <div class="card-body">
                  <h5 class="card-title">${val.name}</h5>
                  <p class="card-text ">${val.description}</p>
              </div></div></div>
          `);
                }
            });
        },
    });
});

function show_more() {
    var tmp
    if (limit + 6 > tarian.length) {
        tmp = tarian.length

        $("#more").hide();
    } else {
        tmp = limit + 6
    }
    for (i = limit; i < tmp; i++) {

        if (i < limit + 6) {

            $("#baristarian").append(`
            <div class="col"><div class="card h-100"><div class="card-img-wrap ">
                    <img src="${tarian[i].img_url}" class="card-img-top" alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title">${tarian[i].name}</h5>
                    <p class="card-text ">${tarian[i].description}</p>
                </div></div></div>`);
        }
    }
    limit += 6

}


function search(event) {
    event.preventDefault();
    $("#search-result").empty();
    $("#search-holder").show();
    $("#main").hide();
}

const tarian = [{
    name: "Tari Jaipong",
    img_url: "img/Galeri/tarian1.jpg",
    description: "Untuk kaum laki-laki Sunda, dalam kehidupan sehari-hari masa lalu selalu menggunakan celana komprang yakni celana dengan ukuran yang lebih besar ketimbang bentuk kaki. Masyarakat modern kerap menyebutkan oversize, sedangkan di Sunda disebut dengan pangsi."
}, {
    name: "Tari Topeng",
    img_url: "img/Galeri/tarian2.jpg",
    description: "Tari topeng berkembang di daerah Cirebon, Jawa Barat. Penari memakai topeng untuk aksesoris dan berfungsi menutupi wajah penari. Pemakaian topeng disesuaikan dengan karakter dan jenis tarian. Lagu pengiring tarian adalah Gonjong dan Sarung Ilang."
}, {
    name: "Tari Merak",
    img_url: "img/Galeri/tarian3.jpg",
    description: "Tari Merak merupakan seni tradisional dari kota Bandung, Jawa Barat. Tarian ini diciptakan oleh Rd. Tjetje Somantri tahun 1955. Tari Merak merupakan pengembangan dari gaya tarian tradisional Sunda."
}, {
    name: "Kuda Renggong",
    img_url: "img/Galeri/tarian4.jpg",
    description: "Kuda Renggong adalah seni pertunjukan masyarakat Sumedang, Jawa Barat. Kata Renggong dalam bahasa Sunda artinya keterampilan. Kuda Renggong menjelaskan cara berjalan kuda yang dilatih untuk menari mengikuti irama musik kendang. Tarian ini biasanya ditampilkan ketika sunatan anak."
}, {
    name: "Tari Ronggeng Bugis",
    img_url: "img/Galeri/tarian5.jpg",
    description: `Tari Ronggeng Bugis adalah jenis tarian dengan unsur komedi, yang dimainkan oleh satu atau beberapa penari laki-laki yang menggunakan busana perempuan.`
}, {
    name: "Tari Ketuk Tilu",
    img_url: "img/Galeri/tarian6.jpg",
    description: `Tarian ini banyak ditemukan di daerah Priangan, Bogor, dan Purwakarta, Jawa Barat. Tari Ketuk Tilu termasuk tari pergaulan atau hiburan yang diiringi alat musik seperti kendang, rebab, tiga buah ketuk, Kecrek, dan Goong.`
}, {
    name: "Tari Ronggeng Gunung",
    img_url: "img/Galeri/tarian7.jpg",
    description: `    Tari Ronggeng Gunung adalah tari yang biasa digunakan sebagai pengantar upcara adat. Contoh acara adat di Jawa Barat seperti panen raya, perkawinan, hitanan, dan penerimaan tamu.`
}, {
    name: "Tari Serimpi",
    img_url: "img/Galeri/tarian8.jpg",
    description: `Tari Serimpi merupakan tarian sakral yang dahulu hanya dipentaskan oleh kalangan internal keraton. Kata serimpi merujuk pada makna impi atau mimpi, mengingat jika menyaksikan tari serimpi penonton seperti terbuai alunan musik dan
    gerak luwes penari, seolah-olah penonton masuk ke dalam dunia mimpi. `
}, {
    name: "Tari Keurseus",
    img_url: "img/Galeri/tarian9.jpg",
    description: `Tari Keurseus adalah tarian tradisional dari Rancaekek, Bandung, Jawa Barat, dan merupakan tarian pergaulan di kalangan menak atau bangsawan Sunda tempo dahulu. `
}, {
    name: "Tari Gambyong",
    img_url: "img/Galeri/tarian10.jpg",
    description: `Gambyong merupakan salah satu tari yang cukup populer. Biasanya dibawakan oleh beberapa orang penari wanita dengan gerakan yang luwes dan lemah gemulai. Saat dipentaskan, ia akan diiringi oleh alat musik serta gending tertentu.`
}, {
    name: "Tari Buyung",
    img_url: "img/Galeri/tarian11.jpg",
    description: `Tari buyung adalah tarian khas masyarakat kuningan yang di laksanakan pada perayaan upacara adat seren taun. Tarian ini sudah ada pada zaman sebelumnya yang dipercaya sebagai warisan budaya masyarakat Kuningan, Jawa Barat. `
}, {
    name: "Tari Sintren",
    img_url: "img/Galeri/tarian12.jpg",
    description: `Tari Sintren merupakan salah satu tarian tradisional yang berasal dari pesisir utara pantai Jawa tengah dan Jawa barat. selain gerak tarinya, tarian ini juga terkenal dengan unsur mistis di dalamnya karena adanya ritual khusus
    untuk pemangilan roh atau dewa.`
}, {
    name: "Tari Angklung Bungko",
    img_url: "img/Galeri/tarian13.jpg",
    description: `Tarian Angklung Bungko adalah tarian khas Desa Bungko di Kecamatan Kapetakan, Kabupaten Cirebon. Tarian ini diiringi alat musik gendang, angklung, tutukan, klenong, dan gong.`
}, {
    name: "Tari Wayang",
    img_url: "img/Galeri/tarian14.jpg",
    description: `Tari Wayang adalah salah satu kelompok atau genre tari yang latar belakangnya dari cerita wayang. Tari ini tumbuh mekar di wilayah Jawa Barat, dan menjadi salah satu tarian tradisional Jawa Barat.`
}, {
    name: "Tari Kamonesan",
    img_url: "img/Galeri/tarian15.jpg",
    description: `Tari Kamonesan merupakan tari berpasangan yang ditarikan oleh 8 orang yang terdiri dari 4 orang laki-laki dan 4 orang perempuan. Penampilan para penari pun ditampilkan semenarik mungkin dengan kostum dengan warna yang terang dan
    cerah seperti merah, biru, kuning dan hijau.`

}];