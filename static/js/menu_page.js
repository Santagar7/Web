function LoadBudgetData(){

    const queryString = window.location.href.split('/');
    const index = queryString[queryString.length-1];
    $.ajax({
        url: `/menu/${index}`,
        type:'post',
        data:{},
        success: function(resp)
        {
            if(resp.message==='Success'){
                document.getElementById('money').innerText = `Current balance : ${resp.budget.money}`;
                const table = document.getElementById('actions');
                let res = '';
                for(let i=0;i<resp.arr.length;i++){
                    const {amount,reason,made_by,time} = resp.arr[i];
                    const date = new Date(time);
                    const cl = amount>0?'profit':'cost';
                    res+=`<tr>
                            <td>${made_by}</td>
                            <td>${reason}</td>
                            <td>${date.toDateString()}</td>
                            <td class=${cl}>${amount}</td>
                        </tr>`
                }
                table.innerHTML+=res;    
            }
            else{
                alert('Error ! try later');
                window.location.href = '/';
            }
        }
    });
}