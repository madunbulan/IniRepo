$(document).ready(() => {
    for (i = 0; i < 6; i++) {

        $("#barismakanan").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${makanan[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${makanan[i].name}</h5>
              <p class="card-text ">${makanan[i].description}</p>
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
            makanan.forEach((val, i) => {
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

        $("#barismakanan").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${makanan[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${makanan[i].name}</h5>
              <p class="card-text ">${makanan[i].description}</p>
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
const makanan = [{
    name: "Karedok",
    img_url: "img/galeri/makanan1.jpg",
    description: "Karedok adalah makanan khas Jawa Barat berisikan macam-macam sayuran. Hidangan sederhana dan sehat ini menggunakan bahan-bahan segar dan mentah, yang diiris dan disajikan dengan saus kacang tradisional."
}, {
    name: "Nasi Timbel",
    img_url: "img/galeri/makanan2.jpg",
    description: "Nasi timbel adalah hidangan tradisional khas Jawa Barat. Olahan sederhana ini terbuat dari nasi yang dibungkus daun pisang, lalu dikukus hingga empuk. Nasi timbel jarang dimakan sendiri, biasanya disajikan dengan berbagai lauk, seperti ayam goreng, ikan goreng, tahu, tempe, sayuran, sup, atau sambal."
}, {
    name: "Batagor",
    img_url: "img/galeri/makanan3.jpg",
    description: "Salah satu jajanan khas Jawa Barat adalah batagor yang merupakan akronim dari bakso, tahu goreng. Makanan ini terdiri dari pangsit ikan goreng yang disajikan dengan saus pedas tradisional. Ikan yang paling umum digunakan untuk membuat hidangan ini adalah ikan tenggiri. Namun tidak jarang juga yang menggunakan ikan tuna, makarel, dan udang."
}, {
    name: "Cilok",
    img_url: "img/galeri/makanan4.jpg",
    description: "Makanan khas Jawa Barat ini terdiri dari bola-bola kenyal yang berbahan dasar tepung tapioka, ditambahkan udang kering, bawang putih, dan daun bawang. Cilok adalah singkatan dari aci dicolok. Aci adalah nama lain dari tepung tapioka. Ukuran cilok mungkin berbeda-beda, tetapi umumnya camilan satu ini seukuran dengan bakso."
}, {
    name: "Empal Gentong",
    img_url: "img/galeri/makanan5.jpg",
    description: `Empal gentong adalah makanan khas Jawa Barat, tepatnya dari Cirebon. Sup ini dimasak dalam pot yang terbuat dari tanah liat. Bahan-bahan empal gentong merupakan kombinasi daging sapi, bawang merah, bawang putih, kemiri, kunyit, pala, santan, kecap manis, cengkeh, serai, dan daun jeruk purut.`
}, {
    name: "Kupat Tahu",
    img_url: "img/galeri/makanan6.jpg",
    description: `Kupat tahu adalah makanan khas Jawa Barat yang terdiri dari ketupat (sejenis kue beras) dan tahu dengan bumbu kacang. Bahan-bahan tambahan meliputi tahu, taoge, cabai, kacang tanah, bawang putih, gula merah, air, dan kecap manis.`
}, {
    name: "Rujak Cuka",
    img_url: "img/galeri/makanan7.jpg",
    description: `Rujak cuka adalah makanan khas Jawa Barat lainnya. Rujak jenis ini dibuat dengan bahan utama buah-buahan seperti mangga dan nanas mentah, serta sayuran seperti kol, taoge, bengkuang, dan mentimun.`
}, {
    name: "Pepes Tahu",
    img_url: "img/galeri/makanan8.jpg",
    description: `Pepes tahu terdiri dari tahu dibumbui dan dikukus yang dimasak dalam daun pisang. Bahan-bahannya meliputi tahu, paprika, daun bawang, dan bumbu terasi yang terdiri dari bawang merah, bawang putih, gula, garam, dan cabai rawit.`
}, {
    name: "Nasi Tutug Oncom",
    img_url: "img/galeri/makanan9.jpg",
    description: `Nasi tutug oncom atau kadang hanya disebut tutug oncom, adalah makanan khas Jawa Barat yang terbuat dari nasi dicampur dengan kacang oncom yang difermentasi. Hidangan ini berasal dari Tasikmalaya. `
}, {
    name: "Nasi Jamblang",
    img_url: "img/galeri/makanan10.jpg",
    description: `Nasi jamblang adalah salah satu makanan khas Cirebon yang awalnya disajikan untuk para pekerja paksa yang membangun Jalan Pos Besar dari Anyer hingga Panarukan, melewati Kabupaten Cirebon pada zaman pemerintahan Belanda. `
}, {
    name: "Growolan",
    img_url: "img/galeri/makanan11.jpg",
    description: `Growolan adalah makanan khas Cirebon yang terbuat dari olahan gaplek (singkong yang sudah dihaluskan lalu dijemur hingga kering) dan parutan kelapa. Kata growolan sendiri berasal dari bahasa Jawa yang berarti gumpalan
  atau kumpulan. `
}, {
    name: "Empal gepuk",
    img_url: "img/galeri/makanan12.jpg",
    description: ` Makanan khas Sunda ini berbahan dasar daging yang di goreng bersama dengan bumbu dan kelapa. Gepung ini sangat cocok dimakan bersama nasi yang masih hangat.`

}];