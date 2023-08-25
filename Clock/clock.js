
setInterval(()=>{
    let hour = document.getElementById('hour')
    let minutes = document.getElementById('minutes')
    let second = document.getElementById('second')
   
    let d = new Date()
    let hTime = d.getHours()
    let mTime = d.getMinutes()
    let sTime = d.getSeconds()

    let hRotations = 30*hTime + mTime/2;
    let mRotations = 6*mTime;
    let sRotations = 6*sTime;

    hour.style.transform = `rotate( ${hRotations}deg)`
    minutes.style.transform = `rotate( ${mRotations}deg)`
    second.style.transform = `rotate( ${sRotations}deg)`
    
},1000)