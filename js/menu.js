$(document).ready(function(){
    $('.nav-link').click(function(event){
        event.preventDefault()
        
        let url = $(this).attr('herf')

        $('#content').empty()
        $('#content').load(url)

    })
})