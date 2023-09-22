function towns(arr) {
    let cities = [] ;
    const regex = new RegExp(/\s*\|\s*/);
    for (let i = 1; i < arr.length; i++) {
        let el = arr[i];
        let [town, latitude, longitude] = el.split(regex).filter(Boolean);
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        cities.push({'Town': town, 'Latitude': latitude, 'Longitude': longitude});
    }
    console.log(JSON.stringify(cities));
}


// [{"Town":"Sofia",
// "Latitude":42.7,
// "Longitude":23.32
// }, 
// {"Town":"Beijing",
// "Latitude":39.91,
// "Longitude":116.36
// }]

towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])