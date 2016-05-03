function printReceipt(inputs){
    var loadAllLcd = lcdDigts();
    var numbers=splitNumbers(inputs);
    var lcdDigits=matchLcdDigts(loadAllLcd,numbers);
    toRecept(lcdDigits);
}
function splitNumbers(inputs) {
    inputs+='';
    var numbers=inputs.split('');
    for(var i=0;i<numbers.length;i++){
        numbers[i]=parseInt(numbers[i]);
    }
    return numbers;
}
function matchLcdDigts(loadAllLcd,numbers) {
    var lcdDigts=[];
        for(var i=0;i<numbers.length;i++){
            lcdDigts.push(loadAllLcd[numbers[i]]);
        }
    return lcdDigts;
}
function toRecept(lcdDigits) {
    var output='';
    for(var i=0;i<3;i++){
        for(var j=0;j<lcdDigits.length;j++) {
            output += lcdDigits[j][i] + ' ';
        }
        output+='\n';
    }
    console.log(output);
}