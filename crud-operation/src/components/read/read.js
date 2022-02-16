import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3007/contacts`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const setData = (id,firstName,lastName) => {
        console.log(id);
        localStorage.setItem('id', id)
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
    }

    // detele

    const getData = () => {
        axios.get(`http://localhost:3007/contacts/`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3007/contacts/${id}`)
        .get(() => {
            getData();
        })
    }

    return (
        <div>
            <Button type='submit' color="twitter" href="/">New</Button>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to = '/update'>
                                        <Button color="green" onClick={() => setData(data.id,data.firstName,data.lastName)}>Update</Button>    
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to = '/read'>
                                        <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>    
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
