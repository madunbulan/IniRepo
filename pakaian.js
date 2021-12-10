var params = new URLSearchParams(window.location.search)
var pages = +params.get('pages')

$(document).ready(() => {
    for (i = 0; i < 6; i++) {

        if (i == 0 && pages == 1) {
            $('#kartupakaian').append(`
            <div class="col">
            <div class="card">
                <img src="https://exov.sgp1.digitaloceanspaces.com/assets/img/unggulan/1631695255_7191ff5ab647acd654f6.webp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            </div>
             `)

        } else {
            $('#kartupakaian').append(`
            <div class="col">
            <div class="card">
                <img src="https://mmc.tirto.id/image/otf/1024x535/2018/04/22/antarafoto-liga-seni-budaya-bandung-220418-agr-3_ratio-16x9.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            </div>
             `)
        }
    }




    console.log(pages)
    if (isNaN(pages) || pages == 0) {
        pages = 1
    }
    if (pages <= 1) {
        $('#halaman').append(`
        <li class="page-item disabled">
        <a class="page-link">Previous</a>
    </li> 
        `)
    } else {
        $('#halaman').append(`
        <li class="page-item">
        <a class="page-link">Previous</a>
    </li> 
        `)
    }

    for (i = 1; i < 3; i++) {

        if (i == pages) {
            $('#halaman').append(`
            <li class="page-item active"><a class="page-link" aria-current="page" href="#">${i}</a></li>
                `)
            continue
        }
        $('#halaman').append(`
    <li class="page-item"><a class="page-link" href="/pakaian.html?pages=${i}">${i}</a></li>
        `)



    }
    // if (pages==100){

    // }
    $('#halaman').append(`
    <li class="page-item">
    <a class="page-link" href="#">Next</a>
    </li>

`)
})