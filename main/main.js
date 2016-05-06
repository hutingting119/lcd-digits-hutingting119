function printReceipt(inputs){
    var loadAllLcd = LCD_Digits();
    var numbers=splitNumbers(inputs);
    var lcdDigits=matchLcdDigits(loadAllLcd,numbers);
    toPrint(lcdDigits);
}

function splitNumbers(inputs) {
    inputs+='';
    var numbers=inputs.split('');

    for(var i=0;i<numbers.length;i++){
        numbers[i]=parseInt(numbers[i]);
    }

    return numbers;
}

function matchLcdDigits(loadAllLcd,numbers) {
    var lcdDigits=[];

        for(var i=0;i<numbers.length;i++){
            lcdDigits.push(loadAllLcd[numbers[i]]);
        }

    return lcdDigits;
}

function toPrint(lcdDigits) {
    var output='';

    for(var i=0;i<3;i++){

        for(var j=0;j<lcdDigits.length;j++) {
            output += lcdDigits[j][i] + ' ';
        }
        output+='\n';
    }

    console.log(output);
}