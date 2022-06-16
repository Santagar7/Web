function Register(){

    let name_value=$("#name").val();
    let password_value=$("#password").val();
    let email_value=$("#email").val();
    let repeat_password_value=$("#repeat_password").val();   
    let firstname_value=$("#firstname").val();
    let lastname_value=$("#lastname").val(); 
    if (repeat_password_value!==password_value){
        document.getElementById('message').innerText = "Passwords should match";
    }
    else{
        $.ajax({
        url:'/register',
        type:'post',
        data:{'name':name_value,
              'password':password_value,
              'email':email_value,
              'firstname':firstname_value,
              'lastname':lastname_value},
        success: function(resp)
        {
            console.log(resp)
            if(resp.message==='Success')
                window.location.href = '/';
            else
                document.getElementById('message').innerText = resp.message;
        }
    });
    }
    
}