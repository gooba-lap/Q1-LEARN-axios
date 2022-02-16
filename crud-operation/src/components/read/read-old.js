import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const setData = (id,name,username) => {
        console.log(id);
        localStorage.setItem('id', id)
        localStorage.setItem('name',name)
        localStorage.setItem('username',username)
    }
    return (
        <div>
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
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.username}</Table.Cell>
                                <Table.Cell>
                                    <Link to = '/update'>
                                        <Button color="green" onClick={() => setData(data.id,data.name,data.username)}>Update</Button>    
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to = '/delete'>
                                        <Button color="red">Delete</Button>    
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
