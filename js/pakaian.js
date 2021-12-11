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
    img_url: "https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/56868/w-740/2.jpg.webp",
    description: "Untuk kaum laki-laki Sunda, dalam kehidupan sehari-hari masa lalu selalu menggunakan celana komprang yakni celana dengan ukuran yang lebih besar ketimbang bentuk kaki. Masyarakat modern kerap menyebutkan oversize, sedangkan di Sunda disebut dengan pangsi."
}, {
    name: "Bludru",
    img_url: "https://1.bp.blogspot.com/-kpS5RH57sZg/Xp3AYmnwMYI/AAAAAAAACqw/3MemNLpR8yAImhargFIOOOvoiYWxl6S7QCLcBGAsYHQ/w1280-h720-p-k-no-nu/beludru.JPG",
    description: "Baju Beludru merupakan pakaian adat jawa barat yang paling istimewa, biasa digunakan untuk kaum bangsawan."
}, {
    name: "Baju Selontreng dan Sarung Poleng",
    img_url: "https://1.bp.blogspot.com/-xJ6-RY_bQCw/WAKsowMpkTI/AAAAAAAAPvo/thnqgs7siZ0JYxlDPbT89jVDxmjvfwW9wCLcB/s1600/Baju%2Badat%2BSunda.jpg",
    description: "Baju Selontreng sepasang dengan Sarung Poleng adalah baju sehari-hari yang dipakai oleh kaum pria dari rakyat bawah sekali."
}, {
    name: "Baju Bedahan",
    img_url: "https://s2.bukalapak.com/bukalapak-kontenz-production/content_attachments/56867/original/3.jpg",
    description: "Baju bedahan merupakan sebutan pakaian adat Jawa Barat untuk masyarakat dari kalangan menengah. Bentuknya sama berupa setelan jas tutup dan kebaya seperti pakaian bangsawan namun terlihat lebih sederhana dari segi bahan kain dan aksesoris yang digunakan."
}, {
    name: "Kebaya Sunda",
    img_url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1612778381/girl-4278812_1280_cuoicu.jpg",
    description: `Kebaya merupakan baju adat yang digunakan untuk acara resmi di tanah jawa. Kebaya Jawa Barat bentuknya hampir sama dengan kebaya Jawa Tengan maupun Jawa Timur. Kebaya sunda dijadikan sebagai pasangan baju bedahan baik untuk acara
    formal maupun non formal.`
}, {
    name: "Mojang Jajaka",
    img_url: "https://awsimages.detik.net.id/community/media/visual/2021/10/10/moka-jabar-2021_169.jpeg?w=700&q=90",
    description: `Kupat tahu adalah makanan khas Jawa Barat yang terdiri dari ketupat (sejenis kue beras) dan tahu dengan bumbu kacang. Bahan-bahan tambahan meliputi tahu, taoge, cabai, kacang tanah, bawang putih, gula merah, air, dan kecap manis.`
}, {
    name: "Beskap",
    img_url: "https://statik.tempo.co/data/2017/10/10/id_654031/654031_720.jpg",
    description: `Beskap adalah pakaian tradisional yang kerap digunakan oleh masyarakat Jawa Barat untuk kegiatan resmi atau penting seperti acara pernikahan, upacara adat, atau untuk acara yang bersifat kenegaraan. Beskap sendiri merupakan jas
    tutup dengan lengan panjang yang terbuat dari bahan yang cukup tebal.`
}, {
    name: "Sinjang",
    img_url: "https://keluyuran.com/wp-content/uploads/2021/02/Sinjang-Copy.webp",
    description: `Sinjang adalah kain panjang yang kerap digunakan sebagai pakaian bawah. Masyarakat tanah air sendiri kerap menyebutnya dengan kain jarik atau kain kebat. Umumnya jenis kain yang digunakan untuk Sinjang berbahan dasar lembut dengan
    warna dan corak yang menarik dan berbeda setiap daerah.`
}, {
    name: "Baju Pengantin Umum",
    img_url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1610001561/zduus2vwdr3bw8cc18xd.jpg",
    description: `Setiap daerah pasti memiliki pakaian adat yang berbeda untuk baju pengantinnya. Baju pengantin di Jawa Barat pada dasarnya mengunakan jas tutup atau beskap dan kebaya untuk pengantin wanitanya. Dibagian kepala dipasangkan mahkota
    yang dikenal dengan nama siger. `
}, {
    name: "Busana Santana Inten Kedaton",
    img_url: "http://2.bp.blogspot.com/-xpxDbhv8WFQ/VjyhhGPxU-I/AAAAAAAA7ss/xu3kPZjZ4PQ/w1200-h630-p-k-no-nu/file-page9.jpg",
    description: `Busana Santana Inten Kedaton merupakan gaya busana pengantin yang umumnya dipakai masyarakat Ciamis. Dikatakan bahwa, busana pengantin Santana Inten Kedaton merupakan replika busana bangsawan kerajaan Galuh. `
}, {
    name: "Busana Pakaian Pengantin Cirebon",
    img_url: "https://i1.wp.com/budayalokal.id/wp-content/uploads/2018/11/pakaian-pengantin-cirebonan.png?w=500&ssl=1",
    description: `Baju pengantin adat Cirebon biasanya berupa baju oblong warna krem yang dilengkapi juga dengan terataian, celana panjang beludru berwarna hijau, kain didit batik cirebonan, keris, ikat pinggang, kilat bahu dan juga gelang kono. `
}, {
    name: "Kain kebat",
    img_url: "https://1.bp.blogspot.com/-OPn9FaY5eeQ/Xp3Cca760QI/AAAAAAAACrU/hTL4-ZTOc24mpzKk500QdcuyryDSDqbkwCLcBGAsYHQ/s1600/kain%2Bkebat.JPG",
    description: `Kain kebat adalah bawahan kain yang dipakai sebagai pelengkap kebaya (Baju Pangsi). Biasanya dipakai penajang sampai menutupi betis seperti rok. Kain kebat memiliki corak batik yang tidak terlalu mencolok dan dapat digunakan baik
    untuk acara formal maupun sehari-hari.`

}];