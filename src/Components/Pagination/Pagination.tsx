import React, { FC } from 'react';

type TArg = {
    limit:number,
    total:number , 
    paginate:(pageNumber:number)=>void
}

const Pagination:FC<TArg> = ({limit , total , paginate }) => {

    const pageNumbers = []

    for(let i = 1 ; i<Math.ceil(total/limit) ;i++){
        pageNumbers.push(i)
    }
    return (
        <div className='pagination'>
            {pageNumbers.map((number)=><button key={number} onClick={()=>{
                paginate(number)
            }}>{number}</button>)}
        </div>
    );
};

export default Pagination;