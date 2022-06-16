function LoadMembers(){

    const queryString = window.location.href.split('/');
    const index = queryString[queryString.length-1];
    $.ajax({
        url: `/members/${index}`,
        type:'post',
        data:{},
        success: function(resp)
        {
            if(resp.message=='Success'){
                let res = ''
                for(let i=0;i<resp.members.length;i++)
                    res+=`<h1>${resp.members[i]}</h1>`;
                document.getElementById('members_list').innerHTML = res;
            }
        }
    });
}