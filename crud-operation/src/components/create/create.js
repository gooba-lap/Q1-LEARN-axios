import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(firstName);
    console.log(lastName);

    const sendDataToAPI = () => {
        // old > https://6209db5f92946600171c554d.mockapi.io/Crud
        axios.post(`http://localhost:3007/contacts`, {
            firstName,
            lastName
        })
    }

    return (
        <div>
            <Form>

                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name' />
                </Form.Field>

                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" 
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' />
                </Form.Field>
                
                <Button type='submit' color="green" href="/read" onClick={sendDataToAPI}>Submit</Button>
                <Button type='submit' color="brown" href="/read">View list</Button>

            </Form>
        </div>
    )
}
