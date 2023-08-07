$(document).ready(() => {
    for (i = 0; i < 6; i++) {

        $("#barisbangunan").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${Bangunan[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${Bangunan[i].name}</h5>
              <p class="card-text ">${Bangunan[i].description}</p>
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
            Bangunan.forEach((val, i) => {
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
    for (i = 6; i < 8; i++) {

        $("#barisbangunan").append(`
      <div class="col"><div class="card h-100"><div class="card-img-wrap ">
              <img src="${Bangunan[i].img_url}" class="card-img-top" alt="..."></div>
          <div class="card-body">
              <h5 class="card-title">${Bangunan[i].name}</h5>
              <p class="card-text ">${Bangunan[i].description}</p>
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
const Bangunan = [{
    name: "Imah Badak Heuay",
    img_url: "img/Galeri/bangunan1.jpg",
    description: "Arti salah satu rumah adat Jawa Barat ini sangat unik, yaitu ‘badak yang sedang menguap’. Dinamakan demikian karena bentuk atap bagian belakang hingga tepiannya menyerupai badak yang sedang menguap."
}, {
    name: "Imah Julang Ngapak",
    img_url: "img/Galeri/bangunan2.jpg",
    description: "Imah Julang Ngapak dalam bahasa Indonesia berarti ‘burung yang sedang mengepakkan sayapnya’. Dinamakan demikian karena bentuk atapnya menyerupai burung yang sedang mengepakkan sayap."
}, {
    name: "Perahu Kumareb",
    img_url: "img/Galeri/bangunan3.jpg",
    description: " Arti dari kata parahu kumureb adalah perahu yang terbalik. Itulah sebabnya bentuk atap dari jenis rumah adat ini mirip dengan bentuk perahu yang terbalik."
}, {
    name: "Jubleg Nangkup",
    img_url: "img/Galeri/bangunan4.jpg",
    description: "Rumah adat suku Sunda yang terakhir yaitu rumah adat Jubleg Nangkub. Jika dilihat secara sekilas, rumah adat ini terlihat mirip dengan rumah adat Parahu Kamureb. Secara harfiah, rumah adat ini memiliki makna lesung (alat menumbuk padi) yang menelungkup. Rumah adat Jubleg Nangkub merupakan sebuah simbol kepribadian masyarakat yang sopan, ramah, dan bersahaja."
}, {
    name: "Tagong Anjing",
    img_url: "img/Galeri/bangunan5.jpeg",
    description: ` Nama dari rumah ini memiliki arti yaitu anjing yang sedang duduk. Bentuk atapnya yaitu segitiga, dan bagian atap yang lainnya mengarah ke depan sehingga bentuknya mirip dengan pose anjing yang sedang duduk.`
}, {
    name: "Jolopong",
    img_url: "img/Galeri/bangunan6.jpeg",
    description: `Rumah adat “Jolopong” memiliki bentuk atap yang lebih sederhana yang berbentuk memanjang seperti pelana. Desain serta material atap yang digunakan pun jauh lebih sederhana dibanding jenis rumah adat lainnya, sehingga pembangunannya
    pun lebih mudah`
}, {
    name: "Capit Gunting",
    img_url: "img/Galeri/bangunan7.jpg",
    description: `  Bentuk atap pada rumah adat Sunda ini mirip dengan bentuk gunting, sehingga dinamakan capit gunting. Sedangkan pada bagian ujung atapnya berbentuk saling silang yang kemudian menyisakan hasil persilangan, di antara kayu dengan bambu.`
}, {
    name: "Buka Pongkok",
    img_url: "img/Galeri/bangunan8.jpg",
    description: `Pintu masuk yang posisinya sejajar dengan salah satu ujung susuhunan atau atap rumah, menjadi alasan mengapa rumah adat Suku Sunda ini disebut dengan rumah adat Buka Pongpok.`
}, {

}];