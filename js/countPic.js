inputStatement = document.getElementById('input');
inputStatement.addEventListener('keyup', inputText);
var pictures = {
    '-': ' ',
    '0': "imgs/00.png ",
    '1': "imgs/01.png ",
    '2': "imgs/02.png ",
    '3': "imgs/03.png ",
    '4': "imgs/04.png ",
    '5': "imgs/05.png ",
    '6': "imgs/06.png ",
    '7': "imgs/07.png ",
    '8': "imgs/08.png ",
    '9': "imgs/09.png "
};


function inputText(){
    calculations(inputStatement.value.length);
    console.log(inputStatement.value.length);

}


function calculations(numChar){
    var charLeft = 50 - numChar;
    var srcImg =[];

    if(charLeft<0){
        var negative = charLeft.toString().split("");
        console.log(negative);
        for(i=0;i<negative.length;i++){
            console.log(negative[i]);
            srcImg += pictures[negative[i]];
        }
    }

    var numSplit = charLeft.toString().split("");
    console.log(numSplit);

    for(i=0;i<numSplit.length;i++){
        console.log(numSplit[i]);
        srcImg += pictures[numSplit[i]];
    }
    var src = srcImg.split(' ');
    console.log(src);

    if (charLeft<0){
        document.getElementById('output').innerHTML= "Number of characters remaining:<br>" + '---' + "<img src=" + src[1] + ">" + "<img src=" + src[2] + ">";
    }

    document.getElementById('output').innerHTML= "Number of characters remaining:<br>" + "<img src=" + src[0] + ">" + "<img src=" + src[1] + ">";
}