// squares item horizontal scroll

let item = document.querySelector(".squares");

item.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    item.scrollLeft += 100;
  } else {
    item.scrollLeft -= 100;
  }
});

// rectangles item horizontal scroll

let itemr = document.querySelector(".rectangles");

itemr.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    itemr.scrollLeft += 100;
  } else {
    itemr.scrollLeft -= 100;
  }
});
