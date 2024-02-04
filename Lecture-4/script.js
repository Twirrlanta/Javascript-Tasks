// 1)ჩავთვალოთ რომ გვაქვს სამი სხვადასხვა ფუნქცია რომელიც შეიცავს promise-ებს პირველი შეიცავს "User Data", მეორე: "Account Statistics" და მესამე: "Activity Logs". და promise.all დახმარებით უნდა დავჰენდლოთ ეს მონაცემები და ასევე გავწეროთ catch ბლოკიც.

// 2)პირობითად გვაქვს ორ სხვადსხვა სერვისში სურათის ატვირთვა და საკმარისია რომ ერთერთი მაინც აიტვირთოს წარმატებით.გამოიყენეთ promise.any.

// const firstPromise = new Promise((reject, reject2) => {
//     setTimeout(() => {
//         const result = newFunction();
//         resolve(result);
//     }, 3000)
// });

// function newFunction() {
//     return "User Data"
// }


function firstPromise() {
    return new Promise((resolve, reject) => {
            resolve("User Data");
    })
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        resolve("Account Statistics")
    })
}

function thirdPromise() {
    return new Promise((resolve, reject) => {
        resolve("Activity Logs")
    })
}

Promise.all(firstPromise(), secondPromise(), thirdPromise())
    .then((resolve) => {
    console.log("resolved", res)
    }).catch((err) => {
    console.log("Error:", err)
})