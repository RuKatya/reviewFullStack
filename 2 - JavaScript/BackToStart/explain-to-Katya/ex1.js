// const numbersFromUser = prompt("Enter 6 random numbers")

const loto = (numbersFromUser) => {
    
    const nums = numbersFromUser.split(" ")

    const arrayRandom = []
    for (let i = 0; i < 6; i++) {
        let x = Math.floor((Math.random() * 37) + 1)
        arrayRandom.push(x)
    }

    checkLoto(arrayRandom, nums)
}

const checkLoto = (arrayRandom, nums) => {
    for (let i = 0; i < arrayRandom.length; i++) {
        if(arrayRandom.includes(Number(nums[i]))) {
            alert(`the number ${nums[i]} won`)
        } else {
            alert('no one won')
        }
    }
}

loto(numbersFromUser)
