function Create_budget(){

    let name_value=$("#name").val();

    $.ajax({
        url:'/create_budget',
        type:'post',
        data:{'name':name_value},
        success: function(resp)
        {
            if(resp.message==='Success')
                window.location.href = '/budgets';
            else
                document.getElementById('message').innerText = resp.message;
        }
    });
}