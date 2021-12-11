$(document).ready(() => {
    for (i = 0; i < 6; i++) {

        $("#baristradisi").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${tradisi[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${tradisi[i].name}</h5>
              <p class="card-text ">${tradisi[i].description}</p>
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
            tradisi.forEach((val, i) => {
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
    for (i = 6; i < 12; i++) {

        $("#baristradisi").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${tradisi[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${tradisi[i].name}</h5>
              <p class="card-text ">${tradisi[i].description}</p>
          </div></div></div>
      `);
    }





    $("#more").hide();
}

function search(event) {
    event.preventDefault();
    $("#search-result").empty();
    $("#search-holder").show();
    $("#main").hide();
}
const tradisi = [{
    name: "Ngalaksa",
    img_url: "https://img.inews.co.id/media/822/files/inews_new/2021/03/02/upacara_seren_taun.jpg",
    description: "Ngalaksa adalah salah satu upacara adat Sunda membawa padi ke lumbung dan membuat laksa sebagai ungkapan rasa syukur kepada Tuhan Yang Maha Kuasa atas kesuksesan hasil panen padi di sawah yang diperoleh masyarakat."
}, {
    name: "Reuneuh Mundingeun",
    img_url: "https://entrancemagazine.com/wp-content/uploads/2021/01/Desain-tanpa-judul-92.png",
    description: "Reuneuh mundingeun adalah upacara adat sunda yang dilakukan apabila terdapat perempuan yang mengandung lebih dari 9 bulan, bahkan sampai 12 bulan dan belum melahirkan. Tujuan dari upacara adat ini adalah agar perempuan yang hamil tersebut segera melahirkan dengan selamat, dan supaya dijauhkan dari hal-hal yang tidak diinginkan."
}, {
    name: "Upacara Ngirab atau Rebo Wekasan",
    img_url: "https://i1.wp.com/toriqa.com/wp-content/uploads/2021/07/Ngirab-Rebo-Wekasan.jpg?resize=800%2C533&ssl=1",
    description: " Upacara adat Jawa Barat ini memiliki nilai religius. Ngirab yang juga biasa disebut Rebo Wekasan ini dilakukan oleh masyarakat yang tinggal di daerah Sungai Drajat, Cirebon. Tradisi ini ditandai dengan kegiatan berziarah ke makam Sunan Kalijaga."
}, {
    name: "Ngalungsur Pusaka",
    img_url: "https://86news.co/wp-content/uploads/2019/11/IMG-20191111-WA0195.jpg",
    description: "Upacara adat Ngalungsur Pusaka ini pada umumnya dapat dijumpai di daerah Garut, Jawa Barat. Tradisi ini dapat dipimpin oleh seorang juru kunci atau kuncen yang merupakan bukti bahwa mereka masih tetap melestarikan dan juga melaksanakan sebuah tradisi leluhurnya juga dapat mensosialisasikan keberadaan dari benda-benda pusaka peninggalan Sunan Rohmat Suci."
}, {
    name: "Seren Tahun",
    img_url: "https://www.kuningankab.go.id/sites/default/files/berita/seren-tahun-2018-4.JPG",
    description: `Upacara Seren Taun merupakan salah satu adat tradisi yang hidup di Kabupaten Kuningan, Jawa Barat, sejak puluhan tahun silam. Ia adalah bentuk ungkapan syukur masyarakat Sunda atas suka duka yang mereka alami terutama di bidang pertanian selama setahun
    yang telah berlalu dan tahun yang akan datang.`
}, {
    name: "Nadran",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Iringan_Perahu_Nadran_Sumber_Mas_-_panoramio.jpg",
    description: `Upacara nadran adalah upacara adat Jawa Barat mengenai sedekah laut. Nadran asal katanya dari bahasa Arab “nadar” yang berarti syukuran. Adapun maksud dari penyelenggaraan upacara nadran ini yaitu sebagai ungkapan rasa syukur para
    nelayan kepada Tuhan YME`
}, {
    name: "Labuh Saji",
    img_url: "https://asset.kompas.com/crops/xLIuatn9AsronlWRxPhOok86Pio=/46x0:967x614/750x500/data/photo/2021/05/10/6098d519744b7.jpg",
    description: `Upacara Labuh Saji adalah Upacara adat yang dilakukan oleh masyarakat kota Palabuhan ratu, Kabupaten Sukabumi, Jawa barat. Upacara dilakukan sebagai ungkapan rasa syukur kepada Sang Hyang Widhi karena telah memberi kesejahteraan.`
}, {
    name: "Munjung",
    img_url: "https://v-images2.antarafoto.com/ngunjung-lr97ru-prv.jpg",
    description: `Tradisi Mujung atau dalam kata lainnya yaitu Ngunjung ini berasal dari kata Kunjung, yaitu mengunjungi lantas untuk berdoa di makam para leluhur atau orang tua. Kegiatan ini sebagai salah satu perwujudan atas rasa syukur dari masyarakat.`
}, {
    name: "Ngarot",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ngarot_3.jpg",
    description: `Ngarot adalah salah satu upacara adat menyambut musim garapan sawah yang dilaksanakan masyarakat di Desa Lelea, Kabupaten Indramayu, Provinsi Jawa Barat. Biasanya upacara ini dilaksanakan mendekati musim penghujan yaitu antara
    bulan Oktober sampai Desember. `
}, {
    name: "Upcara Tingkeban",
    img_url: "https://t-2.tstatic.net/jogja/foto/bank/images/upacara-tingkeban-sebagai-simbol-pelestarian-budaya-jawa.jpg",
    description: `Upacara adat provinsi Jawa Barat ini yang berhubungan dengan sebuah kehidupan manusia lainnya adalah bernama Tingkeban atau Tujuh Bulan. Kebiasaan dari adat ini telah diterapkan ketika seorang ibu sedang mengandung tujuh bulan kandungannya tersebut.`
}, {
    name: "Upacara Tembuni",
    img_url: "https://bimamedia-gurusiana.ap-south-1.linodeobjects.com/e776712e1379f5120bcb913c19e65f5e/2020/04/29/l-hipwee-4-28-1fff80ac3d333dec447583206820be79220200429055106-bimacms.jpg",
    description: `Tembuni adalah salah satu upacara adat suku Sunda yang memliki tujuan untuk memelihara ari-ari atau placenta dari bayi tersebut. Hal ini dikarenakan Placenta atau ari-ari sang bayi harus dirawat dengan sebaik-baiknya. `
}, {
    name: "Nenjrag Bumi",
    img_url: "https://cdnt.orami.co.id/unsafe/468x320/cdn-cas.orami.co.id/parenting/images/Nenjrag_Bumi_Upacara_Kelahiran_Bayi_-_Cultural.width-800.png",
    description: `Nenjrag Bumi adalah salah satu upacara adat khas Sunda yang biasa dilakukan oleh warga Kota Bandung. Kegiatan adat Nenjrag Bumi ini ditujukan kepada anak bayi agar kedepannya tidak menjadi ketakukan atau gampang kaget atas gangguan
    dari luar.`

}];