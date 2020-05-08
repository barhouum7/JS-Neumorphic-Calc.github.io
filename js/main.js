const input = document.querySelector('input');


document.querySelectorAll('.num__key').forEach(
    elmnt => {
        elmnt.onclick = () => input.value = input.value !== '0' ? input.value + elmnt.innerText : elmnt.innerText;
    }
)
