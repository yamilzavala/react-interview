// const arr = [
//   {name: 'wazu', age: 10, avg: 5},
//   {name: 'pablo', age: 20, avg: 10},
// ]

export const sortNumbers = (arrNum) => arrNum.sort((a,b) => (a-b));

export const sortStrings = (arrStr) => arrStr.sort((a,b) => a.localeCompare(b))

function getSortValue(object, key) {
    //return object.age / object.avg
    //return object.name
    return object[`${key}`]
}

export const sortObjs = (arrObjs, key ,order = null) => arrObjs.sort((a,b) => {
    const valueA = getSortValue(a, key)
    const valueB = getSortValue(b, key)
    
    if(typeof valueA === 'string') {
        console.log('Enter a string')
        if(order === 'asc') {
            return valueA.localeCompare(valueB)
        } else if(order === 'desc') {
            return valueB.localeCompare(valueA)
        } 
        return arrObjs
    } else {
        console.log('Enter a number')
        if(order === 'asc') {
            return valueA - valueB
        } else if(order === 'desc') {
            return valueB - valueA
        }
        return arrObjs
    }
})