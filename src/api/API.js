//const API_KEY = "";

export const getMatches = () => {
    const url= `https://cricapi.com/api/matches?apikey=43c16216-2a52-4a3e-a792-b6d501a1b008`;

    return fetch(url).then((response) => response.json()).catch((error)=>console.log("ERROR:", error));
}

export const getMDetails=(id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=43c16216-2a52-4a3e-a792-b6d501a1b008&unique_id=${id}`
return fetch(url).then((response) => response.json()).catch((error)=>console.log(error));
}
