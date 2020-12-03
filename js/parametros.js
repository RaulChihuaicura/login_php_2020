$('#formlogin').submit(function(e){
    e.preventDefault();
    //Traemos las variables del formulario formlogin al js y se le entrega una variable local, recordar que el nombre parametros debe coincidir con el id del input.
    //trim elimina los espacios que traiga el dato ingresado
    var usuario     = $.trim($("#usuario").val());
    var password    = $.trim($("#password").val());

    //Probar que se este leyendo el valor en login.php y que lo resiva y muestre el js.
    alert(usuario);
});