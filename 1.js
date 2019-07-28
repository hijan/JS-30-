//DOM
const keys = document.querySelectorAll(".key");

//events
window.addEventListener("keydown", playSound);
keys.forEach(item => {item.addEventListener("transitionend", removeToggle);});


function playSound(e){ //keydown,根據e.keycode選擇selector要選的dataset content
    const audio = document.querySelector(`audio[data-key='${e.keyCode}'`); //字串加入變數的方法 `${}`
    const key = document.querySelector(`.key[data-key='${e.keyCode}'`);
    if(!audio){return};

    audio.play();
    key.classList.add("playing"); //按鍵加上transition動畫效果
    console.log(e);
};

function removeToggle(e){ //e查詢列出所有CSS的transition
    if(e.propertyName!=="transform") return;
    this.classList.remove("playing"); //this會因為contex不同指向不同的物件，在這邊是指向偵測到的事件dom

};


