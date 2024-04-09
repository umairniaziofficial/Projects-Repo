const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funName = Object.keys(type)[0];
      generatedPassword += randomFun[funName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// ===========================
//           Watermark
// ===========================
const DOT_AMOUNT = 40;

const createSVG = (width, height, className, childType, childAttributes) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.classList.add(className);

  const child = document.createElementNS(
    "http://www.w3.org/2000/svg",
    childType
  );

  svg.setAttributeNS(
    "http://www.w3.org/2000/svg",
    "viewBox",
    `0 0 ${width} ${height}`
  );

  for (const attr in childAttributes) {
    child.setAttribute(attr, childAttributes[attr]);
  }

  svg.appendChild(child);

  return { svg, child };
};

document.querySelectorAll(".generate-button").forEach((button) => {
  const width = button.offsetWidth;
  const height = button.offsetHeight;

  const style = getComputedStyle(button);

  const { svg, child: circle } = createSVG(width, height, "dots", "circle", {
    cx: "0",
    cy: "0",
    r: "0"
  });

  const strokeGroup = document.createElement("div");
  strokeGroup.classList.add("stroke");

  const { svg: stroke } = createSVG(width, height, "stroke-line", "rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    rx: parseInt(style.borderRadius, 10),
    ry: parseInt(style.borderRadius, 10),
    pathLength: "10"
  });

  button.appendChild(svg);

  strokeGroup.appendChild(stroke);
  strokeGroup.appendChild(stroke.cloneNode(true));

  button.appendChild(strokeGroup);

  const timeline = gsap.timeline({ paused: true });

  for (var i = 0; i < DOT_AMOUNT; i++) {
    var p = circle.cloneNode(true);
    svg.appendChild(p);

    gsap.set(p, {
      attr: {
        cx: gsap.utils.random(width * 0.25, width * 0.75),
        cy: gsap.utils.random(height * 0.5, height * 0.5),
        r: 0
      }
    });

    var durationRandom = gsap.utils.random(10, 12);

    var tl = gsap.timeline();

    tl.to(
      p,
      {
        duration: durationRandom,
        rotation: i % 2 === 0 ? 350 : -420,
        attr: {
          r: gsap.utils.random(0.75, 1.5),
          cy: -width * gsap.utils.random(1.25, 1.75)
        },
        physics2D: {
          angle: -90,
          gravity: gsap.utils.random(-4, -8),
          velocity: gsap.utils.random(10, 25)
        }
      },
      "-=" + durationRandom / 2
    ).to(
      p,
      {
        duration: durationRandom / 3,
        attr: {
          r: 0
        }
      },
      "-=" + durationRandom / 4
    );

    timeline.add(tl, i / 3);
  }

  svg.removeChild(circle);

  const finalTimeline = gsap.to(timeline, {
    duration: 10,
    repeat: -1,
    time: timeline.duration(),
    paused: true
  });

  const stars = gsap.to(button, {
    repeat: -1,
    repeatDelay: 0.75,
    paused: true,
    keyframes: [
      {
        "--generate-button-star-2-scale": ".5",
        "--generate-button-star-2-opacity": ".25",
        "--generate-button-star-3-scale": "1.25",
        "--generate-button-star-3-opacity": "1",
        duration: 0.3
      },
      {
        "--generate-button-star-1-scale": "1.5",
        "--generate-button-star-1-opacity": ".5",
        "--generate-button-star-2-scale": ".5",
        "--generate-button-star-3-scale": "1",
        "--generate-button-star-3-opacity": ".5",
        duration: 0.3
      },
      {
        "--generate-button-star-1-scale": "1",
        "--generate-button-star-1-opacity": ".25",
        "--generate-button-star-2-scale": "1.15",
        "--generate-button-star-2-opacity": "1",
        duration: 0.3
      },
      {
        "--generate-button-star-2-scale": "1",
        duration: 0.35
      }
    ]
  });

  button.addEventListener("pointerenter", () => {
    gsap.to(button, {
      "--generate-button-dots-opacity": "1",
      duration: 0.5,
      onStart: () => {
        finalTimeline.restart().play();
        setTimeout(() => stars.restart().play(), 500);
      }
    });
  });

  button.addEventListener("pointerleave", () => {
    gsap.to(button, {
      "--generate-button-dots-opacity": "0",
      "--generate-button-star-1-opacity": ".25",
      "--generate-button-star-1-scale": "1",
      "--generate-button-star-2-opacity": "1",
      "--generate-button-star-2-scale": "1",
      "--generate-button-star-3-opacity": ".5",
      "--generate-button-star-3-scale": "1",
      duration: 0.15,
      onComplete: () => {
        finalTimeline.pause();
        stars.pause();
      }
    });
  });
});
