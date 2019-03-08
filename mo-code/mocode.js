const VIEW = {
  VIEW_ELEMENT : "view",
  MORE : "more",
}
var page = {
  current : 0,
  length : pageData.length -1,
}
window.onload = () => {
  //document.getElementById("view").innerHTML = ""
  initShowImage(page.current)

  viewer.addTitleToSideBar("rightMenu")

  //続きを表示が押されたときの処理
  document.getElementById( VIEW.MORE ).onclick = () => {
    if (page.length >= page.current){
      showHiddenImage()
      addHiddenImage(page.current + 1)
      page.current += 1  
    }
  }
}

//sub funcions

function initShowImage(pageNum){
  document.getElementById(VIEW.VIEW_ELEMENT).innerHTML = ""
  addHiddenImage(pageNum)
  showHiddenImage()
  addHiddenImage(pageNum + 1)
  page.current = pageNum + 1
  viewer.closeRightMenu()
}

function showHiddenImage(){
  var elems = document.querySelectorAll(".hidden-image")
  if (elems.length != 0){
    [].forEach.call(elems,(elem) => {
      elem.className = elem.className.replace("hidden-image", "")
    });
  }
}

function addHiddenImage(pageNum){
  if (pageNum > page.length){
    return
  }
  var pg = pageData[pageNum]
  pg.ImagesUrl.forEach(img_url => {
    document.getElementById(VIEW.VIEW_ELEMENT).innerHTML += `<img class="hidden-image" src="${img_url}">`
  })
}

