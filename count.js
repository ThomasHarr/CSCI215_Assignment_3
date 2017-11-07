
inputStatement = document.getElementById('input');
inputStatement.addEventListener('keypress', inputText);
var numChar = 0;

function inputText(){
    numChar += 1;
    calculations(numChar);
    inputStatement.keypress = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 8) {
            numChar -= 1;
            calculations(numChar);
        }
    }
}


function calculations(numChar){
    var charLeft = 50 - numChar;

    document.getElementById('output').innerHTML= "Number of characters remaining:" + charLeft;
}

