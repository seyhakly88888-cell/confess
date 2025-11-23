const Runbtn =()=>{
    const x = Math.random()/7*window.innerWidth
    const y = Math.random()/7*window.innerHeight
    let btn = document.getElementById("btn-no")
    btn.style.position='relative'
    btn.style.top = y + "px"
    btn.style.left = x +"px"
}