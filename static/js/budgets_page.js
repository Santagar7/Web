function GetMyBudgets(){
    $.ajax({
        url:'/my_budgets',
        type:'get',
        success: function(resp)
        {
            let budgets = document.getElementById('budgets');
            let res = '';
            for(let i=0;i<resp.data.length;i++)
                res+=`<a href="/menu/${resp.data[i].index}">${resp.data[i].name}</a>`;
            budgets.innerHTML = res;
        }
    });
}