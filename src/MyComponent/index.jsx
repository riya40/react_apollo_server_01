import {gql,useQuery} from '@apollo/client'
import React from 'react'

export default function MyComponent(){
    const GET_EMPLOYEES = gql `
    query{
        employees{
            id
            name
            department
        }
    }
    `

    const {loading, error,data}=useQuery(GET_EMPLOYEES)

    if (loading) return <p> Loading.......</p>
    if (error) return <p> Error:{error.message} </p>

    return(
        <>
            <ul>
                {data.employees.map((item)=>(
                  <li key={item.id}>
                    {item.name}-{item.department}
                  </li>
                ))}
            </ul>
        </>
    )
}