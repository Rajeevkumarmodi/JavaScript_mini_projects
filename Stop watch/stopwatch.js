const allTimeBox = document.querySelectorAll(".timeBox .box");
const allBtn = document.querySelectorAll(".actionBtn .btns");
const lapBox = document.querySelector(".lapBox")

let count = 0;
let miliSecond = second = minutes = hours = "00";
let isStart = false;


allBtn[0].onclick = ()=>{
    isStart = true;
    allBtn[2].innerText = "Stop"
    allBtn[0].innerText = "Started"
    setInterval(()=>{
        timeStart()
    },10)
}

/*=========================================================================
=============================Start Time Function==============================
=============================================================================
*/

function timeStart(){
    if(isStart){
        count++;
        count = count < 10 ? "0"+count : count;
        if(count <= 99){
            miliSecond = count;
            allTimeBox[3].innerText = miliSecond;
            if(miliSecond >= 99){
                second ++;
                second = second < 10 ? "0"+second : second
                allTimeBox[2].innerText = second;

                if(second >= 60){
                    second = 0;
                    minutes++;
                    minutes = minutes < 10 ? "0"+minutes : minutes;
                    allTimeBox[1].innerText = minutes;

                    if(minutes >= 60){
                        hours++;
                        minutes = 0;
                        hours = hours < 10 ? "0"+hours : hours;
                        allTimeBox[0].innerText = hours;

                    }
                }
            }
        }
        else{
            count = 0;
        }
    }
}

/*=========================================================================
=============================Lap Time Function==============================
=============================================================================
*/

allBtn[1].onclick = ()=>{
    let p = document.createElement("p");
    p.innerText = `${hours}:${minutes}:${second}:${miliSecond}`
    let pos = lapBox.firstElementChild;
    if(pos == undefined){

        lapBox.append(p)
    }
    else{
        lapBox.insertBefore(p , pos)
    }

    
}

/*=========================================================================
=============================Stop Time Function==============================
=============================================================================
*/
allBtn[2].onclick = ()=>{
    isStart = false;
    allBtn[2].innerText = "Stoped"
    allBtn[0].innerText = "Start"
}


/*=========================================================================
=============================Reset Time Function==============================
=============================================================================
*/

allBtn[3].onclick = ()=>{
    lapBox.innerText = ""
    isStart = false;
    miliSecond = "00"
    second = "00"
    minutes = "00"
    hours = "00"

    for(let box of allTimeBox){
        box.innerText = "00"
    }
}