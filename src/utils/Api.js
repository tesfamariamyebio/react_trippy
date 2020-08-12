
class Api {
    getHome()
    {
        const url='http://localhost:3001/api/home';
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            console.log('cities',json)
            const cities=json.cities;
            console.log(cities);
        });
    }
    
}


    export default new Api();