const LIMIT_SHOW_PAGE = 10
const VIEW_ELEMENT = "view"
var page = 0
let max_image = [...Array(LIMIT_SHOW_PAGE).keys()]



window.onload = () => {
  //document.getElementById("view").innerHTML = ""
  showImage(page)
  addTitleToSideBar()

  //続きを表示が押されたときの処理
  document.getElementById("more").onclick = () => {
    if (pageData.length >= page){
      showImage(page + 1)
      page += 1  
    }
  }
  
}


//sub funcions
function addTitleToSideBar(){
  var leftSidevarElement = document.getElementById("leftMenu")
  var rightSidevarElement = document.getElementById("rightMenu")
  pageData.forEach((item, index) => {
    let addChild = `<a href="#" class="w3-bar-item w3-button" onclick="initShowImage(${index})">${index}. ${item.Title}</a>`
    leftSidevarElement.innerHTML += addChild
    rightSidevarElement.innerHTML += addChild
  })
}

function initShowImage(pageNum){
  document.getElementById(VIEW_ELEMENT).innerHTML = ""
  showImage(pageNum)
}

function showImage(pageNum){
  var pg = pageData[pageNum]
  pg.ImagesUrl.forEach(img_url => {
    document.getElementById("view").innerHTML += (`<img src="${img_url}">`)    
  });
}



function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}