function toastifier (msg, options = {}) {
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
            return '<svg width="20" height="20" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M382.329 382.493C469.841 295.102 469.898 153.358 382.455 65.897C382.114 65.5537 381.771 65.2117 381.428 64.8708C293.915 -22.0225 152.49 -21.5636 65.5457 65.897C-21.8486 153.309 -21.8486 294.957 65.5457 382.368C152.989 469.828 294.817 469.884 382.329 382.493ZM262.692 224.501L335 151.865L296.309 113L224.001 185.634L151.692 113L113 151.865L185.31 224.501L113 297.135L151.692 336L224.001 263.366L296.309 336L335 297.135L262.692 224.501Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="224" y1="-47.5" x2="224" y2="482.5" gradientUnits="userSpaceOnUse"><stop stop-color="#D94B4B"/><stop offset="1" stop-color="#C80000"/></linearGradient></defs></svg>';
          }
          if (val === "success") {
            return '<svg width="20" height="20" viewBox="0 0 455 455" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M454.195 227.098C454.195 101.676 352.52 0.000926161 227.098 0.000926161C226.667 -0.00030872 226.236 -0.00030872 225.805 0.000926161C100.74 0.357807 -0.355939 102.032 0.000941971 227.098C0.000941971 352.52 101.676 454.195 227.098 454.195C352.52 454.195 454.195 352.52 454.195 227.098ZM191.614 325.807L352.904 164.517L316.131 128.388L191.614 252.905L138.066 200.001L101.291 236.13L191.614 325.807Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="227.098" y1="0" x2="227.098" y2="454.195" gradientUnits="userSpaceOnUse"><stop stop-color="#6CDA38"/><stop offset="1" stop-color="#339D01"/></linearGradient></defs></svg>';
          }
          if (val === "info") {
            return '<svg width="20" height="20" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M448 224C448 347.712 347.712 448 224 448C100.288 448 0 347.712 0 224C0 100.288 100.288 0 224 0C347.712 0 448 100.288 448 224ZM251 348C251 351.314 248.314 354 245 354H203C199.686 354 197 351.314 197 348V182C197 178.686 199.686 176 203 176H245C248.314 176 251 178.686 251 182V348ZM223.5 94C208.312 94 196 106.312 196 121.5C196 136.688 208.312 149 223.5 149C238.688 149 251 136.688 251 121.5C251 106.312 238.688 94 223.5 94Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="224" y1="0" x2="224" y2="448" gradientUnits="userSpaceOnUse"><stop stop-color="#4686E7"/><stop offset="1" stop-color="#00398F"/></linearGradient></defs></svg>';
          }
          if (val === "warn") {
            return '<svg width="20" height="20" viewBox="0 0 494 443" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M199.181 27.4959C220.351 -9.16532 273.268 -9.16529 294.439 27.4959L486.166 359.512C507.34 396.179 480.879 442.016 438.538 442.016H55.082C12.7409 442.016 -13.7207 396.179 7.4531 359.512L199.181 27.4959ZM219.81 113.016C219.81 109.703 222.496 107.016 225.81 107.016H267.81C271.124 107.016 273.81 109.703 273.81 113.016V279.016C273.81 282.33 271.124 285.016 267.81 285.016H225.81C222.496 285.016 219.81 282.33 219.81 279.016V113.016ZM247.31 312.016C232.122 312.016 219.81 324.329 219.81 339.516C219.81 354.704 232.122 367.016 247.31 367.016C262.498 367.016 274.81 354.704 274.81 339.516C274.81 324.329 262.498 312.016 247.31 312.016Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="246.81" y1="0" x2="246.81" y2="442.016" gradientUnits="userSpaceOnUse"><stop stop-color="#FCE300"/><stop offset="1" stop-color="#D09600"/></linearGradient></defs></svg>';
          }
        };
        if (options.showIcon==="false") {
          icon.style.display="none";
        }
        else{
          icon.innerHTML = `${svg(options.type || 'success')}`;
        }
    
        message.innerText = `${msg}`;
        h.appendChild(icon);
        h.appendChild(message);
        icon.style.marginRight = "5px";
        h.classList.add("toastifier__alert");
        if (options.type) {
          h.classList.add(`toastifier__${options.type}`);
        }
        else {
          h.classList.add('toastifier__success');
        }
        if (options.shadow) {
          h.classList.add("toastifier__shadow");
        }
        if (options.position) {
          container.classList.add(`toastifier__${options.position}`);
        }
        else {
          container.classList.add('toastifier__top-center');
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
        }
    
        else if (options.animation === "fade") {
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
    
        else if (options.animation === "zoom") {
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
    
        else if (options.animation === "flip") {
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
    
        else if (options.animation === "bounce") {
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
        else {
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
        const animation_time = ((options.duration / 2 - 500) / 1000) || 1;
        h.style.animation = `animated_entrance ${animation_time}s`;
        const time1 = setTimeout(() => {
          h.style.animation = `animated_exit ${animation_time}s`;
        }, options.duration || 3000);
        const time2 = setTimeout(() => {
          h.remove()
        }, (options.duration + 1000 * animation_time) || 4000);
        if (options.onhoverPause) {
            h.addEventListener('mouseover', () => {
              clearTimeout(time1)
              clearTimeout(time2)
            });
            if (options.onhoverPause) {
              h.addEventListener('mouseleave', () => {
                h.style.animation = `animated_exit ${animation_time}s`;
                setTimeout(() => {
                  h.style.display = 'none';
                }, 800);
              });
            }
          }
        container.appendChild(h);
      }
    };
    module.exports = toastifier;
