import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [id, setID] = useState(null);

    console.log(name);
    console.log(username);

    const sendDataToAPI = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name,
            username
        })
    }

    useEffect(() => {
        setName(localStorage.getItem('name'))
        setUsername(localStorage.getItem('username'))
        setID(localStorage.getItem('id'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Last Name' />
                </Form.Field>
                
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}
