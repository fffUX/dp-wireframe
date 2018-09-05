function summer2018(el) {
  console.log("summer 2018")
    var box = document.getElementById("summer2018");

    var elems = document.querySelectorAll(".box, .box-btn");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    box.classList.add("selected");
    el.classList.add("selected");
}

function spring2018(el) {
  console.log("spring 2018")
  console.log(el)
    var box = document.getElementById("spring2018");

    var elems = document.querySelectorAll(".box, .box-btn");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    box.classList.add("selected");
    el.classList.add("selected");
}

function winter2017(el) {
  console.log("winter 2017")
    var box = document.getElementById("winter2017");

    var elems = document.querySelectorAll(".box, .box-btn");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    box.classList.add("selected");
    el.classList.add("selected");
}
