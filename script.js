let runningTotal = 0;
let buffer = "0";
let previosOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value)
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previosOperator ===null){
                return
            }
            flushOperation(parseInt(buffer));
            previosOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
            case '+':
            case '-':
            case 'x':
            case '/':

            
        }
}