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
    img_url: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/09/29212602/tari-jaipong.jpg",
    description: "Untuk kaum laki-laki Sunda, dalam kehidupan sehari-hari masa lalu selalu menggunakan celana komprang yakni celana dengan ukuran yang lebih besar ketimbang bentuk kaki. Masyarakat modern kerap menyebutkan oversize, sedangkan di Sunda disebut dengan pangsi."
}, {
    name: "Tari Topeng",
    img_url: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/tari-topeng.jpg",
    description: "Tari topeng berkembang di daerah Cirebon, Jawa Barat. Penari memakai topeng untuk aksesoris dan berfungsi menutupi wajah penari. Pemakaian topeng disesuaikan dengan karakter dan jenis tarian. Lagu pengiring tarian adalah Gonjong dan Sarung Ilang."
}, {
    name: "Tari Merak",
    img_url: "https://i0.wp.com/rimbakita.com/wp-content/uploads/2019/09/tari-merak.jpg",
    description: "Tari Merak merupakan seni tradisional dari kota Bandung, Jawa Barat. Tarian ini diciptakan oleh Rd. Tjetje Somantri tahun 1955. Tari Merak merupakan pengembangan dari gaya tarian tradisional Sunda."
}, {
    name: "Kuda Renggong",
    img_url: "https://assets-a1.kompasiana.com/items/album/2020/02/10/img-20180814-wa0006-696x464-5e40e81f097f367f614e59b2.jpg",
    description: "Kuda Renggong adalah seni pertunjukan masyarakat Sumedang, Jawa Barat. Kata Renggong dalam bahasa Sunda artinya keterampilan. Kuda Renggong menjelaskan cara berjalan kuda yang dilatih untuk menari mengikuti irama musik kendang. Tarian ini biasanya ditampilkan ketika sunatan anak."
}, {
    name: "Tari Ronggeng Bugis",
    img_url: "https://1.bp.blogspot.com/-BpWk3LTiE9c/XgIRERM0hOI/AAAAAAAAADQ/46pTiJ5Nwl4priMYQzrLIgY1CAMgRAL7QCLcBGAsYHQ/w1200-h630-p-k-no-nu/076499800_1461058073-IMG_4673.JPG",
    description: `Tari Ronggeng Bugis adalah jenis tarian dengan unsur komedi, yang dimainkan oleh satu atau beberapa penari laki-laki yang menggunakan busana perempuan.`
}, {
    name: "Tari Ketuk Tilu",
    img_url: "https://seringjalan.com/wp-content/uploads/2020/04/Tari-Ketuk-Tilu.jpg",
    description: `Tarian ini banyak ditemukan di daerah Priangan, Bogor, dan Purwakarta, Jawa Barat. Tari Ketuk Tilu termasuk tari pergaulan atau hiburan yang diiringi alat musik seperti kendang, rebab, tiga buah ketuk, Kecrek, dan Goong.`
}, {
    name: "Tari Ronggeng Gunung",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ronggeng_Gunung.jpg",
    description: `    Tari Ronggeng Gunung adalah tari yang biasa digunakan sebagai pengantar upcara adat. Contoh acara adat di Jawa Barat seperti panen raya, perkawinan, hitanan, dan penerimaan tamu.`
}, {
    name: "Tari Serimpi",
    img_url: "https://www.rumbelnesia.com/wp-content/uploads/2020/11/Tari-Serimpi.jpg",
    description: `Tari Serimpi merupakan tarian sakral yang dahulu hanya dipentaskan oleh kalangan internal keraton. Kata serimpi merujuk pada makna impi atau mimpi, mengingat jika menyaksikan tari serimpi penonton seperti terbuai alunan musik dan
    gerak luwes penari, seolah-olah penonton masuk ke dalam dunia mimpi. `
}, {
    name: "Tari Keurseus",
    img_url: "https://cakbagus.net/wp-content/uploads/2021/08/tari-kerseus-jawa-barat.jpg",
    description: `Tari Keurseus adalah tarian tradisional dari Rancaekek, Bandung, Jawa Barat, dan merupakan tarian pergaulan di kalangan menak atau bangsawan Sunda tempo dahulu. `
}, {
    name: "Tari Gambyong",
    img_url: "https://pintarnesia.teknoinside.cyou/2020/04/Tari-Gambyong.jpg",
    description: `Gambyong merupakan salah satu tari yang cukup populer. Biasanya dibawakan oleh beberapa orang penari wanita dengan gerakan yang luwes dan lemah gemulai. Saat dipentaskan, ia akan diiringi oleh alat musik serta gending tertentu.`
}, {
    name: "Tari Buyung",
    img_url: "https://pintarnesia.teknoinside.cyou/2020/04/Tari-Buyung.jpg",
    description: `Tari buyung adalah tarian khas masyarakat kuningan yang di laksanakan pada perayaan upacara adat seren taun. Tarian ini sudah ada pada zaman sebelumnya yang dipercaya sebagai warisan budaya masyarakat Kuningan, Jawa Barat. `
}, {
    name: "Tari Sintren",
    img_url: "https://pintarnesia.teknoinside.cyou/2020/04/Tari-Sintren.jpg",
    description: `Tari Sintren merupakan salah satu tarian tradisional yang berasal dari pesisir utara pantai Jawa tengah dan Jawa barat. selain gerak tarinya, tarian ini juga terkenal dengan unsur mistis di dalamnya karena adanya ritual khusus
    untuk pemangilan roh atau dewa.`
}, {
    name: "Tari Angklung Bungko",
    img_url: "https://www.radarcirebon.com/wp-content/uploads/2016/08/jml-boks-angklung-bungko-9.jpg",
    description: `Tarian Angklung Bungko adalah tarian khas Desa Bungko di Kecamatan Kapetakan, Kabupaten Cirebon. Tarian ini diiringi alat musik gendang, angklung, tutukan, klenong, dan gong.`
}, {
    name: "Tari Wayang",
    img_url: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/Tari-Wayang-Jawa-Barat.jpg",
    description: `Tari Wayang adalah salah satu kelompok atau genre tari yang latar belakangnya dari cerita wayang. Tari ini tumbuh mekar di wilayah Jawa Barat, dan menjadi salah satu tarian tradisional Jawa Barat.`
}, {
    name: "Tari Kamonesan",
    img_url: "https://indonesiakaya.com/wp-content/uploads/2020/10/5__Para_penari_melakukan_gerakan-gerakan_seperti_sedang_menjalani_kehidupan_sehari-hari_seperti_penari_wanita_membawa_bakul_di_pundak.jpg",
    description: `Tari Kamonesan merupakan tari berpasangan yang ditarikan oleh 8 orang yang terdiri dari 4 orang laki-laki dan 4 orang perempuan. Penampilan para penari pun ditampilkan semenarik mungkin dengan kostum dengan warna yang terang dan
    cerah seperti merah, biru, kuning dan hijau.`

}];