function Login(){
    let username_value=$("#name").val();
    let password_value=$("#password").val();
    $.ajax({
        url:'/',
        type:'post',
        data:{'name':username_value,
            'password':password_value},
        success: function(resp)
        {
            if(resp.message==='Success')
                window.location.href = '/budgets';
            else
                document.getElementById('message').innerText = resp.message;
        }
    });
}