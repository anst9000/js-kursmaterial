"use strict"

const closebtn = document.querySelector(".closebtn")

closebtn.addEventListener("click", function () {
  this.parentElement.style.display = "none"
})

const previews = document.getElementsByClassName("preview-image")
const previewsArray = [...previews]

console.log(previewsArray)

function expanderaBild(imgs) {
  let expandImg = document.getElementById("expandedImg")
  let imgText = document.getElementById("imgtext")
  expandImg.src = imgs.src
  imgText.innerHTML = imgs.alt
  expandImg.parentElement.style.display = "block"
}

function main() {
  previewsArray.forEach(function (element) {
    element.addEventListener("click", function () {
      expanderaBild(this)
    })
  })
}

main()
