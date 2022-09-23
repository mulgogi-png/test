function myFunction(){
    var abc = [rand(1,5), rand(1,5), rand(1,5), rand(1,5), rand(1,5)]
    answer.push(abc);
    counter++
    document.getElementById("1").src="images/marked"+abc[0]+".png";
    document.getElementById("2").src="images/marked"+abc[1]+".png";
    document.getElementById("3").src="images/marked"+abc[2]+".png";
    document.getElementById("4").src="images/marked"+abc[3]+".png";
    document.getElementById("5").src="images/marked"+abc[4]+".png";
}

function myAuto(){
    setTimeout(() => myPlay(),3000)
    document.getElementById("auto").disabled=true;
}

function myPlay(){
    myFunction()
    playFunction = setInterval(myFunction, document.getElementById("a").value*100);
    document.getElementById("auto").style.display="none";
    document.getElementById("auto").disabled=false;
    document.getElementById("stop").style.display="inline";
}

function myStop(){
    
    clearInterval(playFunction);
    document.getElementById("stop").style.display="none";
    document.getElementById("auto").style.display="inline";
}



function myAnswer(){
    if(isTrue){
         
    answerHtml = ""
    for (let i = 0; i < counter; i++){
        answerHtml = answerHtml + answer[i] +"<br>";
    }
    document.getElementById("answer").innerHTML = answerHtml;
    document.getElementById("answer").style.display = "inline";
    document.getElementById("btnAnswer").innerText = "정답 숨기기";
    isTrue = false
    }
    else{
        document.getElementById("answer").innerHTML = "";
        document.getElementById("answer").style.display = "none";
        document.getElementById("btnAnswer").innerText = "정답 보기";
        isTrue = true
    }



}

function myDelete(){
    answer = []
    counter = 0
    answerHtml = ""
    document.getElementById("1").src="images/marked1.png";
    document.getElementById("2").src="images/marked2.png";
    document.getElementById("3").src="images/marked3.png";
    document.getElementById("4").src="images/marked4.png";
    document.getElementById("5").src="images/marked5.png";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").style.display = "none";
}


function myChange(){
    document.getElementById("time").innerText = document.getElementById("a").value/10;
}


answer = []
counter = 0
answerText = ""
isTrue = true



function rand(min, max) {
    return Math.floor(Math.random() * (max+1 - min)) + min;
  }

rand(1,5)

//hello