function switchPage(page) {
  $.ajax({
    url: page,
    type: "GET",
    dataType: "html",
    success: (content) => {
      console.log("switching: ", content);
      $("#home").html(content);
    },

    error: (error) => {
      console.log(error);
    },

    complete: (xhr, status) => {
      console.log("Done switching");
      console.log(xhr, status);
    }
  })
}

$(document).ready(() => {
  // $("a").on("click", (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   let page_ref = $(this).attr("href");
  //   console.log(page_ref);
  //   switchPage();
  // })
  // alert("ay");
  $("#about").on("click", (e) => {
    e.preventDefault();
    switchPage("/about.html");
  })
});