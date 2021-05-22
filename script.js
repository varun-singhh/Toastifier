function toastifier(msg, options = {}) {
  if (typeof window) {
    var container;
    var check = document.getElementById("listOfToasts");
    if (check) {
      container = check;
    } else {
      container = document.createElement("div");
      container.classList.add("toastifier__container");
      container.id = "listOfToasts";
      document.body.append(container);
    }
    var h = document.createElement("div");
    var icon = document.createElement("div");
    var message = document.createElement("div");
    const svg = (val) => {
      if (val === "error") {
        return `<img src="https://raw.githubusercontent.com/varun-singhh/Toastifier/main/images/toastifier_error.png" height="18px" width="18px"/>`;
      }
      if (val === "success") {
        return `<img src="https://raw.githubusercontent.com/varun-singhh/Toastifier/main/images/toastifier_success.png" height="18px" width="18px"/>`;
      }
      if (val === "info") {
        return `<img src="https://raw.githubusercontent.com/varun-singhh/Toastifier/main/images/toastifier_info.png" height="18px" width="18px"/>`;
      }
      if (val === "warn") {
        return `<img src="https://raw.githubusercontent.com/varun-singhh/Toastifier/main/images/toastifier_warn.png" height="18px" width="18px"/>`;
      }
    };
    if (options.showIcon === false) {
      icon.style.display = "none";
    } else {
      icon.innerHTML = `${svg(options.type || "success")}`;
    }

    message.innerText = `${msg}`;
    h.appendChild(icon);
    h.appendChild(message);
    icon.style.marginRight = "5px";
    h.classList.add("toastifier__alert");
    if (options.type) {
      h.classList.add(`toastifier__${options.type}`);
    } else {
      h.classList.add("toastifier__success");
    }
    if (options.shadow) {
      h.classList.add("toastifier__shadow");
    }
    if (options.position) {
      container.classList.add(`toastifier__${options.position}`);
    } else {
      container.classList.add("toastifier__top-center");
    }
    if (options.onClick) {
      h.addEventListener("click", () => {
        options.onClick();
      });
    }
    if (options.styleClass) {
      if (options.styleClass.background) {
        h.style.background = options.styleClass.background;
      }
      if (options.styleClass.text) {
        h.style.color = options.styleClass.text;
      }
      if (options.styleClass.border) {
        h.style.border = options.styleClass.border;
      }
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
    } else if (options.animation === "fade") {
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
    } else if (options.animation === "zoom") {
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
    } else if (options.animation === "flip") {
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
    } else if (options.animation === "bounce") {
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
    } else {
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
    const animation_time = (options.duration / 2 - 500) / 1000 || 1;
    h.style.animation = `animated_entrance ${animation_time}s`;
    const time1 = setTimeout(() => {
      h.style.animation = `animated_exit ${animation_time}s`;
    }, options.duration || 3000);
    const time2 = setTimeout(() => {
      h.remove();
      if (document.getElementsByClassName("toastifier__alert").length === 0) {
        container.remove();
      }
    }, options.duration + 1000 * animation_time || 4000);
    if (options.onhoverPause) {
      h.addEventListener("mouseover", () => {
        clearTimeout(time1);
        clearTimeout(time2);
      });
      if (options.onhoverPause) {
        h.addEventListener("mouseleave", () => {
          h.style.animation = `animated_exit ${animation_time}s`;
          setTimeout(() => {
            h.style.display = "none";
          }, 800);
        });
      }
    }
    container.appendChild(h);
  }
}
module.exports = toastifier;
