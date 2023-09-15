const smallImg = document.querySelectorAll('.smallImg')
const mainImg = document.querySelectorAll('#mainImg')

smallImg.forEach((img)=>{
    img.addEventListener('click',()=>{
        let src = img.src
        mainImg[0].src = src
    })
})