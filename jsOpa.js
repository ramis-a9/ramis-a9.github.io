let btn = document.querySelector('.btn'),
    loader = document.querySelector('.loader_box'),
    text = document.querySelector('.text');
console.log(btn);
console.log(loader);
console.log(text);
loader.style.display = 'none';
text.style.display = 'none'

btn.addEventListener('click', function () {
    loader.style.display = 'block';
    btn.textContent = 'Ждите';
    setTimeout(function () {
        loader.style.display = 'none';
        btn.style.display = 'none';
        text.style.display = 'block';
    }, 15000);

}); // btn клик