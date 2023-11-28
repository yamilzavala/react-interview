//Evolve: Callbacks > Promises > async - await
const nirvanaUrl =
  "http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json";

const metallicaUrl =
  "http://musicbrainz.org/ws/2/artist/65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab?fmt=json";

//#1 - Callbacks
//fetch is a function that came with the browser and is for make api calls
const getData = (url, cb) => {
    fetch(url)
        .then(response => response.json())
        .then(data => cb(data))
}

//example callback hell - we do two request - could be more nedted (callback hell)
getData(nirvanaUrl, (nirvadaData) => {
    getData(metallicaUrl, (metallicaData) => {
        console.log('nirvana: ', nirvadaData, 'metallica: ', metallicaData)
    })
})


//#1 - Promises
const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Success')
    } else {
        reject('Error')
    }
})
promise.then(res => {
    console.log(res)
    return 'result one'
    }) //success case
       .then(res2 => console.log('result 2: ',res2))
       .catch(e => console.error(e))  //error case

//Promises with fetch(url): Promise
//In this case we normalize the data and return a new object with metallica and nirvana keys - that is the result from the two apis
fetch(nirvanaUrl)
    .then(nirvanaRes => nirvanaRes.json())
    .then(nirvanaData => {
        return fetch(metallicaUrl)
                .then(metallicaRes => metallicaRes.json())
                .then(metallicaData => {
                    return {metallica: metallicaData, nirvana: nirvanaData}
                })
    })
    .then(both => console.log(both))
    .catch(e => console.log(e))

//Promise.all([]) --> resolves an array of promises
const nirvanaPromise = fetch(nirvanaUrl).then(nirvanaRes => nirvanaRes.json())
const metallicaPromise = fetch(metallicaUrl).then(metallicaRes => metallicaRes.json())
Promise.all([metallicaPromise, nirvanaPromise])
    .then(both => console.log(both))


//# 3 - async - await => looks like synchonous
const getBands = async () => {
    try {
        const responseNirvana = await fetch(nirvanaUrl)
        const nirvanaData = await responseNirvana.json()
    
        const responseMetallica = await fetch(metallicaUrl)
        const metallicaData = await responseMetallica.json()
    
        return {
            metallica: metallicaData,
            nirvana: nirvanaData
        }
    } catch (err) {
        console.log(err)
    }
} 
getBands().then(res => console.log('async-await: ',res))
