const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
};

console.log("ADDRESS", user.address.street, user.address.suite, user.address.city)
console.log("GER", user.address.geo.lat, user.address.geo.lng)


console.log("EMAIL IS", user.email)
console.log(`EMAIL Is ${user.email} company name ${user.company.name}`)