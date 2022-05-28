$(document).ready(function(){
    $('.btn-novo').click(function(event){
        event.preventDefault()

       //Limpar todas as informações já existentes em nossa modal
       $('.modal-title').empty()
       $('.modal-body').empty()

       //Incluir nonos textos no cabeçalho da minha janela modal
       $('.modal-title').append('')
    })
})