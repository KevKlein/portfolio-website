import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ShenaniganEdit = ( {shenaniganToEdit} ) => {
    const [description, setDescription] = useState(shenaniganToEdit.description);
    const [score,       setScore]       = useState(shenaniganToEdit.score);
    const [date,        setDate]        = useState(shenaniganToEdit.date.slice(0,10));
    const [link,        setLink]        = useState(shenaniganToEdit.link);


    const redirect = useNavigate();
    
    const editShenanigan = async () => {
        const response = await fetch(`/shenanigans/${shenaniganToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                description: description, 
                score: score, 
                date: date,
                link: link
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully edited shenanigan entry!`);
        } else {
            const errMessage = await response.json();
            alert(`Couldn't edit shenanigan entry. :/`);
        }
        redirect("/shenanigansPage");
    }

    return (
        <>
            <h2>Edit Scooter Shenaniganery</h2>
            <article className='addShenanigan'>
                <p>Here you can edit an existing scooter shenanigan entry. Current values are pre-filled out, and you can change any or all of them to other valid values. Upon hitting the 'Finished' button, the information in the database will be updated and you will be returned to the previous page, which will reflect your changes.</p>
                    <table>
                        <caption>What scooter shenaniganery did you observe?</caption>
                        <tbody>
                            <tr>
                                <th>Link</th>
                                <td>
                                    <label htmlFor="link"></label>
                                    <input type="text" placeholder="Please enter a valid URL of a hosted image" id="link" size="35"
                                        // pattern="^(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{1,256}\.[a-z]{1,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$"
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
                                        <button type="submit" id="submit" onClick={editShenanigan}>Finished</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </article>
        </>
    )
}

export default ShenaniganEdit;