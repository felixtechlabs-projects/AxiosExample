import React, { useEffect, useState } from 'react'

const APICall = () => {
    const [data, setData] = useState([]);

    // UI render => Sync
   useEffect(() => {
        getPosts();
   }, [data])
   
//    Async
   const getPosts = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const actualData = await result.json();
        setData(actualData);
    } catch (error) {
        console.log(error);
    }
   }

  return (
    <div>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead>
                <tr>
                    <th> UserID</th>
                    <th> Id </th>
                    <th> Title </th>
                    <th> Body </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((post) => (
                        <tr>
                            <td> {post.userId} </td>
                            <td> {post.id} </td>
                            <td> {post.title} </td>
                            <td> {post.body} </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default APICall