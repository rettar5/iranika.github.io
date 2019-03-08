const elem = {
  view : document.getElementById("view"),
  more : document.getElementById("more"),
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
  elem.more.onclick = ()=>{
    showMore()
  }

  var triggerMargin = 600
  //sub funcions
  window.addEventListener("scroll", function(){
    //console.log(elem.more.getBoundingClientRect().top)
    if (triggerMargin > elem.more.getBoundingClientRect().top){
      showMore()
    }
  })

}


function showMore(){
  if (page.length >= page.current){
    showHiddenImage()
    addHiddenImage(page.current + 1)
    page.current += 1  
  }
}

function initShowImage(pageNum){
  elem.view.innerHTML = ""
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
    elem.view.innerHTML += `<img class="hidden-image" src="${img_url}">`
  })
}

