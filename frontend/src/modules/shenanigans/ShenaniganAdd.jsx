import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ShenaniganAdd = () => {
    const [description, setDescription] = useState('');
    const [score,       setScore]       = useState('');
    const [date,        setDate]        = useState('');
    const [link,        setLink]        = useState('');


    const redirect = useNavigate();
    
    const addShenanigan = async (event) => {
        event.preventDefault();
        const newShenanigan = { description, score, date, link };
        try {
            const response = await fetch('/shenanigans', {
                method: 'POST',
                body: JSON.stringify(newShenanigan),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`Successfully added a new scooter shenanigan entry!`);
                redirect("/shenanigansPage");
            } else {
                alert(`Couldn't add new shenanigan entry.`);
            }
        } catch (error) {
            alert(`Error adding new shenanigan entry.`);
        }
    };

    return (
        <>
            <h2>Document Scooter Shenaniganery</h2>
            <article className='addShenanigan'>
                <p>Here you can create a new scooter shenanigan entry. Make sure to include the URL to a photo hosted on the internet, a brief description, your score of the shenaniganery pictured, and the date it transpired.</p>
                <p>You can host videos at <a href="https://imgur.com/upload">imgur.com/upload</a>, which is free, easy, and doesn't require an account, or on some other site.</p>
                <form id="" onSubmit={addShenanigan} >
                    <table>
                        <caption>What scooter shenaniganery did you observe?</caption>
                        <tbody>
                            <tr>
                                <th>Link</th>
                                <td>
                                    <label htmlFor="link"></label>
                                    <input type="text" placeholder="Valid URL of a hosted image, ending in .jpeg, etc." id="link" size="35"
                                        // pattern="(http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{1,256}\.[a-z]{1,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*"                                        
                                        maxLength="100"
                                        value={link}
                                        required
                                        onChange={e => setLink(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    <label htmlFor="description"></label>
                                    <input type="text" placeholder="Brief description (under 35 characters)" id="description" size="35"
                                        maxLength="35"
                                        value={description}
                                        required
                                        onChange={e => setDescription(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Score</th>
                                <td>
                                    <label htmlFor="score"></label>
                                    <input type="number" placeholder="(0-10)" id="score" size="3"
                                        min={0}
                                        max={10}
                                        value={score}
                                        required
                                        onChange={e => setScore(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>
                                    <label htmlFor="date"></label>
                                    <input type="date" placeholder="Date of occurance" id="date" size="4"
                                        value={date}
                                        required
                                        onChange={e => setDate(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add Shenanigan Entry</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </article>
        </>
      )
}

export default ShenaniganAdd;