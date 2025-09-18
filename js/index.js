const submitEmail = document.querySelector('form');

submitEmail.addEventListener('submit', (e) => {
    const caixaEmail = document.querySelector('#email');
    const valorEmail = caixaEmail.value;
    const errorMensage = document.querySelector('#error-msg');

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regexEmail.test(valorEmail)) {
        errorMensage.style.display = 'block';
    }else{
        errorMensage.style.display = 'none';
        submitEmail.submit();
    }
    e.preventDefault();
});




