const appBottomEl = document.querySelector(".app-bottom");
const searchInputEl = document.getElementById("searchInput");

const chatInfo = [
  {
    firstName: "Helen",
    lastName: "Mathis",
    city: "Mauritius, Earth",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    firstName: "John",
    lastName: "Doe",
    city: "New York, USA",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    city: "London, UK",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    firstName: "Michael",
    lastName: "Smith",
    city: "Sydney, Australia",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    firstName: "Emma",
    lastName: "Brown",
    city: "Toronto, Canada",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    firstName: "David",
    lastName: "Lee",
    city: "Seoul, South Korea",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    firstName: "Sophia",
    lastName: "Martinez",
    city: "Mexico City, Mexico",
    imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    firstName: "Daniel",
    lastName: "Garcia",
    city: "Madrid, Spain",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    firstName: "Olivia",
    lastName: "Taylor",
    city: "Paris, France",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    firstName: "William",
    lastName: "Jones",
    city: "Berlin, Germany",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    firstName: "Ava",
    lastName: "Hernandez",
    city: "Rio de Janeiro, Brazil",
    imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    firstName: "James",
    lastName: "Wilson",
    city: "Tokyo, Japan",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    firstName: "Isabella",
    lastName: "Lopez",
    city: "Moscow, Russia",
    imageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    firstName: "Benjamin",
    lastName: "King",
    city: "Cape Town, South Africa",
    imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    firstName: "Mia",
    lastName: "Perez",
    city: "Rome, Italy",
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

function LoadChats() {
  appBottomEl.innerHTML = chatInfo
    .map(
      (info) => `
        <div class="row">
            <img src="${info.imageUrl}" loading="lazy" alt="">
            <div>
                <h1>${info.firstName} <span>${info.lastName}</span></h1>
                <h3>${info.city}</h3>
            </div>
        </div>`
    )
    .join("");
}

function filterData(searchTerm) {
  document
    .querySelectorAll(".row")
    .forEach((row) =>
      row.classList.toggle(
        "hide",
        !row.textContent.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
}

LoadChats();
searchInputEl.addEventListener("input", () => filterData(searchInputEl.value));