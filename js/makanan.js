$(document).ready(() => {
  $("#second-six").hide();
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
  $("#second-six").show();
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
  img_url: "https://cdn-2.tstatic.net/travel/foto/bank/images/karedok.jpg",
  description: "Karedok adalah makanan khas Jawa Barat berisikan macam-macam sayuran. Hidangan sederhana dan sehat ini menggunakan bahan-bahan segar dan mentah, yang diiris dan disajikan dengan saus kacang tradisional."
}, {
  name: "Nasi Timbel",
  img_url: "https://cdn-cas.orami.co.id/parenting/images/nasi-timbel.width-800.jpegquality-80.jpg",
  description: "Nasi timbel adalah hidangan tradisional khas Jawa Barat. Olahan sederhana ini terbuat dari nasi yang dibungkus daun pisang, lalu dikukus hingga empuk. Nasi timbel jarang dimakan sendiri, biasanya disajikan dengan berbagai lauk, seperti ayam goreng, ikan goreng, tahu, tempe, sayuran, sup, atau sambal."
}, {
  name: "Batagor",
  img_url: "https://cdn-cas.orami.co.id/parenting/original_images/makanan_khas_Sunda-batagor.jpg",
  description: "Salah satu jajanan khas Jawa Barat adalah batagor yang merupakan akronim dari bakso, tahu goreng. Makanan ini terdiri dari pangsit ikan goreng yang disajikan dengan saus pedas tradisional. Ikan yang paling umum digunakan untuk membuat hidangan ini adalah ikan tenggiri. Namun tidak jarang juga yang menggunakan ikan tuna, makarel, dan udang."
}, {
  name: "Cilok",
  img_url: "https://media.suara.com/pictures/653x366/2018/01/30/53193-resep-cilok-kenyal.jpg",
  description: "Makanan khas Jawa Barat ini terdiri dari bola-bola kenyal yang berbahan dasar tepung tapioka, ditambahkan udang kering, bawang putih, dan daun bawang. Cilok adalah singkatan dari aci dicolok. Aci adalah nama lain dari tepung tapioka. Ukuran cilok mungkin berbeda-beda, tetapi umumnya camilan satu ini seukuran dengan bakso."
}, {
  name: "Empal Gentong",
  img_url: "https://www.resepistimewa.com/wp-content/uploads/empal-gentong.jpg",
  description: `Empal gentong adalah makanan khas Jawa Barat, tepatnya dari Cirebon. Sup ini dimasak dalam pot yang terbuat dari tanah liat. Bahan-bahan empal gentong merupakan kombinasi daging sapi, bawang merah, bawang putih, kemiri, kunyit, pala, santan, kecap manis, cengkeh, serai, dan daun jeruk purut.`
}, {
  name: "Kupat Tahu",
  img_url: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/06/09/resep-kupat-tahu-menu-sarapan-n-20210609032448.jpg",
  description: `Kupat tahu adalah makanan khas Jawa Barat yang terdiri dari ketupat (sejenis kue beras) dan tahu dengan bumbu kacang. Bahan-bahan tambahan meliputi tahu, taoge, cabai, kacang tanah, bawang putih, gula merah, air, dan kecap manis.`
}, {
  name: "Rujak Cuka",
  img_url: "https://asset.kompas.com/crops/xLIuatn9AsronlWRxPhOok86Pio=/46x0:967x614/750x500/data/photo/2021/05/10/6098d519744b7.jpg",
  description: `Rujak cuka adalah makanan khas Jawa Barat lainnya. Rujak jenis ini dibuat dengan bahan utama buah-buahan seperti mangga dan nanas mentah, serta sayuran seperti kol, taoge, bengkuang, dan mentimun.`
}, {
  name: "Pepes Tahu",
  img_url: "https://cdn.idntimes.com/content-images/post/20210207/tahu-ffecba28de9bd66956ce95a94d76105c_600x400.jpg",
  description: `Pepes tahu terdiri dari tahu dibumbui dan dikukus yang dimasak dalam daun pisang. Bahan-bahannya meliputi tahu, paprika, daun bawang, dan bumbu terasi yang terdiri dari bawang merah, bawang putih, gula, garam, dan cabai rawit.`
}, {
  name: "Nasi Tutug Oncom",
  img_url: "https://img-global.cpcdn.com/recipes/aa77ae6951f5ecae/1200x630cq70/photo.jpg",
  description: `Nasi tutug oncom atau kadang hanya disebut tutug oncom, adalah makanan khas Jawa Barat yang terbuat dari nasi dicampur dengan kacang oncom yang difermentasi. Hidangan ini berasal dari Tasikmalaya. `
}];
