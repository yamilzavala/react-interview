// A promise may have 3 states
//Pending: initial state, neither fulfilled or rejected
//Fulfilled: meaning that the operation was completed successfully
//Rejected: meaning that the operation was rejected
let flag = true;

let promise = new Promise((resolve, reject) => {
    if(flag) {
        resolve('OK')
    } else {
        reject('FAIL')
    }
})
console.log(promise)

//#### Example 2 #### 
//after 1 second the job is resolve the promise
//state: pending - result: ubdefined
let promiseAsycSuccess = new Promise((resolve, reject) => {    
    setTimeout(()=> {
        resolve('DONE')
    },1000)
})  
promiseAsycSuccess.then(resp => console.log(resp))
//state: fulfilled - result: done

//after 1 second the job is reject the promise
//state: pending - result: ubdefined
let promiseAsycReject = new Promise((resolve, reject) => {    
    setTimeout(()=> {
        reject(new Error('Opps'))
    },1000)
})  
promiseAsycReject.then(resp => console.log(resp))
                 .catch(e => console.log(e))
//state: rejected - result: error

//#### Example 3 #### 
let promiseTask = new Promise((resolve, reject)=> {
    resolve('Promise resolved')
})
//Execute the promise when the promise is resolved successfully
promiseTask.then(result => console.log(result))
           .then(() => console.log('Another text'))

let promiseTaskReject = new Promise((resolve, reject)=> {
    reject('Promise rejected')
})
promiseTaskReject.then(resultOne => console.log(resultOne))
                 .then(() => console.log('Another result'))
                 ////Executes if there is an error - handle any error that may occur before this point
                 .catch((e) => console.log(e))
                 .finally(() => console.log('This code is executed'))

//#### Example 4 #### 
const datos = [
    {id: 1, name: 'hero 1'},
    {id: 2, name: 'hero 2'},
    {id: 3, name: 'hero 3'},
]

const getDatos = () => datos;
console.log(getDatos())

const getDatosAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(datos.length) {
                resolve(datos)
            } else {
                reject(new Error('No data'))
            }            
        },1500)
    })
}
getDatosAsync().then(result => console.log(result))
               .catch(e => console.log(e))

async function fc() {
    try{
        const datos = await getDatosAsync()
        console.log(datos)
    } catch(e) {
        console.log(e)
    }   
}
fc()