function MakeAction(){
    const queryString = window.location.href.split('/');
    const index = queryString[queryString.length-1];
    const amount = $('#amount').val();
    const reason = $('#reason').val();
    $.ajax({
        url:`/actions/${index}`,
        type:'post',
        data:{'amount':amount,
              'reason':reason},
        success: function(resp)
        {
            if(resp.message==='Success')
                window.location.href = `/menu/${index}`;
            else
                document.getElementById('message').innerText = resp.message;
        }
    });
}