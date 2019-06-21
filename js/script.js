function getHistory(){
    return document.getElementById('history').innerText;
}

function getOutput(){
    return document.getElementById('output').innerText;
}

function printHistory(num){
    document.getElementById('history').innerText = num;
}

function printOutput(num){
    if(num == ""){    
        document.getElementById('output').innerText = num;
    } 
    else {
        document.getElementById('output').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function revereNumberFormat(num){
    return Number(num.toString().replace(/,/g,''));
}


let opers  = document.getElementsByClassName("oper");
for (let i =0; i < opers.length; i++){
    opers[i].addEventListener("click", function(){
        if (this.id == "clear"){
            printHistory('');
            printOutput('');
        }
        else if(this.id == "backspace"){
            let output = revereNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory();
            if (output !="" && history == ""){
                if (isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if (output !="" || history == ""){
                output = revereNumberFormat(output);
                history += output;
                if (this.id == "equal"){
                    let result = eval(history);
                    printOutput(result); 
                    printHistory('');
                }
                else { 
                    history += this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
        }
    });
}

let numbers = document.getElementsByClassName("num");
for (let i =0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        let output = revereNumberFormat(getOutput());
        if(output != NaN){
            output += this.id;
            printOutput(output);
        }
    })
}
