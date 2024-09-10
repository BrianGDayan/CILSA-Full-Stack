const estilo1 = document.getElementById('estilo1');
const altoContraste = document.getElementById('altoContraste');

estilo1.addEventListener('click', function() {
    document.body.classList.toggle('estilo1');
    document.body.classList.remove('altoContraste');
});


altoContraste.addEventListener('click', function() {
    document.body.classList.toggle('altoContraste');
    document.body.classList.remove('estilo1');
});