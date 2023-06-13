import { useAppSelector } from 'app/store';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {

    const {id} = useParams()
    const select = useAppSelector((state)=>state.employees).filter((st)=>st.id===id)
    return (

        <>
            {select.length?select.map((it)=>{
                return <div >{it.name}</div>
            }): <div>Not Found</div>}
        </>
       
    );
};



export default Profile;