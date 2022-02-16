import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setID] = useState(null);

    console.log(firstName);
    console.log(lastName);

    const sendDataToAPI = () => {
        axios.put(`http://localhost:3007/contacts/${id}`, {
            firstName,
            lastName
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('id'))
    }, [])

    return (
        <div>
            <Form>

                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name' />
                </Form.Field>

                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' />
                </Form.Field>
                
                <div style={{ justifyContent: "space-between" }}>

                    <Link to = "/read">
                        <Button color="green" type='submit' onClick={sendDataToAPI}>Update</Button>
                    </Link>

                    <Link to = "/read">
                        <Button color="red" type='submit'>Cancle</Button>
                    </Link>
                </div>
                
            </Form>
        </div>
    )
}
