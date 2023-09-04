
const allQustions = [
    {
        qustion :'Q1.The latest HTML standard is',
        a: 'HTML 4.0',
        b: 'HTML 5.0',
        c: 'XML',
        d: 'SGML',
        ans: 'b'
    },
    {
        qustion :'Q2.Identify the incorrect HTML tag among the following',
        a: '<input>',
        b: '<select>',
        c: '<list>',
        d: '<textarea>',
        ans: 'c'
    },
    {
        qustion :'Q3.Identify the empty or void element in HTML.',
        a: '<sup>',
        b: '<br>',
        c: '<p>',
        d: '<h2>',
        ans: 'b'
    },
    {
        qustion :'Q4.When is the body tag used?',
        a: 'after form tag',
        b: 'after titel tag',
        c: 'after em tag',
        d: 'after head tag',
        ans: 'd'
    },
    {
        qustion :'Q5.On which model is www based upon',
        a: 'client-server',
        b: 'local server',
        c: '3 tier',
        d: 'none of this',
        ans: 'a'
    },
    {
        qustion :'Q6.The latest HTML standard is',
        a: 'HTML 4.0',
        b: 'HTML 5.0',
        c: 'XML',
        d: 'SGML',
        ans: 'b'
    },
    {
        qustion :'Q7.How many sizes of headers are available in HTML by default?',
        a: '5',
        b: '4',
        c: '6',
        d: '1',
        ans: 'c'
    },
     {
        qustion :'Q8.Which attribute is used to provide a unique name to an HTML element?',
        a: 'id',
        b: 'class',
        c: 'type',
        d: 'none',
        ans: 'a'
    },
    {
        qustion :'Q9.Which of the following properties is used to change the font of text?',
        a: 'font-family',
        b: 'font-size',
        c: 'text-align',
        d: 'none',
        ans: 'a'
    },
    {
        qustion :'Q10.The full form of DOM is?',
        a: 'Document-oriented memory',
        b: 'Document object model',
        c: 'Document object memory',
        d: 'none',
        ans: 'b'
    }

]

const length = allQustions.length;
const result = document.getElementById('result')
const score = document.getElementById('score')
const playAgainBtn = document.getElementById('playAgain')
let qustion = document.getElementById('qustion')
const submitBtn = document.getElementById('submit')
let index = 0;
let right = 0;

// Qustion Set 


const opt1 = document.getElementById('options1')
const opt2 = document.getElementById('options2')
const opt3 = document.getElementById('options3')
const opt4 = document.getElementById('options4')

function setQustion(){

    qustion.innerText = allQustions[index].qustion
    opt1.innerText = allQustions[index].a
    opt2.innerText = allQustions[index].b
    opt3.innerText = allQustions[index].c
    opt4.innerText = allQustions[index].d
    

}
function answer(){

    let option = document.querySelectorAll('.opt')
    for(let i of option){
        if(i.checked){
            return i.value
        }
    }

}


submitBtn.addEventListener('click',()=>{
   const ans = answer()

   if(ans === allQustions[index].ans){
    right++
   }

   index++
   if(index < length){
       setQustion()
       console.log(index , length);
   }else{
    result.style.display = 'block'
    score.innerText = `Your Score Is :- ${right} / ${length}`
   }

  
   const option = document.querySelectorAll('.opt')
   for(let i of option){
    i.checked = false
   }

})

playAgainBtn.addEventListener('click',() =>{
    index = 0;
    right = 0;
    result.style.display = 'none'
    setQustion()
})

setQustion()