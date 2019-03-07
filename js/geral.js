$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.sidebarBtn').toggleClass('toggle');
		$('.responsivo').toggleClass('active-responsivo');
	});
});

$(window).on('load', function(){
	if($(window).width() < 760) {
		$('.footer img').attr('src', 'img/logo.png');
	};
});

//função para alterar as imagens
imagem1 = new Image();
imagem1.src = 'img/seta.png';
imagem2 = new Image();
imagem2.src = 'img/seta-alterado.png';

function normal() {
	document.img.src = 'img/seta.png';
}

function mudar() {
	document.img.src = 'img/seta-alterado.png';
}

function normal2() {
	document.img2.src = 'img/seta.png';
}

function mudar2() {
	document.img2.src = 'img/seta-alterado.png';
}