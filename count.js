
inputStatement = document.getElementById('input');
inputStatement.addEventListener('keyup', inputText);

function inputText(){
    calculations(inputStatement.value.length);
    console.log(inputStatement.value.length);

}


function calculations(numChar){
    var charLeft = 50 - numChar;

    document.getElementById('output').innerHTML= "Number of characters remaining:" + charLeft;
}

