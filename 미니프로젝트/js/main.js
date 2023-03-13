// 사용변수
const Game_time = 5;
let score= 0;
let time = Game_time;
let isPlaying = false;
let timeInterval;
let words = [];

const wordInput =document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");


init();

function init(){
    buttonChange('게임로딩중...');
    getWords();
    wordInput.addEventListener('input', checkMatch);
}

function getWords(){
    axios.get('https://random-word-api.herokuapp.com/word?number=50')
    .then(function (response) {
        // handle success
        response.data.forEach((word)=>{
            if(word,length<7){
                words.push(word);
            }
        })
        buttonChange('게임시작');
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}



function run(){
    if(isPlaying){
        return;
    }
    isPlaying = true;
    time = Game_time;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus,50);
    buttonChange("게임중");
}

function checkStatus(){
    if(isPlaying && time ===0){
        buttonChange(`게임시작`);
        clearInterval(checkInterval);
    }
}

function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value=""  //초기화
        if(!isPlaying){
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = Game_time;
        const randomIndex = Math.floor(Math.random()*words.length);
        wordDisplay.innerText = words[randomIndex];
    }
}

//buttonChange('게임시작')



//setInterval(countDown,1000);   // 카운트다운

function countDown(){
    time>0 ? time -- : isPlaying =false;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}


function buttonChange(text){
    button.innerText =text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}