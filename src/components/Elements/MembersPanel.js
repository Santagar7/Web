import {useParams} from 'react-router-dom';
import axios from "axios";
import React from 'react';
import {useState, useEffect} from 'react';
axios.defaults.withCredentials = true;

const url = 'http://localhost:7000/';

function MembersPanel({setActive}){
    const {index} = useParams();
    const [show,setShow] = useState(true);
    const [members,setMembers] = useState([]);
    
    useEffect(()=>{
        axios.get(url+`members/${index}`)
            .then(resp=>{
                setMembers(resp.data.members);
        })
    },[show]);

    function ShowMembersPanel(){
        return (
            <div className="center">
                <h1>All Members</h1>
                <div id="members_list" className="members">
                    {members.map(item=>(<h1 key={item}>{item}</h1>))}
                </div>
                <form>
                    <button type="button" onClick={()=>{setShow(!show)}}>Add member</button>
                </form>
                <form id="cancel">
                    <button type="button" className="exit" onClick={()=>{setActive(false)}}>Cancel</button>
                </form>
            </div>
        )
    }

    function AddMembersPanel(){
        return (
            <div className="center">
            <h1 id="message">Add member</h1>
            <form>
                <input id="email" type="email" required placeholder="Email"/>
                <button type="button" onClick={AddNewMember}>Submit</button>
            </form>
            <form id='cancel'>
                <button type="button" className="exit" onClick={()=>{setShow(!show)}}>Cancel</button>
            </form>
        </div>  
        )
    }

    function AddNewMember(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        let elem = document.getElementById('message');
        axios.post(url+`add_members/${index}`,{
            'email':email
        }).then((resp)=>{
            if(resp.data.message==='Success'){
                setShow(!show);
            }
            else{
                elem.textContent = resp.data.message;
                elem.style.color = 'crimson';
            }
        })
    }

    return (
        <div className='panel'>
            {show?<ShowMembersPanel/>:<AddMembersPanel/>}
        </div>)
}

export default MembersPanel;