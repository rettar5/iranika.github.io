var viewer;

window.onload = () => {
  viewer = new Viewer()
  viewer.initShowImage(viewer.page.current)
  viewer.addTitleToSideBar("rightMenu")
  //続きを表示が押されたときの処理
  viewer.elem.more.onclick = () => {
    if (viewer.page.length >= viewer.page.current){
      viewer.showHiddenImage()
      viewer.addHiddenImage(viewer.page.current + 1)
      viewer.page.current += 1  
    }
  }
}


//viewer class
class Viewer{
  //メンバ
  sidevarItem = function (index, item){
    return `<a href="#" class="w3-bar-item w3-button" onclick="viewer.initShowImage(${index})">${index}. ${item.Title}</a>`
  }
  elem = {
    rightMenu : document.getElementById("rightMenu"),
    view : document.getElementById("view"),
    more : document.getElementById("more"),
  }
  page = {
    current : 0,
    length : 0,
  }
  //コンストラクタ
  constructor(){
    this.page.length = pageData.length -1
    this.addTitleToSideBar(this.elem.rightMenu)
  }
  //メソッド
  openRightMenu() {
    this.elem.rightMenu.style.display = "block";
  }
  closeRightMenu() {
    this.elem.rightMenu.style.display = "none";
  }
  
  addTitleToSideBar(){
    var sidevarElement = this.elem.rightMenu
    pageData.forEach((item, index) => {
      let addChild = this.sidevarItem(index, item)
      sidevarElement.innerHTML += addChild
    })
  }
  //ページ処理系
  initShowImage(pageNum){
    this.elem.view.innerHTML = ""
    this.addHiddenImage(pageNum)
    this.showHiddenImage()
    this.addHiddenImage(pageNum + 1)
    this.page.current = pageNum + 1
    this.closeRightMenu()
  }
  showHiddenImage(){
    var elems = document.querySelectorAll(".hidden-image")
    if (elems.length != 0){
      [].forEach.call(elems,(elem) => {
        elem.className = elem.className.replace("hidden-image", "")
      });
    }
  }
  addHiddenImage(pageNum){
    if (pageNum > this.page.length){
      return
    }
    var pg = pageData[pageNum]
    pg.ImagesUrl.forEach(img_url => {
      this.elem.view.innerHTML += `<img class="hidden-image" src="${img_url}">`
    })
  }
}

