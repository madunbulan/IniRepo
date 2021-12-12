var limit = 6
$(document).ready(() => {
    for (i = 0; i < limit; i++) {

        $("#baristarian").append(`
        <div class="col">
        <div class="card h-100 pb-3">
                    
        <div class="card-body">
            <h5 class="card-title">${tarian[i].name}
            </h5>
            <p class="card-text mb-5">${tarian[i].description}</p>
        </div>
        <div class="card-footer" style="border: none; background-color: transparent;">
            <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target=${tarian[i].datatg}>Read More</a>
        </div>
    </div>

    </div>

    <div class="modal fade" id="${tarian[i].datatgclone}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${tarian[i].name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${tarian[i].isi}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
        </div>
    </div>
</div>

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
          <div class="col"><div class="card h-100 pb-3">
              <div class="card-body">
                  <h5 class="card-title">${val.name}</h5>
                  <p class="card-text mb-5">${val.description}</p>
                  </div>
                  <div class="card-footer" style="border: none; background-color: transparent;">
                      <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="${tarian[i].datatg}">Read More</a>
                  </div>
              </div>
          
              </div>

              <div class="modal fade" id="${tarian[i].datatgclone}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">${tarian[i].name}</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      ${tarian[i].isi}
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
                      </div>
                  </div>
              </div>
          </div>
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
            <div class="col">
            <div class="card h-100 pb-3">
                        
            <div class="card-body">
                <h5 class="card-title">${tarian[i].name}
                </h5>
                <p class="card-text mb-5">${tarian[i].description}</p>
            </div>
            <div class="card-footer" style="border: none; background-color: transparent;">
            <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target=${tarian[i].datatg}>Read More</a>
            </div>
        </div>
    
        </div>

        <div class="modal fade" id="${tarian[i].datatgclone}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${tarian[i].name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ${tarian[i].isi}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
                </div>
            </div>
        </div>
    </div>
    
            `);
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
    name: "Sumping",
    isi: `<img src="../img/ensiklopedia/siklo1.jpg" class="pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Sumping (bukan bahasa Sunda) adalah salah satu asesoris yang menempel di sisi kiri-kanan busana bagian kepala penari topeng yang disebut sobrah atau tekes. Bentuknya mirip dengan sebuah untaian bunga. Panjangnya (untuk ukuran orang dewasa) biasanya sekitar satu hasta, dan untuk ukuran anak-anak biasanya lebih pendek. Berjuntai dari atas kuping sampai melebihi pangkal paha. Bahannya terbuat dari berbagai macam bahan, antara lain ada yang dari daun pisang, biji-bijian, benang wool, kain perca, dan sebagainya. Bahan yang kini sering dipergunakan adalah benang wool yang dibuat menjadi bulatan-bulatan kecil kurang-lebih sebesar biji kemiri. Setiap bulatan diselang-seling dengan merjan (mutiara), jumlahnya 15 buah ditambah dengan sebuah bulatan yang agak besar dan sebuah bulatan yang mirip dengan bunga kuncup. Di bagian paling atas dibuat bulatan yang mirip dengan bunga mekar yang disebut dengan kembang melok. Bulatan itu seluruhnya berjumlah 17 buah dan oleh sebagian orang jumlah 17 itu sering dianalogikan dengan jumlah rakaat sholat lima waktu dalam agama Islam.
    Sumping, tidak hanya sebagai hiasan, akan tetapi juga seringkali dipakai untuk berbagai variasi gerak. Oleh sebab itu, di dalam terminologi gerak tari topeng Cirebon dikenal bermacam-macam gerakan sumping, misalnya banting sumping, geong sumping, ngola sumping, dan lain-lain.</p>`,
    description: "Sumping (bukan bahasa Sunda) adalah salah satu asesoris yang menempel di sisi kiri-kanan busana bagian kepala penari topeng yang disebut sobrah atau tekes.",
    datatg: "#targetmodal1",
    datatgclone: "targetmodal1"
}, {
    name: "Sobrah",
    isi: `<img src="../img/ensiklopedia/siklo2.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Sobrah adalah simbol kesabaran dan ketabahan seorang manusia dalam mengarungi kehidupan yang penuh dengan lika-liku. Kata sobrah itu sendiri diyakini berasal dari kata sobir, sobur, sobaro, sobron,  dalam bahasa Arab yang artinya “yang sabar”, “yang tabah hati”, “bersabar”, “berani atas sesuatu”. Warna sobrah didominasi oleh hitam. Warna hitam adalah lambang keabadian dan kelanggengan. Sobrah juga adalah simbol budhi atau pikiran manusia. Bahwa dalam hidup ini, budhi dan pikiran itu harus sigér tengah ora kena miring ngiwa-nengen, kudu panceg maring Pangéran (Budi dan pikiran itu harus seimbang, jangan berat ke kiri atau ke kanan, harus lurus dan tertuju kepada Tuhan). Oleh sebab itu mengapa sobrah itu dilengkapi oleh sigér yang bentuknya lancip seperti menunjuk ke atas.   </p>`,
    description: "Sobrah adalah simbol kesabaran dan ketabahan seorang manusia dalam mengarungi kehidupan yang penuh dengan lika-liku.",
    datatg: "#targetmodal2",
    datatgclone: "targetmodal2"

}, {
    name: "Sesenggak",
    isi: `<p class="isiklo">Senggak adalah suara yang mirip dengan “teriakan”, pada umumnya dilakukan oleh para nayaga (pemusik) atau pemain lainnya secara bersahut-sahutan yang dimaksudkan untuk meramaikan situasi atau untuk memberi kesan gembira dan hiruk pikuk. Senggak  bisa kita dengar dalam berbagai pertunjukan kesenian, seperti kiliningan, wayang golek, wayang kulit, tari, bujangga, celempungan, jenaka Sunda, dan sebagainya.
    Suara Senggak biasanya berupa beberapa fonem dan morfem, seperti a, i, eu, ha, eup, ak, ik, ek, ok, uk, aweu, eyek, dan sebagainya. Salah satu atau dua dari beberapa fonem dan morfem tersebut, dipilih dan disuarakan oleh masing-masing pemusik (nayaga) secara bersahut-sahutan (canon) atau kadang-kadang bersama-sama, baik bernada maupun tidak.
    Dalam sebuah pertunjukan, senggak merupakan bagian dari komposisi musik yang munculnya hanya sewaktu-waktu dan bersifat improvisasi. Secara praktis, senggak biasanya hanya dilakukan oleh beberapa orang pemusik saja, dan dilakukan sambil menabuh. Senggak membuat musik itu menjadi dinamis, dan  menjadi penyemangat bagi penari, serta dapat membuat suasana pertunjukan menjadi bergairah.   </p>`,
    description: "Tari Merak merupakan seni tradisional dari kota Bandung, Jawa Barat. Tarian ini diciptakan oleh Rd. Tjetje Somantri tahun 1955. Tari Merak merupakan pengembangan dari gaya tarian tradisional Sunda.",
    datatg: "#targetmodal3",
    datatgclone: "targetmodal3"
}, {
    name: "Rerempah",
    isi: `<img src="../img/ensiklopedia/siklo4.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Adalah macam-macam properti dalam pertunjukan wayang golek yang terbuat dari kulit atau kayu. Jenisnya antara lain terdiri atas berbagai macam senjata, jimat, dan binatang seperti panah, keris, tumbak, gada, limpung, candrasa, kembang cangkok wijaya kusumah, jamus layang kalimusada, cupu manik astagina, gajah, kuda, babi, naga, banteng, garuda, dan lain-lain.
    Rerempah biasanya ditancapkan di bawah “jagat” dengan posisi terbalik. Properti ini digunakan sesuai dengan peruntukannya, misalnya untuk alat perang yakni panah, keris, tumbak, gada, dan ada pula yang dipakai untuk ditunggangi seperti gajah dan kuda. Di samping itu ada pula yang dipergunakan sebagai peran binatang, misalnya garuda, naga, dan sebagainya.   </p>`,
    description: "Adalah macam-macam properti dalam pertunjukan wayang golek yang terbuat dari kulit atau kayu.",
    datatg: "#targetmodal4",
    datatgclone: "targetmodal4"
}, {
    name: "Rancung",
    isi: `<img src="../img/ensiklopedia/siklo5.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Rancung adalah salah satu komponen dalam pertunjukan kesenian burok atau kesenian yang berbentuk arak-arakan. Bahannya dari kerangka bambu yang dibuat seperti payung dan diberi ranting-ranting. Ranting-ranting tersebut gunanya untuk mengaitkan bermacam-macam makanan khas desa seperti lakar (rangginang) putih, lakar merah, opak, pisang, jawadah (dodol), krupuk, jajanan pasar, wajit dan sebagainya.  Makanan tersebut diikat dengan tali dan digantungkan di kerangka bambu tadi sehingga bergelantungan. 
    Kerangka bambu yang seperti payung tersebut dihias memakai kertas warna-wari merah, putih, kuning, dan biru sehingga kelihatan menarik dan meriah. Tempo dulu, rancung dipakai untuk mengarak pengantin akan tetapi kini  digunakan untuk mengarak anak sunat atau anak yang telah digusar.</p>`,
    description: `Rancung adalah salah satu komponen dalam pertunjukan kesenian burok atau kesenian yang berbentuk arak-arakan.`,
    datatg: "#targetmodal5",
    datatgclone: "targetmodal5"
}, {
    name: "Puncak Manik",
    isi: `<img src="../img/ensiklopedia/siklo6.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Puncak manik adalah nasi tumpeng berbentuk kerucut yang di ujungnya disimpan telur ayam. Nasi ini termasuk salah satu sasajen (sesaji), dan biasanya diperuntukan bagi keperluan ritual adat, baik yang diselenggarakan secara komunal maupun individual. Sebagai sesaji, puncak manik biasanya disimpan pada sebuah wadah khusus, baskom, cempeh, atau niru, dan disatukan dengan jenis makanan lainnya. 
    Puncak manik adalah simbol dari cita-cita manusia. Semua insan sebagai manusia ingin mendapatkan keberhasilan sampai pada puncaknya, sampai pada masa keemasan dalam segala sesuatu potensi yang sedang dijalani dalam hidup ini.
    Tumpeng nasi yang berbentuk kerucut dimaksudkan untuk menyertakan lambang asas linggaisme. Tujuannya adalah untuk mengingatkan kepada banyak orang tentang sangkan paraning dumadi, yakni tentang asal-usul dan akhir kehidupan manusia. 
    Sedangkan tumpeng menggambarkan kehendak dan cita-cita yang enak dalam pengertian kesejahteraan jasmani dan kebahagiaan rohani. Cita-cita senantiasa harus mawas diri, memperhitungkan daya lebih dari kelemahan-kelemahan yang ada pada dirinya. Cita-cita haruslah merupakan yang pantas dipersembahkan kepada Tuhan Yang Maha Esa, yaitu dalam usaha meningkatkan hubungan manusia dengan alam dan lingkungan, manusia dengan manusia lain, maupun dirinya sendiri sesuai dengan berkat hidup dan kehidupan.</p>`,
    description: `Puncak manik adalah nasi tumpeng berbentuk kerucut yang di ujungnya disimpan telur ayam. `,
    datatg: "#targetmodal6",
    datatgclone: "targetmodal6"
}, {
    name: "Panjak Repot",
    isi: `<img src="../img/ensiklopedia/siklo7.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Panjak Repot, atau dalam bahasa Inggris disebut One Man Band, adalah seni bermain musik/karawitan yang dilakukan oleh seorang diri. Kesenian ini pernah muncul sekitar tahun 60-an di desa-desa dan dipertunjukan oleh seorang pemain secara berkeliling atau bebarang (ngamen). Alat musiknya terdiri atas seperangkat angklung berlaras salendro, kecrek, dan gong bumbung atau gong tiup, yakni gong yang terbuat dari seruas bambu yang dibunyikan dengan cara ditiup. Disebut panjak repot, karena seluruh alat musik yang dibawa dimainkan sendiri. Kedua tangannya memiankan angklung, kakinya membunyikan kecrek, dan mulutnya meniup gong bumbung. Kesenian ini kemudian punah sekitar tahun 70-an.
    Baru-baru ini, kesenian tersebut ditemukan lagi di daerah Tanjungsiang, yakni di Kampung Tanjung, Desa/Kecamatan Tanjungsiang, Kabupaten Subang pada program Pewarisan Seni Tradisional Ketuk Tilu Mapag Hujan yang diselenggarakan oleh Balai Pengelolaan Taman Budaya Jawa Barat, 3 Juli 2012. Mereka menyebutnya dengan Ketuk Tilu Buhun. Alat musiknya terdiri atas Ketuk tiga buah yang terbuat dari logam besi atau perunggu, kecrek, dan goong dari besi. Ketiga alat musik tersebut dimainkan sendiri, kedua tangan memainkan ketuk, sesekali tangan kanannya memukul goong, dan kaki memainkan kecrek.</p>`,
    description: `Panjak Repot, atau dalam bahasa Inggris disebut One Man Band, adalah seni bermain musik/karawitan yang dilakukan oleh seorang diri.`,
    datatg: "#targetmodal7",
    datatgclone: "targetmodal7"
}, {
    name: "Lenyepan",
    isi: `<img src="../img/ensiklopedia/siklo8.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Lenyepan adalah nama sebuah tari yang terdapat dalam genre tari Keurseus atau Tayub. Tari ini berkarakter halus dan biasanya ditarikan oleh laki-laki. Gerakan-gerakannya seringkali dipakai untuk menggambarkan suatu tokoh dalam sebuah cerita, wayang atau pantun misalnya, yang karakternya sama, seperti tokoh Arjuna, Rama, Abimanyu, Mundinglaya, dan sebagainya.  
    Tari Lenyepan merupakan perkembangan dari tari Tayub, yakni perkembangan dari ibing saka (tari tak berstruktur tetap) ke ibing patokan (tari berstruktur tetap). Tari tersebut diiringi oleh lagu yang berirama lambat—dalam istilah karawitan Sunda disebut wirahma opat wilet—seperti lagu Renggong Bandung, Sulanjana, Banjar Sinom, dan sebagainya. Busananya meniru busana menak, terdiri atas baju takwa, bendo, dan kain batik, soder, dan keris.
    Seperti halnya tari Keurseus lainnya, tari Lenyepan sudah sangat jarang disaksikan lagi, seiring dengan langkanya pertunjukan tari Keurseus adan Tayuban. Tari ini kini dijadikan sebagai salah satu muatan kurikulum di beberapa sekolah kesenian seperti SMKN 10, STSI Bandung, dan UPI Bandung.</p>`,
    description: `
    Lenyepan adalah nama sebuah tari yang terdapat dalam genre tari Keurseus atau Tayub. Tari ini berkarakter halus dan biasanya ditarikan oleh laki-laki. `,
    datatg: "#targetmodal8",
    datatgclone: "targetmodal8"
}, {
    name: "Klana Udeng",
    isi: `<img src="../img/ensiklopedia/siklo9.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Dalam pertunjukan topeng Cirebon, Klana Udeng adalah salah satu tari yang biasanya ditampilkan pada bagian terakhir. Disebut Klana Udeng, karena salah satu bagian kostum kepalanya memakai udeng atau ikat kepala. Tarian ini muncul setelah topeng Klana selesai ditarikan. Gerakan dan musik pengiringnya berbeda dengan topeng Klana. 
    Dari sekian banyak gaya topeng Cirebon, Klana Udeng hanya terdapat di beberapa gaya, antara lain di daerah Pekandangan, Tambi, Indramayu, dan di daerah Cipunagara, Subang. Topeng gaya daerah lainnya, seperti Gegesik, Kalianyar, Losari, Slangit, Palimanan, dan lain-lain, tidak pernah menampilkan tari yang satu ini. Tari topeng ini menjadi sangat terkenal setelah Rasinah menarikannya di berbagai pertunjukan, baik di Indramayu, Cirebon maupun di daerah lainnya serta di luar negeri. Tarian ini kemudian malah menjadi salah satu materi ajar di beberapa sanggat tari topeng di Indramayu.
    Berbeda dengan topeng Klana yang sering kita lihat, sebagian gerakan Klana Udeng ditarikan secara komikal. Gerakannya terkadang menirukan orang yang tengah mabuk bahkan melucu. Dalang topeng Carini dari Cipunagara, misalnya, menarikan topeng ini dengan penuh kelucuan. Selain menggambarkan seseorang yang tengah mabuk sebagian gerakannya juga mirip dengan gerakan orang yang kaki, tangan dan kepalanya lemas. Sebagian lagi gerakannya mirip dengan gerakan tari dalam Terbang Randu Kentir.</p>`,
    description: `Dalam pertunjukan topeng Cirebon, Klana Udeng adalah salah satu tari yang biasanya ditampilkan pada bagian terakhir. Disebut Klana Udeng, karena salah satu bagian kostum kepalanya memakai udeng atau ikat kepala.`,
    datatg: "#targetmodal9",
    datatgclone: "targetmodal9"
}, {
    name: "Lotek atau Gado-gado",
    isi: `<img src="../img/ensiklopedia/siklo10.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Gado-gado (dalam bahasa Indonesia atau bahasa Betawi), juga dikenal sebagai Lotek (dalam bahasa Sunda dan Jawa) adalah hidangan Betawi atau Indonesia saladconsisting sayuran rebus disajikan dengan saus saus kacang. Hal ini berbeda dari lotek atah atau karedok untuk versionof yang segar dan mentah sayuran ditutupi dengan saus kacang. Lain hidangan serupa tapi tak sama pecel Jawa. Hal ini diperkirakan awalnya telah Sundanesedish a. Hal ini banyak dilayani dari gerobak penjaja, kios (warung) serta restoran dan hotel baik di Indonesia maupun di seluruh dunia.</p>`,
    description: `Gado-gado (dalam bahasa Indonesia atau bahasa Betawi), juga dikenal sebagai Lotek (dalam bahasa Sunda dan Jawa) adalah hidangan Betawi atau Indonesia saladconsisting sayuran rebus disajikan dengan saus saus kacang.`,
    datatg: "#targetmodal10",
    datatgclone: "targetmodal10"
}, {
    name: "Tuding",
    isi: `<img src="../img/ensiklopedia/siklo11.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Dalam kamus bahasa Sunda, tuding artinya gagang tangan wayang golek atau wayang kulit. Gagang tersebut gunanya untuk menghidupkan atau menggerakkan tangan wayang, baik untuk geture saat wayang itu bicara, saat diarikan, dan diperangkan. 
    Pada umumnya, tuding untuk wayang golek bahannya terbuat dari bambu, akan tetapi untuk wayang kulit ada pula yang terbuat dari tanduk. Bentuknya bulat, panjangnya antara 40 s/d 45 cm dengan diameter sekitar 3 inci. Pada wayang golek, alat tersebut dikaitkan ke tengah-tengah kedua telapak tangan wayang dengan benang yang panjangnya kira-kira 1 s/d 1,5 cm, sehingga jika sudah terpasang, alat tersebut seperti menggantung. Akan tetapi, benang pada tuding wayang kulit lebih pendek, kira-kira 0,5 cm. Diujung tuding paling atas dibuat lubang kecil untuk mengaitkan benang yang tersambung ke bagian telapak tangan wayang. 
    Pada bagian tangan wayang, baik wayang golek maupun wauang kulit, tuding adalah salah satu alat yang sangat vital. Melalui alat itulah tangan-tangan wayang dihidupkan untuk berbagai gerakan: gestur bicara, menari, dan perang. Cara memegang dan menggerakannya pun bermacam-macam. Ada yang dijepit dan ada yang digenggam, baik dengan tangan kiri maupun tangan kakan, atau sekaligus dengan kedua tangan (kiri dan kanan). 
    Tuding dalam wayang golek, selain difungsikan untuk menghidupkan tangan wayang, juga bisa difungsikan sebagai senjata atau alat, misalnya sebagai tumbak atau pengungkit. Demikian pula benangnya, selain berfungsi untuk mengaitkan tuding, juga berfungsi untuk menghidupkan bagian sikut. Caranya ialah dengan memutar tuding sehingga benang tersebut melilit ke bagian tuding sehingga menyatu dengan bagian telapak tangan wayang. Dengan cara ini maka sikut wayang bisa digerakkan seperti halnya orang yang menyikut saat diperangkan atau membengkokkan sikutnya saat ditarikan.
    Cara memainkan tuding untuk wayang kulit agak sedikit berbeda dibanding dengan wayang golek. Hal ini disebabkan karena posisi tangan wayang kulit menyamping, sedangkan posisi tangan wayang golek seperti halnya posisi tangan manusia. Oleh sebab itu, ketika kedua tuding itu dimainkan, misalnya saat wayang itu ditarikan atau diperangkan, maka salah satu tuding itu digenggam oleh tangan dalang (kiri atau kanan) sekaligus dengan campurit. Cara memainkan tuding pada wayang kulit tidak sebebas memainkan tuding pada wayang golek. 
     </p>`,
    description: `Dalam kamus bahasa Sunda, tuding artinya gagang tangan wayang golek atau wayang kulit. Gagang tersebut gunanya untuk menghidupkan atau menggerakkan tangan wayang, baik untuk geture saat wayang itu bicara, saat diarikan, dan diperangkan. `,
    datatg: "#targetmodal11",
    datatgclone: "targetmodal11"
}, {
    name: "Sabet",
    isi: `<img src="../img/ensiklopedia/siklo12.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Sabet (Sunda), secara harfiah artinya tebas. Akan tetapi bukan itu yang dimaksud, melainkan suatu istilah yang terdapat dalam pedalangan. Sabet artinya keterampilan dalang dalam memainkan wayang. Biasanya menyangkut beberapa hal antara lain: cara menarikan, memerangkan, dan gerak-gerik lainnya. Sabet merangkum keterampilan yang dirumuskan menjadi luwes, kewes, dan pantes. Luwes berkaitan dengan kesesuaian gerak dan irama, kewes berkaitan dengan ekspresi, dan pantes berkaitan dengan menyatunya antara dalang dan gerakan wayang itu terasa “hidup”. Dalam basa Sunda hal tersebut disebut nyari.
    Dalam pertunjukan wayang, baik wayang kulit maupun golek, sbet setiap dalang berbeda-beda. Bisa saja seorang dalang itu sangat terampil, dan secara teknis ia piawai memperagakan berbagai gerakan, akan tetapi belum tentu nyari. Salah satu contoh dalang yang sabet-nya nyari adalah Abah Sunarya (alm.) atau Asep Sunandar Sunarnya. Oleh sebab itu ia dijuluki pula sebagai Dalang Sabet.</p>`,
    description: `Sabet (Sunda), secara harfiah artinya tebas. Akan tetapi bukan itu yang dimaksud, melainkan suatu istilah yang terdapat dalam pedalangan. Sabet artinya keterampilan dalang dalam memainkan wayang. `,
    datatg: "#targetmodal12",
    datatgclone: "targetmodal12"
}, {
    name: "Ketuk",
    isi: `<img src="../img/ensiklopedia/siklo13.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Di dalam gamelan pelog dan salendro, ketuk adalah salah satu watitra (alat musik) yang berfungsi untuk menuntun keajegan irama lagu yang tengah dimainkan. Di dalam gamelan Cirebon, waditra tersebut disebut dengan tutukan. Bentuknya seperti bonang dan biasanya bersanding dengan kemyang (Sunda) atau kebluk (Cirebon). Nada ketuk atau tutukan adalah barang (istilah dalam gamelan Sunda), laras atau susul (istilah dalam gamelan Cirebon), dan nada kemyang atau kebluk adalah galimer atau sepuluh.
    Di dalam permainan gamelan, kedua waditra tersebut biasanya ditabuh secara bersahut-sahutan, yakni sekali ketuk dan sekali kemyang/kebluk, sehingga terdengar seperti suara tuk-bluk tuk-bluk. Akan tetapi, di dalam permainan gamelan Cirebon, terutama dalam irama yang lambat (dodoan) ketuk/tutukan kadang-kadang ditabuh dua kali dan kemyang/kebluk ditabuh sekali.
    Di dalam permainan gamelan Cirebon, baik untuk gamelan wayang maupun topeng, bahkan juga dalam Tarling, kebluk dan tutukan mempunyai peranan yang sangat penting. Tabuhannya berfungsi untuk menjaga keajegan seluruh irama lagu. Tabuh ketuk yang salah bisa mengacaukan irama lagu yang tengah dimainkan. Penabuhnya pun adalah orang yang sangat khusus, dan kehadirannya sama pentingnya dengan penabuh lainnya. Oleh sebab itu, di Cirebon tidak semua nayaga bisa menabuh waditra tersebut. Hal ini agak berbeda dengan permainan dalam gamelan Sunda, kedua waditra itu malah bisa tidak dimainkan. 
    Lain halnya dengan ketuk tilu, walaupun namanya sama-sama ketuk, namun dalam praktik memainkannya berbeda dengan ketuk dalam gamelan. Jumlah waditranya pun bukan dua, melainkan tiga, sesuai dengan namanya, ketuk tilu, yakni ketuk yang waditranya berjumlah tiga buah. Akan tetapi, cara memainkannya hampir sama, yakni bersahutan antara waditra yang satu dengan dua waditra lainnya.</p>`,
    description: `Di dalam gamelan pelog dan salendro, ketuk adalah salah satu watitra (alat musik) yang berfungsi untuk menuntun keajegan irama lagu yang tengah dimainkan. Di dalam gamelan Cirebon, waditra tersebut disebut dengan tutukan.`,
    datatg: "#targetmodal13",
    datatgclone: "targetmodal13"
}, {
    name: "Badawang Burok",
    isi: `<img src="../img/ensiklopedia/siklo14.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Badawang Burok adalah sejenis boneka besar yang kerangkanya terbuat dari anyaman bambu. Bagian luarnya ditutupi kain yang dicat menyerupai wujud binatang. Kerangka dasar terdiri atas tiga bagian, yaitu bagian kepala,  badan, dan sayap. Bagian kepala dibuat menyerupai seorang perempuan cantik, mengenakan hiasan jamang yang terbuat dari kain berwarna keemasan. Wajah Burok adalah topeng yang terbuat dari kertas karton yang dicat putih, dilukis menyerupai rias wajah seorang penari. Bentuk alisnya bulan sapasi, kelopak matanya diberi eye shadow berwarna mencolok. Matanya dapat berkedip, hidung mancung. dan bibirnya dicat warna merah seperti halnya seseorang yang mengenakan lipstick. Bentuk kepala itu nampak seperti perempuan berjilbab. 
    Bagian kepala diberi tangkai dari sebatang kayu dan berfungsi untuk memudahkan pemain di dalam melakukan berbagai gerakan seperti mengangguk, menoleh ke kanan dan ke kiri, berputar, dan juga gerakan ngayang ke belakang, dan ke depan.
    Kerangka badan dibuat besar agar dapat dimasuki oleh dua orang yang akan memainkannya. Bagian ini ditutupi kain yang berwarna-warni, mulai dari kepala, badan bagian depan sampai bagian belakang. Kain yang menutupi bagian badan itu menyerupai baju wanita dengan berbagai warna menyala: merah, hijau, kuning, biru, dan oranye, lengkap dengan aksesorisnya seperti  kace border, renda, dan untaian payet. Di bagian punggungnya dipasang sepasang sayap berwarna merah muda, hijau muda, atau warna lainnya dan dimainkan ke atas ke bawah oleh seorang pemian sehingga gerakannya menyerupai burung yang sedang terbang.</p>`,
    description: `
    Badawang Burok adalah sejenis boneka besar yang kerangkanya terbuat dari anyaman bambu. Bagian luarnya ditutupi kain yang dicat menyerupai wujud binatang. Kerangka dasar terdiri atas tiga bagian, yaitu bagian kepala,  badan, dan sayap. Bagian kepala dibuat menyerupai seorang perempuan cantik, mengenakan hiasan jamang yang terbuat dari kain berwarna keemasan.`,
    datatg: "#targetmodal14",
    datatgclone: "targetmodal14"
}, {
    name: "Alok",
    isi: `<img src="../img/ensiklopedia/siklo15.jpg" class="isiklo pe-3" width="250" border="0" style="float:left"> <p class="isiklo">Dalam karawitan Sunda, alok adalah nyanyian atau kawih yang biasanya dilantunkan secara solois oleh seorang pria seperti yang sering kita dengar dalam pergelaran wayang golek, wayang kulit, wayang cepak, kiliningan, celempungan, bujangga, dan sebagainya. Di lingkungan karawitan Sunda, orang yang melantunkannya disebut Juru Alok atau Wiraswara. Syairnya berupa pantun (sisindiran) atau kata-kata yang dirangkai menurut kehendak penyanyinya. Dalam syair lagunya, seringkali diselipkan nama seseorang sebagai penghormatan atau sebagai cara untuk mendapatkan saweran. Di daerah Cirebon dan Indtramayu, menyebut nama seseorang dalam sindenan disebut jambu alasan. 

    Di dalam kehidupan karawitan Sunda, khususnya kiliningan atau wayang golek, peran Juru Alok sangat penting. Ia bukan saja hanya mengisi kekosongan dalam struktur lagu, akan tetapi juga sebagai penghubung antara baris melodi yang terdapat dalam lagu yang dinyanyikan oleh sinden serta harmonisasi komposisi musik itu sendiri.  Oleh sebab itu, tidaklah heran jika dikenal nama-nama juru alok yang popularitasnya juga tak kalah dengan pesinden atau dalang, seperti Mang Samin, Mang Eye, Mang Dedi Rosida, dan lain-lain.
    Dalam karawitan Cirebon dan Indramayu (tayuban, wayang, kliningan, tarling), sebutan alok sama dengan nglagon, akan tetapi tidak ada orang yang secara khusus dijadikan juru nglagon, karena nglagon biasanya dilantunkan secara rampak atau bersama-sama. Syairnya bukan berupa pantun melainkan kata-kata yang tidak mempunyai arti, misalnya e walele, walele, e walele. Alok atau nglagon, biasanya muncul di sela-sela nyanyian sinden, di antara kenongan dan goongan lagu.   </p>`,
    description: `Dalam karawitan Sunda, alok adalah nyanyian atau kawih yang biasanya dilantunkan secara solois oleh seorang pria seperti yang sering kita dengar dalam pergelaran wayang golek, wayang kulit, wayang cepak, kiliningan, celempungan, bujangga, dan sebagainya. `,
    datatg: "#targetmodal15",
    datatgclone: "targetmodal15"

}];