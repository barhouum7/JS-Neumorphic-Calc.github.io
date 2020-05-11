const input = document.querySelector('input');


document.querySelectorAll('.num__key').forEach(
    elmnt => {
        elmnt.onclick = () => input.value = input.value !== '0' ? input.value + elmnt.innerText : elmnt.innerText;
    }
)

const buffer = [];

const opCallBack = opName => () => {
    let currentValue = parseFloat(input.value);
    if (opName === "percent") {
        currentValue *= 0.01;
        input.value = currentValue;
    } else {

    }
}

for (const opName of ['add', 'subtract', 'multiply', 'devide', 'percent']) {
    document.querySelector(`.op__key[op=${opName}]`).onclick = opCallBack(opName);
}