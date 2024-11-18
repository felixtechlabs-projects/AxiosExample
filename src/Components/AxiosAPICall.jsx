import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosAPICall = () => {
    const [data, setData] = useState([]);
    const getDataOfBooks = async() => {
        const options = {
            method: 'GET',
            url: 'https://hapi-books.p.rapidapi.com/month/2024/3',
            headers: {
              'x-rapidapi-key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
              'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setData(response.data);
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(() => {
        getDataOfBooks();
    }, [])
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th> Sr.No. </th>
                    <th> Title </th>
                    <th> image </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((book, index) => (
                        <tr>
                            <td> { index + 1 } </td>
                            <td> {book.name } </td>
                            <td> 
                                <img src={book.cover} alt="" height={100} width={100} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default AxiosAPICall

/**
 * ** HTTP vs HTTPS
 * 1) HTTPS is more secure than HTTP
 * 2) HTTP is faster than HTTPS
 * 3) HTTPS -> SSL(Secure Socket Layer) or TLS(Transport Layer Security) encryption
 * 
 * **HTTP Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS
 * 
 * ** GET VS POST
 * 1) GET-> Read data/ fetch data; POST -> insert data
 * 2) GET-> parameters show; POST -> request.body
 * 
 * ** HTTP Status:
 * 1) 
 */