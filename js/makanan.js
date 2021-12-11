$(document).ready(() => {
  $("#second-six").hide();
  $("#search-holder").hide();
  $("#more").click(show_more);
  $("#search-form").submit(search)
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

  let query = $("#search-query").val().toLowerCase();
  $(".card")
    .map((i, html) => {
      let title = $(".card-title")[i].innerText.toLowerCase();

      if (title.includes(query)) {
        $("#search-result").prepend(html);
      }
    });
}
