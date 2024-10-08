document.addEventListener("DOMContentLoaded", function() {
    filterSelection("all");

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

document.addEventListener("DOMContentLoaded", function () {
  // Adding click event listeners to product cards on the index page
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
      const productCards = document.querySelectorAll(".product-card");

      productCards.forEach(card => {
          card.addEventListener("click", function () {
              const filter = this.dataset.filter;  // Get filter from data-filter attribute
              console.log(`Card clicked with filter: ${filter}`); // Debugging line
              localStorage.setItem("selectedFilter", filter);
              window.location.href = "products.html";
          });
      });
  }

  // Applying filter on the products page
  if (window.location.pathname.includes("products.html")) {
      const selectedFilter = localStorage.getItem("selectedFilter");

      if (selectedFilter) {
          filterSelection(selectedFilter);
          localStorage.removeItem("selectedFilter");

          // Set active button based on the filter
          const buttons = document.querySelectorAll("#myBtnContainer .btn");
          buttons.forEach(button => {
              if (button.getAttribute("onclick").includes(selectedFilter)) {
                  button.classList.add("active");
              } else {
                  button.classList.remove("active");
              }
          });
      } else {
          filterSelection("all");
      }

      // Set up button click events to highlight active buttons
      const btnContainer = document.getElementById("myBtnContainer");
      const btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
              var current = document.getElementsByClassName("active");
              current[0].className = current[0].className.replace(" active", "");
              this.className += " active";
          });
      }
  }
});

// Get the button
let mybutton = document.getElementById("toTopButton");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Submit email form when user presses enter
var input = document.getElementById("email");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});