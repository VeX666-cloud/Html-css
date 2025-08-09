const books = [
  { id: 1, title: "A Philosophy of Shame", author: "Frédéric Gros", price: 12.99, image: "./81HoxoLQr9L._SY522_.jpg" },
  { id: 2, title: "Dopamine Nation", author: "Dr. Anna Lembke", price: 24.99, image: "./41r9KMGxtNL._SY445_SX342_.jpg" },
  { id: 3, title: "The Molecule of More", author: "Daniel Z. Lieberman", price: 18.99, image: "./81IViCm+cVL._SY425_.jpg" },
  { id: 4, title: "Black Holes", author: "Brian Cox", price: 15.99, image: "./61d-jSVCKrL._SY425_.jpg" },
  { id: 5, title: "Why Does E=mc2?", author: "Brian Cox", price: 21.99, image: "./71s7UjlIunL._SY425_.jpg" }
];

let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  const bookGrid = document.getElementById("bookGrid");

  if (bookGrid) {
    books.forEach(function (book) {
      bookGrid.innerHTML +=
        '<div class="book-card">' +
        '<img src="' + book.image + '" alt="' + book.title + '">' +
        '<h4>' + book.title + '</h4>' +
        '<p>' + book.author + '</p>' +
        '<p>$' + book.price + '</p>' +
        '<button class="add-to-cart" data-id="' + book.id + '">Add to Cart</button>' +
        '</div>';
    });
  }

  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
      window.location.href = "home.html";
    });
  }
});
