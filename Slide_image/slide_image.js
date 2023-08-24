let slides = document.getElementsByClassName('slide')

let counter = 0
slides[0].style.display = 'block'

function slidesShow(num){

  
  if(counter == 0 && num == -1){
    counter = slides.length
    
  }
  if(counter == slides.length-1 && num == 1){
    counter = -1
    slides[0].style.display = 'block'
  }
  for(let i of slides){
    i.style.display = 'none'
  }
  counter = counter + num;

  slides[counter].style.display = 'block'

}

function slideImage(){

  setInterval(() => {
    
   slidesShow(1)

  }, 2000);
}
