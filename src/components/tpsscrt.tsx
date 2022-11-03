interface User{
    name: string,
    bio: string,
    age: number
}

function sumAge(users: User[]){
    let sum = 0
    for (const user of users){
        sum += user.age
    }
}