const toast = {
    success: (e, msg) => {
        e.preventDefault()
        var h = document.createElement('div')
        // let headArray = [...head]
        // headArray.map(h => {
            h.style.color = '#0d9800';
            h.style.padding = "15px 55px"
            h.style.borderRadius = "15px"
            h.style.backgroundColor = "#88ff7d"
            h.style.borderRadius = "#d1f6ce"
            h.style.borderWidth = "3px"
            h.style.width = "25%"
            h.style.textAlign = "center"
            h.style.marginLeft = "-200px";
            document.body.append(h)
                // h.style.opacity = "0"
                h.style.zIndex = "1000"
                h.style.transition = "transform 2s, opacity 2s"
                h.innerText = msg
                    h.style.transform = "translate(200px, 0px)";
                    h.style.opacity = "1"
        // })
        // headArray.map(h => {
            h.style.transition = "transform 2s, opacity 2s"
            setTimeout(() => {
            h.style.transform = "translate(0px, 0px)";
                h.style.opacity = "0"
            }, 5000)
        // })
    },
}
module.export = toast