const root = document.querySelector('.root')
let dataGet = []

async function getData() {
    try {
        await fetch('/get-data')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                dataGet = data;
            });

        let html = "";

        if (dataGet) {
            dataGet.map(dat => {
                html += `
                    <div>
                        <p>${dat.title}</p>
                    </div>
                `
            })

            root.innerHTML = html
        } else {
            console.log('There is no data')
        }
    } catch (error) {
        console.log(error)
    }
}

// getData()


// const fruits = ["1", "2", "3", "4"];
// console.log(fruits)
// const a = fruits.slice(1, 3);
// console.log(a)
// console.log(fruits)
// fruits.pop();
// console.log(fruits)

// const aaa = [5, 9, 2, 4, 6, 8].at(-2)
// console.log(aaa)

