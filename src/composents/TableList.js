import React,{ useEffect, useState } from 'react'
import TableRow from './TableRow'
import axios from 'axios'
const TableList = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios(
            'https://jsonplaceholder.typicode.com/users',
        )
        setData(response.data)

    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NOM</th>
                        <th scope="col">PREMON</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">VILLE</th>
                        <th scope="col">TELEPHONE</th>
                        <th scope="col">COMPAGNIE</th>

                    </tr>
                </thead>
                <tbody>


                    {data.map((user, index) => { return <TableRow user={user} key={index} /> })}
                </tbody>
            </table>


        </>
    )
}
export default TableList