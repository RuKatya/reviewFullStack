
const returnDay = (date, days) => {
        date.setDate(date.getDate() + days)
    
        return date;
    }
    
    // const toDayDate = new Date()
    
    // const newDate = returnDay(toDayDate, 10)
    
    // console.log(newDate)
    
    // ***********************
    
    const setDateOfReturn = (todayDate, returnDate) => {
            const leftDays = returnDate.getTime() - todayDate.getTime()
            const seconds = 60
            const minutes = 60
            const hours = 24
            const secondsInThousend  =1000
        
            const dayCalc = seconds *minutes *hours * secondsInThousend // 60*60*24*1000
        
            return leftDays/dayCalc;
        }
        
        // const todayDate = new Date("04/18/2023")
        // const returnDate = new Date("04/25/2023")
        
        // const newDay = setDateOfReturn(todayDate, returnDate)
        // console.log(newDay)

        // *****************************
        
        const usersRent = [
            {
                name: "Yoni",
                dateOfRent: new Date("05/20/2023"),
                rentDays: 5,
            },
            {
                name: "Ori",
                dateOfRent: new Date("05/01/2023"),
                rentDays: 8,
            },
            {
                name: "Michael",
                dateOfRent: new Date("05/05/2023"),
                rentDays: 3,
            },
            {
                name: "Yonatan",
                dateOfRent: new Date("03/21/2023"),
                rentDays: 3,
            },
        ]

        const userSearch = (usersRent) =>{
            /*
            1. find the user by name - use prompt()
            2. calculate the return day - by the user
            3. calculate the left days to return - by return day
            4. if the days is less that zero - alert ("AAAAA, WE NEED TO RETURN THE STAFF")
            5. if the days is more that zero - alert ("I have time")
            */

            const userNameFromPrompt = prompt('Enter the name of user')
            const user = usersRent.find(user => user.name == userNameFromPrompt)

            console.log(user)

            const returnUserDay = returnDay(user.dateOfRent,  user.rentDays)
            console.log(returnUserDay)

            const daysLeftToReturn = Math.floor(setDateOfReturn(new Date(), returnUserDay))
            console.log(daysLeftToReturn)

            if( daysLeftToReturn < 0 ) {
                return alert(`${user.name} WE NEED TO RETURN THE STAFF`)
            } else {
                return alert(`${user.name} left ${daysLeftToReturn} days to return`)
            }
        }

        userSearch(usersRent)




