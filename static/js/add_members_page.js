function AddMembers(){

    const queryString = window.location.href.split('/');
    const index = queryString[queryString.length-1];
    const email = $("#email").val()
    $.ajax({
        url: `/add_members/${index}`,
        type:'post',
        data:{email:email},
        success: function(resp)
        {
            if(resp.message==='Success')
                window.location.href = `/menu/${index}`;
            else
                document.getElementById('message').innerText = resp.message;
        }
    });
}