import React, { useState } from 'react';
import axios from "axios"
import { REACT_API_URL } from "../constants/apiRoutes";

export async function fetchData(apiFetchingRoute: string) {
    
    let result;
    await axios.get(`${REACT_API_URL}${apiFetchingRoute}`)
        .then(response => {
            if (response.status === 200) {
                result = response.data
            }
        })
        .catch(error => {
            console.log(error);
            result = error.response.data
        });
    return result;
};

// export async function fetchSpecific(apiFetchingRoute: string) {

//     const [result, setResult] = useState(null);
//     const [urlToFetch, setUrlToFetch] = useState(REACT_API_URL + apiFetchingRoute)
//     await axios.get(REACT_API_URL + apiFetchingRoute)
//         .then(response => {
//             if (response.status === 200)
//                 setResult(response.data)
//         })
//         .catch(error => {
//             setResult(error.response.data)
//         });
//     return result;
// };