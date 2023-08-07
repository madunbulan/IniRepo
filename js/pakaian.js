$(document).ready(() => {
    for (i = 0; i < 6; i++) {

        $("#barispakaian").append(`
        <div class="col"><div class="card h-100"><div class="card-img-wrap ">
                <img src="${pakaian[i].img_url}" class="card-img-top" alt="..."></div>
            <div class="card-body">
                <h5 class="card-title">${pakaian[i].name}</h5>
                <p class="card-text ">${pakaian[i].description}</p>
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
            pakaian.forEach((val, i) => {
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

        $("#barispakaian").append(`
        <div class="col"><div class="card h-100"><div class="card-img-wrap ">
                <img src="${pakaian[i].img_url}" class="card-img-top" alt="..."></div>
            <div class="card-body">
                <h5 class="card-title">${pakaian[i].name}</h5>
                <p class="card-text ">${pakaian[i].description}</p>
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

const pakaian = [{
    name: "Pangsi",
    img_url: "img/Galeri/pakaian1.jpg",
    description: "Untuk kaum laki-laki Sunda, dalam kehidupan sehari-hari masa lalu selalu menggunakan celana komprang yakni celana dengan ukuran yang lebih besar ketimbang bentuk kaki. Masyarakat modern kerap menyebutkan oversize, sedangkan di Sunda disebut dengan pangsi."
}, {
    name: "Bludru",
    img_url: "img/Galeri/pakaian2.jpg",
    description: "Baju Beludru merupakan pakaian adat jawa barat yang paling istimewa, biasa digunakan untuk kaum bangsawan."
}, {
    name: "Baju Selontreng dan Sarung Poleng",
    img_url: "img/Galeri/pakaian3.jpg",
    description: "Baju Selontreng sepasang dengan Sarung Poleng adalah baju sehari-hari yang dipakai oleh kaum pria dari rakyat bawah sekali."
}, {
    name: "Baju Bedahan",
    img_url: "img/Galeri/pakaian4.jpg",
    description: "Baju bedahan merupakan sebutan pakaian adat Jawa Barat untuk masyarakat dari kalangan menengah. Bentuknya sama berupa setelan jas tutup dan kebaya seperti pakaian bangsawan namun terlihat lebih sederhana dari segi bahan kain dan aksesoris yang digunakan."
}, {
    name: "Kebaya Sunda",
    img_url: "img/Galeri/pakaian5.jpg",
    description: `Kebaya merupakan baju adat yang digunakan untuk acara resmi di tanah jawa. Kebaya Jawa Barat bentuknya hampir sama dengan kebaya Jawa Tengan maupun Jawa Timur. Kebaya sunda dijadikan sebagai pasangan baju bedahan baik untuk acara
    formal maupun non formal.`
}, {
    name: "Mojang Jajaka",
    img_url: "img/Galeri/pakaian6.jpg",
    description: `Kupat tahu adalah makanan khas Jawa Barat yang terdiri dari ketupat (sejenis kue beras) dan tahu dengan bumbu kacang. Bahan-bahan tambahan meliputi tahu, taoge, cabai, kacang tanah, bawang putih, gula merah, air, dan kecap manis.`
}, {
    name: "Beskap",
    img_url: "img/Galeri/pakaian7.jpg",
    description: `Beskap adalah pakaian tradisional yang kerap digunakan oleh masyarakat Jawa Barat untuk kegiatan resmi atau penting seperti acara pernikahan, upacara adat, atau untuk acara yang bersifat kenegaraan. Beskap sendiri merupakan jas
    tutup dengan lengan panjang yang terbuat dari bahan yang cukup tebal.`
}, {
    name: "Sinjang",
    img_url: "img/Galeri/pakaian8.jpg",
    description: `Sinjang adalah kain panjang yang kerap digunakan sebagai pakaian bawah. Masyarakat tanah air sendiri kerap menyebutnya dengan kain jarik atau kain kebat. Umumnya jenis kain yang digunakan untuk Sinjang berbahan dasar lembut dengan
    warna dan corak yang menarik dan berbeda setiap daerah.`
}, {
    name: "Baju Pengantin Umum",
    img_url: "img/Galeri/pakaian9.jpg",
    description: `Setiap daerah pasti memiliki pakaian adat yang berbeda untuk baju pengantinnya. Baju pengantin di Jawa Barat pada dasarnya mengunakan jas tutup atau beskap dan kebaya untuk pengantin wanitanya. Dibagian kepala dipasangkan mahkota
    yang dikenal dengan nama siger. `
}, {
    name: "Busana Santana Inten Kedaton",
    img_url: "img/Galeri/pakaian10.jpg",
    description: `Busana Santana Inten Kedaton merupakan gaya busana pengantin yang umumnya dipakai masyarakat Ciamis. Dikatakan bahwa, busana pengantin Santana Inten Kedaton merupakan replika busana bangsawan kerajaan Galuh. `
}, {
    name: "Busana Pakaian Pengantin Cirebon",
    img_url: "img/Galeri/pakaian11.png",
    description: `Baju pengantin adat Cirebon biasanya berupa baju oblong warna krem yang dilengkapi juga dengan terataian, celana panjang beludru berwarna hijau, kain didit batik cirebonan, keris, ikat pinggang, kilat bahu dan juga gelang kono. `
}, {
    name: "Kain kebat",
    img_url: "img/Galeri/pakaian12.jpg",
    description: `Kain kebat adalah bawahan kain yang dipakai sebagai pelengkap kebaya (Baju Pangsi). Biasanya dipakai penajang sampai menutupi betis seperti rok. Kain kebat memiliki corak batik yang tidak terlalu mencolok dan dapat digunakan baik
    untuk acara formal maupun sehari-hari.`

}];