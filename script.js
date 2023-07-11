function getNumber(){
    n = Math.floor(Math.random() * 100) + 1;
    return n;
}

function sortear(){
    n = getNumber();

    b = document.getElementById("borda")
    t = document.getElementById("texto")
    p = document.getElementById("sorteado")

    b.classList.remove("borda")
    b.classList.add("borda2")
    b.classList.remove("hide")
    t.classList.add("hide")

    p.innerHTML = 5

    setTimeout(wait1, 1000)
    setTimeout(wait2, 2000)
    setTimeout(wait3, 3000)
    setTimeout(wait4, 4000)

    setTimeout(show, 5000)
}

function wait1(){
    p.innerHTML = 4
}

function wait2(){
    p.innerHTML = 3
}

function wait3(){
    p.innerHTML = 2
}

function wait4(){
    p.innerHTML = 1
}

function show(){
    p.innerHTML = n
    t.classList.remove("hide")
    b.classList.remove("borda2")
    b.classList.add("borda")
    playVideo()
}


function playVideo(){
    video = document.getElementById("videoBg")
    video.play()
}

function stopVideo(){
    video = document.getElementById("videoBg")
    video.pause()
    video.currentTime = 0
}