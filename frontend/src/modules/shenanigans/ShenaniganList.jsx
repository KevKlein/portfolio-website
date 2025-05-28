import React from 'react';
import Shenanigan from './Shenanigan.jsx';

function ShenaniganList({shenanigans, onEdit, onDelete}){
    return (
        <>
            <article className='shenanigans'>

                {shenanigans.map((shenanigan, i) => 
                    <Shenanigan 
                        shenanigan={shenanigan} 
                        key={i}
                        onEdit = {onEdit} 
                        onDelete = {onDelete}
                />)}
                
            </article>
        </>
    )
}
export default ShenaniganList;
