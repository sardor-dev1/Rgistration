let CARS = [
  {
    title: "Mersades M 124",
    price: 450_000,
    brend: "Mersades",
    color: "red",
    hp: 1300,
    Country: "Germaniya",
  },
  {
    title: "bmw X7",
    price: 90_000,
    brend: "BMW",
    color: "black",
    hp: 400,
    Country: "Germaniya",
  },
  {
    title: "Gelik",
    price: 150_000,
    brend: "mersades benz",
    color: "whity",
    hp: 500,
    Country: "Amerika",
  },
  {
    title: "audi Q7",
    price: 50_000,
    brend: "Audi",
    color: "yellow",
    hp: 600,
    Country: "Germaniya",
  },
];
const tbody = document.querySelector(".tbody");
const form = document.querySelector(".form");
const inputtitle = document.querySelector("#title");
const inputbrend = document.querySelector("#brend");
const inputprice = document.querySelector("#price");
const inputcolor = document.querySelector("#color");
const inputhp = document.querySelector("#hp");
const inputcountry = document.querySelector("#country");

const price = document.querySelector("#sorting__price");
const hp = document.querySelector("#sorting__hp");
const title = document.querySelector("#sorting__title");
const brend = document.querySelector("#sorting__brend");
const Country = document.querySelector("#sorting__Country");

function sortingNumber(value, type) {
  if (value === "descending") {
    CARS.sort((a, b) => b[type] - a[type]);
  } else if (value === "ascending") {
    CARS.sort((a, b) => a[type] - b[type]);
  }
  createTableData(CARS);
}

function sortingString(value, type) {
  if (value === "descending") {
    CARS.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return 1;
      if (second < first) return -1;
      return 0;
    });
  } else if (value === "ascending") {
    CARS.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return -1;
      if (second < first) return 1;
      return 0;
    });
  }
  createTableData(CARS);
}

title.addEventListener("change", (e) => {
  sortingString(e.target.value, "title");
});

price.addEventListener("change", (e) => {
  sortingNumber(e.target.value, "price");
});

hp.addEventListener("change", (e) => {
  sortingNumber(e.target.value, "hp");
});

brend.addEventListener("change", (e) => {
  sortingString(e.target.value, "brend");
});

Country.addEventListener("change", (e) => {
  sortingString(e.target.value, "Country");
});

function createTableData(data) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((car, index) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${car.title}</td>
            <td>${car.brend}</td>
            <td>${car.price}$</td>
            <td>${car.color}</td>
            <td>${car.hp}</td>
            <td>${car.Country}</td>
        `;
    tbody.appendChild(tableRow);
  });
}
createTableData(CARS);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputtitle.value.trim()) {
    return alert("to'liq kiriting");
  }
  if (!inputbrend.value.trim()) {
    return alert("to'liq kiriting");
  }
  if (!inputcountry.value.trim()) {
    return alert("to'liq kiriting");
  }
  if (!inputhp.value.trim()) {
    return alert("to'liq kiriting");
  }

  if (!inputprice.value.trim()) {
    return alert("to'liq kiriting");
  }

  let newCar = {
    id: "5",
    title: inputtitle.value,
    brend: inputbrend.value,
    price: inputprice.value,
    color: inputcolor.value,
    hp: inputhp.value,
    Country: inputcountry.value,
  };
  CARS.push(newCar);
  createTableData(CARS);

  inputtitle.value = "";
  inputbrend.value = "";
  inputprice.value = "";
  inputcolor.value = "";
  inputhp.value = "";
  inputcountry.value = "";

  alert("Malumot qoshildi");
});
