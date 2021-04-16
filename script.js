const toast = (options, msg) => {
  if (typeof window) {
    var container;
    var check = document.getElementById("listOfToasts");
    if (check) {
      container = check;
    } else {
      container = document.createElement("div");
      container.classList.add("container");
      container.id = "listOfToasts";
      document.body.append(container);
    }
    var h = document.createElement("div");
    h.innerText = msg;

    h.classList.add("alert");
    if (options.type === "success") {
      h.classList.add("success");
      var icon = document.createElement("img");
      icon.setAttribute("src", "tick.png");
      icon.style.height = "25px";
      icon.style.width = "25px";
      h.appendChild(icon);
      h.style.display = "flex";
      h.style.justifyContent = "space-around";
    } else if (options.type === "warn") {
      h.classList.add("warn");
    } else if (options.type === "error") {
      h.classList.add("error");
      var icon = document.createElement("img");
      icon.setAttribute("src", "close.png");
      icon.style.height = "25px";
      icon.style.width = "25px";
      h.appendChild(icon);
      h.style.display = "flex";
      h.style.justifyContent = "space-around";
    }
    if (options.shadow) {
      h.classList.add("shadow");
    }

    let styles, styleExit;
    if (options.animation === "slide") {
      styles = `
        0% {
            -webkit-transform: translateX(-1000px) scale(0.7);
            transform: translateX(-1000px) scale(0.7);
            opacity: 0.7;
          }
          80% {
            -webkit-transform: translateX(0) scale(0.7);
            transform: translateX(0) scale(0.7);
            opacity: 0.7;
          }
          to {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }
        `;
      styleExit = `
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }
          20% {
            -webkit-transform: translateX(0) scale(0.7);
            transform: translateX(0) scale(0.7);
            opacity: 0.7;
          }
          to {
            -webkit-transform: translateX(-2000px) scale(0.7);
            transform: translateX(-2000px) scale(0.7);
            opacity: 0.7;
          }
          `;
    }

    if (options.animation === "fade") {
      styles = `
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        `;
      styleExit = `
        0% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
          `;
    }

    if (options.animation === "zoom") {
      styles = `
        0% {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
            opacity: 1;
        }
        `;
      styleExit = `
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
      to {
        opacity: 0;
      }
          `;
    }

    if (options.animation === "flip") {
      styles = `
      0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }
      40% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      60% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg);
        opacity: 1;
      }
      80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg);
      }
      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
        `;
      styleExit = `
      0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
      30% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        opacity: 1;
      }
      to {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
          `;
    }

    if (options.animation === "bounce") {
      styles = `
      %,
      20%,
      40%,
      60%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }
      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
      }
      to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
        `;
      styleExit = `
      20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }
      50%,
      55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
      to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
          `;
    }

    let styleSheet = null;
    // Creating a style element
    // To add the keyframes
    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      document.head.appendChild(styleSheet);

      styleSheet.sheet.insertRule(
        `@keyframes animated_entrance {${styles}}`,
        styleSheet.length
      );
      styleSheet.sheet.insertRule(
        `@keyframes animated_exit {${styleExit}}`,
        styleSheet.length
      );
    }
    const animation_time = (options.duration / 2 - 500) / 1000;
    h.style.animation = `animated_entrance ${animation_time}s`;
    setTimeout(() => {
      h.style.animation = `animated_exit ${animation_time}s`;
    }, options.duration);
    setTimeout(() => {
      h.style.display = "none";
    }, options.duration + 1000 * animation_time);
    container.appendChild(h);
  }
};
module.export = toast;
