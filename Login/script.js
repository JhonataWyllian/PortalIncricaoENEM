const btn = document.querySelector('.btn-valid');

btn.addEventListener('click', () => {

    const email = document.querySelector('.email').value;

    const senha = document.querySelector('.senha').value;

    if (email === "" || senha === "") {
        alert("Insira suas Informações");
    } 

    abrirPasta();
    
});