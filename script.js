let numero = 0;
const imagem = document.querySelectorAll('.slide');


function ImagensAparecendo() {
    imagem.forEach((imagem, index) => {
        imagem.style.display = 'none';
    });

    numero++;
    if (numero > imagem.length) {
        numero = 1;
    }

    imagem[numero - 1].style.display = 'block';
    setTimeout(ImagensAparecendo, 3000);
}

ImagensAparecendo();