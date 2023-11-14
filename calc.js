const display = document.querySelector('#display');
const btn = Array.from(document.querySelectorAll('.button'));

btn.map(butt => {
    butt.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'CL':
                display.innerText = ''; break;
            case 'D':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                } break;
            case '%':
                if(display.innerText) {
                    display.innerText = display.innerText/100;
                } break;
            case '=':
                if(display.innerText) {
                    try {
                        display.innerText = eval(display.innerText);
                    }
                    catch {
                        display.innerText = 'Error! Invalid expression.';
                    }
                } break;
            default: 
            display.innerText += e.target.innerText;
        }
    });
});
