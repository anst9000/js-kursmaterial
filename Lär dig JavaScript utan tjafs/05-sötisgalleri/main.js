"use strict"

const closebtn = document.querySelector(".closebtn")

closebtn.addEventListener("click", function () {
  this.parentElement.style.display = "none"
})

const previews = document.getElementsByClassName("preview-image")
const previewsArray = [...previews]

console.log(previewsArray)
previewsArray.forEach(function (element) {
  element.addEventListener("click", function () {
    myFunction(this)
  })
})

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg")
  var imgText = document.getElementById("imgtext")
  expandImg.src = imgs.src
  imgText.innerHTML = imgs.alt
  expandImg.parentElement.style.display = "block"
}
