// enum DAYLIST {
//     DAYONE=1,
//     DAYTWO = 11,
//     DAYTHREE = "Yellow",
//     DAYFOUR = 5,
//     DAYFIVE
//   }

enum Gender {
    FEMALE = "female",
    MALE = "male"
}

const root = document.querySelector("#root")

root.innerHTML = `
    <select>
        <option disabled selected>SELECT YOUR GENDER</option>
        <option value="${Gender.FEMALE}">${Gender.FEMALE}</option>
        <option value="${Gender.MALE}">${Gender.MALE}</option>
    </select>
`

