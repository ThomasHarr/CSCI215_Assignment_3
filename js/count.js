
inputStatement = document.getElementById('input');
inputStatement.addEventListener('keyup', inputText);

function inputText(){
    calculations(inputStatement.value.length);
    console.log(inputStatement.value.length);

}


function calculations(numChar){
    var charLeft = 50 - numChar;

    if(charLeft<0){
        document.getElementById('output').style.color= 'red' ;
    }else{
        document.getElementById('output').style.color= 'black' ;
    }

    document.getElementById('output').innerHTML= "Number of characters remaining:" + charLeft;
}

