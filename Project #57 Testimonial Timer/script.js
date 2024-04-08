const barEl = document.querySelector(".bar");
const elements = {
  title: document.getElementById("title"),
  cardText: document.getElementById("card-text"),
  authorImage: document.getElementById("author-image"),
  authorName: document.getElementById("author-name"),
  authorPosition: document.getElementById("author-position"),
};

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, ABC Company",
    text: "I've been using this product for a month now and it has exceeded my expectations. Highly recommended!",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Jane Smith",
    position: "Marketing Manager",
    text: "This product has truly changed my life. I'm grateful for discovering it!",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Mike Johnson",
    position: "IT Consultant",
    text: "The customer service provided by this company is outstanding. I'm impressed with their responsiveness and professionalism.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Emily Brown",
    position: "Sales Representative",
    text: "Using this product has significantly improved our sales performance. It's a game-changer!",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "David Lee",
    position: "Product Manager",
    text: "As a product manager, I've seen many tools, but this one stands out. It simplifies our workflow and boosts productivity.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Sarah Wilson",
    position: "Customer Support Specialist",
    text: "I'm proud to be part of a team that delivers such exceptional support to our customers. It's a pleasure to work with this product.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Michael Chen",
    position: "Software Engineer",
    text: "From a developer's perspective, this product's API is well-documented and easy to integrate. Kudos to the team!",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Laura Adams",
    position: "Operations Manager",
    text: "Our operations have become more streamlined since implementing this product. It's been a great asset to our team.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Chris Roberts",
    position: "Finance Analyst",
    text: "This product has helped us analyze financial data more efficiently, enabling better decision-making. Highly recommended for finance teams!",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "Michelle Garcia",
    position: "Human Resources Director",
    text: "Our HR processes have been simplified and made more transparent with this product. It's been a valuable addition to our toolkit.",
    photo: "https://i.pravatar.cc/300",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  elements.title.innerText = "Testimonial";
  elements.cardText.innerText = text;
  elements.authorName.innerText = name;
  elements.authorPosition.innerText = position;
  elements.authorImage.src = photo;
  idx = (idx + 1) % testimonials.length;
}

function animateBar() {
  let initialWidth = 0;
  function animate() {
    if (initialWidth < 100) {
      initialWidth += 0.17;
      barEl.style.width = initialWidth + "%";
      requestAnimationFrame(animate);
    }
  }
  animate();
}

window.onload = () => {
  updateTestimonial();
  animateBar();
  setInterval(() => {
    updateTestimonial();
    animateBar();
  }, 10000);
};
