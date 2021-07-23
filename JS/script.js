function consultaCep(){
	$('.progresso').show();
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+ cep +"/json/";


	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);
			$('#tituloCep').html('CEP ' + response.cep).css({'font-family': 'Arial', 'color': '#FFCB05', 'font-size': '60px', 'font-weight': '800'});
;
			$('#logradouro').html(response.logradouro);
			$('#complemento').html(response.complemento);
			$('#bairro').html(response.bairro);
			$('#localidade').html(response.localidade);
			$('#uf').html(response.uf);
			$('#ibge').html(response.ibge);
			$('#ddd').html(response.ddd);
			$('.msg').hide()
			$('.progresso').hide();
			$('.cep').show();
			
		}
	})
};


$(function() {
	$(".cep").hide();
	$('.progresso').hide();
});
