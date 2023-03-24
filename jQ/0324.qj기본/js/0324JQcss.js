//header컬러 변경
$(`#header`).css(`color`,`blue`);
$(`#header`).css({
    'backgroundColor': 'gray',
    'fontSize':`${3}rem`

});

$(`#btn`).on(`click`,function(){
    $(`#header`).toggleClass(`hidden`);
});



$(`#todo input[type= 'checkbox']`).on(`click`,function(){
    console.log($(this).prop('checked'));
    $(`#todo`).toggleClass(`on`);
    /*
    if(event.target.checked){
        $(`#todo`).css("color","gray");
    }
    else{
        $(`#todo`).css("color","");
    }
     */
})


$(`table tr button`).on(`click`,function(){
    $(this).css('color','red').prop('disabled', 'true');
})