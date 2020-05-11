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
        if (buffer && buffer.length) {
            buffer.push({ value: currentValue });

            const result = evaluate(buffer);

            buffer.push({ value: result });
            buffer.push({ value: opName });

            input.value = "";
        } else {
            buffer.push({ value: currentValue });
            buffer.push({ value: opName });
            input.value = "";
        }
    }
}

for (const opName of ['add', 'subtract', 'multiply', 'devide', 'percent']) {
    document.querySelector(`.op__key[op=${opName}]`).onclick = opCallBack(opName);
}