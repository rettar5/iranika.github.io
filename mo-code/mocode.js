const LIMIT_SHOW_PAGE = 10
var page = 0
let max_image = [...Array(LIMIT_SHOW_PAGE).keys()]

function morePage(){
  showImage()

}

function showImage(){
  max_image.forEach(count => {
    document.getElementById("view").innerHTML += ('<img src="' + imageList[page + count] + '">')
  })
  page += LIMIT_SHOW_PAGE
}
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
window.onload = () => {
  $("#view").html('')
  showImage()
}

