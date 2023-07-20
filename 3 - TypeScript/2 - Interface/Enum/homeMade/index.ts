enum Name {
    YOHAY = "Yohay",
    DOTAN = "Dotan",
    HOAYA = "Hodaya",
    AYALA = "Ayala",
    SARA = "Sara"
}

enum Age {
    AGE1 = "34",
    AGE2 = "37",
    AGE3 = "29",
    AGE4 = "33",
    AGE5 = "36"
}

enum City {
    NETANYA = "Netanya",
    HAIFA = "Haifa",
    RAMATGAN = "Ramat Gan",
    HOLON = "Holon",
    BEERSHEVA = "Beer Sheva"
}

enum Gender {
    FEMALEG = "Female",
    MALEG = "Male",
    OTHER = "Other"
}

// const userName = document.querySelector("#name")
// console.log(userName)
// const userAge = document.querySelector("#age")
// const userCity = document.querySelector("#city")
// const userGender = document.querySelector("#gender")

// const userDetails = document.querySelector("#userDetails")
const userDetails = document.querySelector("#userDetails")

userDetails.innerHTML = `
<form>
    <input type="text" name="name" value="${Name.YOHAY}">
    <input type="text" name="age" value="${Age.AGE2}">

    <select>
        <option disabled selected>SELECT YOUR CITY</option>
        <option value="${City.RAMATGAN}">${City.RAMATGAN}</option>
        <option value="${City.HAIFA}">${City.HAIFA}</option>
        <option value="${City.HOLON}">${City.HOLON}</option>
        <option value="${City.BEERSHEVA}">${City.BEERSHEVA}</option>
        <option value="${City.NETANYA}">${City.NETANYA}</option>
    </select>

    <form>
        <input type="radio" name="gender" value="${Gender.FEMALEG}">${Gender.FEMALEG}</input>
        <input type="radio" name="gender" value="${Gender.MALEG}">${Gender.MALEG}</input>
        <input type="radio" name="gender" value="${Gender.OTHER}">${Gender.OTHER}</input>
    </form>
</form>

<form>
    <input type="text" name="name" value="${Name.DOTAN}">
    <input type="text" name="age" value="${Age.AGE4}">

    <select>
        <option disabled selected>SELECT YOUR CITY</option>
        <option value="${City.RAMATGAN}">${City.RAMATGAN}</option>
        <option value="${City.HAIFA}">${City.HAIFA}</option>
        <option value="${City.HOLON}">${City.HOLON}</option>
        <option value="${City.BEERSHEVA}">${City.BEERSHEVA}</option>
        <option value="${City.NETANYA}">${City.NETANYA}</option>
    </select>

    <form>
        <input type="radio" name="gender" value="${Gender.FEMALEG}">${Gender.FEMALEG}</input>
        <input type="radio" name="gender" value="${Gender.MALEG}">${Gender.MALEG}</input>
        <input type="radio" name="gender" value="${Gender.OTHER}">${Gender.OTHER}</input>
    </form>
</form>

<form>
    <input type="text" name="name" value="${Name.HOAYA}">
    <input type="text" name="age" value="${Age.AGE1}">

    <select>
        <option disabled selected>SELECT YOUR CITY</option>
        <option value="${City.RAMATGAN}">${City.RAMATGAN}</option>
        <option value="${City.HAIFA}">${City.HAIFA}</option>
        <option value="${City.HOLON}">${City.HOLON}</option>
        <option value="${City.BEERSHEVA}">${City.BEERSHEVA}</option>
        <option value="${City.NETANYA}">${City.NETANYA}</option>
    </select>

    <form>
        <input type="radio" name="gender" value="${Gender.FEMALEG}">${Gender.FEMALEG}</input>
        <input type="radio" name="gender" value="${Gender.MALEG}">${Gender.MALEG}</input>
        <input type="radio" name="gender" value="${Gender.OTHER}">${Gender.OTHER}</input>
    </form>
</form>

<form>
    <input type="text" name="name" value="${Name.AYALA}">
    <input type="text" name="age" value="${Age.AGE5}">

    <select>
        <option disabled selected>SELECT YOUR CITY</option>
        <option value="${City.RAMATGAN}">${City.RAMATGAN}</option>
        <option value="${City.HAIFA}">${City.HAIFA}</option>
        <option value="${City.HOLON}">${City.HOLON}</option>
        <option value="${City.BEERSHEVA}">${City.BEERSHEVA}</option>
        <option value="${City.NETANYA}">${City.NETANYA}</option>
    </select>

    <form>
        <input type="radio" name="gender" value="${Gender.FEMALEG}">${Gender.FEMALEG}</input>
        <input type="radio" name="gender" value="${Gender.MALEG}">${Gender.MALEG}</input>
        <input type="radio" name="gender" value="${Gender.OTHER}">${Gender.OTHER}</input>
    </form>
</form>

<form>
    <input type="text" name="name" value="${Name.SARA}">
    <input type="text" name="age" value="${Age.AGE3}">

    <select>
        <option disabled selected>SELECT YOUR CITY</option>
        <option value="${City.RAMATGAN}">${City.RAMATGAN}</option>
        <option value="${City.HAIFA}">${City.HAIFA}</option>
        <option value="${City.HOLON}">${City.HOLON}</option>
        <option value="${City.BEERSHEVA}">${City.BEERSHEVA}</option>
        <option value="${City.NETANYA}">${City.NETANYA}</option>
    </select>

    <form>
        <input type="radio" name="gender" value="${Gender.FEMALEG}">${Gender.FEMALEG}</input>
        <input type="radio" name="gender" value="${Gender.MALEG}">${Gender.MALEG}</input>
        <input type="radio" name="gender" value="${Gender.OTHER}">${Gender.OTHER}</input>
    </form>
</form>
`