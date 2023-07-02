const users = [{name: 'moshe', age: 25}, {name: 'david', age: 17}, {name: 'michal', age: 30}]

const adultNames = users.reduce((acc, user) => {
    
    if ( user.age > 18 ) {
        acc.push(user.name)
    }
    return acc

}, [])
console.log(adultNames)