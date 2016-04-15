/**
 * Created by RajatMishra on 4/13/2016.
 */

$(document).ready(function(){
    $('#login').on('click', function(){
        var email = $('#email').val();
        var pwd = $('#pwd').val();
        if(email !=""|| pwd!="" ) {
            $.ajax({
                type: 'POST',
                url: 'http://requestb.in/18ggv3m1',
                dataType: 'json',
                data: {email: email, password: pwd},
                success: function (response) {
                    console.log(response);
                }
            });
        }
    });

});