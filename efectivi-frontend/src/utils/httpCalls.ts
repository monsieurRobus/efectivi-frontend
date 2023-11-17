const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+import.meta.env.VITE_TOKEN_BACK
}

export const httpGet = async (endpoint:string)=> 
    await fetch(import.meta.env.VITE_BASE_URL+import.meta.env.VITE_API_URL+endpoint,
        {
            method: 'GET',
            headers: header,
            
        })
        .then(res => res.json())
        .catch(err => console.log(err))
