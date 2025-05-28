import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiImageAdd } from "react-icons/bi";
import { RiMotorbikeFill } from "react-icons/ri";

import ShenaniganList from './ShenaniganList';
import { Link } from 'react-router-dom';

function ShenanigansPage({ setShenanigan }) {
    // use Navigate for redirection
    const redirect = useNavigate();
    // use state to import the data
    const [shenanigans, setShenanigans] = useState([]);

    // RETRIEVE the entire collection of scooter shenanigans
    const loadShenanigans = async () => {
        const response = await fetch('/shenanigans');
        const shenanigans = await response.json();
        setShenanigans(shenanigans);
    }
        
    // UPDATE a scooter shenanigan entry
    const onEditShenanigan = async shenanigan => {
        setShenanigan(shenanigan);
        redirect("/updateShenanigan");
    }
    
    // DELETE a scooter shenanigan entry
    const onDeleteShenanigan = async _id => {
        const response = await fetch(`/shenanigans/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/shenanigans');
            const shenanigans = await getResponse.json();
            setShenanigans(shenanigans);
        } else {
           console.error(`Couldn't delete scooter shenanigan entry with that ID = ${_id},  
                status code = ${response.status}`)
        }
    }

    // LOAD scooter shenanigans
    useEffect(() => {
            loadShenanigans();
        }, []);

    // DISPLAY scooter shenanigans
    return (        
        <>
            <h2><RiMotorbikeFill /> Scooter Shenanigans</h2>
            <article>
                <p>Here in Taiwan, you may see some creative, awkward, or even ridiculous transportation solutions that people have used with their scooters. On this page, we have a collection of some, all of which were spotted in the wild and probably performed in all seriousness. Their 'scores' are ratings of their shenaniganery.</p>
                <p>The information used in the figures on this page is stored and accessed using a database on MongoDB. Users can add, edit, or delete entries by clicking on the appropriate icons. Users can add photos hosted on external sites via their URLs.</p>
                <div className='add-shenanigan-line'>
                    <p><Link to="/createShenanigan"><BiImageAdd className='big-icon'/></Link> Feel free to add an entry if you’ve snapped a pic of scooter shenanigans in your travels!</p>
                </div>
                <ShenaniganList
                    shenanigans={shenanigans}
                    onEdit={onEditShenanigan}
                    onDelete={onDeleteShenanigan}
                />
            </article>
        </>
    )
}
export default ShenanigansPage