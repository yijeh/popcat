const cat = document.getElementById("cat");
const score = document.getElementById("score");

let sc =0;

function onCatMouseup(){
    cat.src = "./img/normal.png";
}

function onCatMousedown(){
    cat.src = "./img/waaaa.png";
    sc = sc+ 1;
    score.innerText = sc;

    const audio = new Audio("./pop.mp3");
    audio.play();
}

cat.addEventListener("mousedown", onCatMousedown);
cat,addEventListener("mouseup", onCatMouseup);


