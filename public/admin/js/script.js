// form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword", keyword);
    }
    window.location.href = url.href;
  });
}
// end form search

// btnPagination
let url = new URL(window.location.href);
var buttonsPagination = document.querySelectorAll(".page-link");
buttonsPagination.forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("btn-pagination");
    url.searchParams.set("page", page);
    window.location.href = url.href;
  });
});

// end btnPagination

// btn delete
const btn = document.querySelectorAll(".btn-danger");
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id=e.target.value;
    console.log(id);
  });
});
// end btn delete
