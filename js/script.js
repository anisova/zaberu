//функция определения поддержки WebP
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
// Функция работы модального окна
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtn = document.querySelectorAll(openButton);
  const modal = document.querySelector(modalWindow);  
  openBtn.forEach(element => {       
    const closeBtn = modal.querySelector(closeButton);    
    element.addEventListener("click", (e) => {
      console.log(element);      
      let paddingoffset=window.innerWidth- document.body.offsetWidth + 'px'; 
      e.preventDefault();
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = paddingoffset;      
    });
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    });    
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    });    
  });    
}
toggleModal(".modal", ".btn", ".btn-close");


