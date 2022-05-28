$(document).ready(function(){
    $('.btn-salvar').click(function(e){
        e.preventDefaut()

    let dados = $('#form-tipo').serialize()

    dados += `&operacao&=${$('.btn-salvar').attr('data-operation')}`

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        data: dados,
        url: 'scr/tipo/modelo/salvar-tipo.php',
        sucess: function(dados){
            Swal.fire({
                title: 'SysRifa',
                text: dados.mensagem,
                icon: dados.tipo,
                confirmButtonText: 'OK'
            })

            $('#modal-tipo').modal('hide')
    }
})
})
})