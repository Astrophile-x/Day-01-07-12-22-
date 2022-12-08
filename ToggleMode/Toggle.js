let inner=$('#inner');
let body=$('body');
inner.on('mouseenter',function(){
    body.css({
        backgroundColor:'black',
    });
    inner.css({
        backgroundColor: 'white',
        marginLeft:'90px',
    });
    $('#outer').css('borderColor', 'white');
    $('h1').css('color','white');
});
inner.on('mouseleave',function(){
    body.css({
        backgroundColor:'white',
    });
    inner.css({
        backgroundColor: 'black',
        marginLeft:'2px',
    });
    $('#outer').css('borderColor', 'black');
    $('h1').css('color','black');
});