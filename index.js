console.log(`person1: shows ticket`);
console.log(`person2: shows ticket`);

const promiseWifeBringingTicks=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(`ticket`)
    }, 3000);
})

const getpopcorn= promiseWifeBringingTicks.then((t) =>{
    console.log(`wife:i got the tics`);
    console.log(`husband:we should go in`);
    console.log(`wife: no i am hungary`);
    return new Promise((resolve, reject) =>{resolve(`${t} popcorn`)})
})
const getButter= getpopcorn.then((t) =>{
    console.log(`husband: i got some popcorn`);
    console.log(`husband:we should go in`);
    console.log(`wife: no i need butter on my popcorn`);
    return new Promise((resolve, reject) =>{resolve(`${t} butter`)})
})
getpopcorn.then((t) =>{console.log(t);})

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);



console.log(`person1: shows ticket`);
console.log(`person2: shows ticket`);

const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`ticket`)
        }, 3000);
    })
const getPopcorn = new Promise((resolve, reject)=>resolve(`popcorn`))

const addButter=new Promise((resolve, reject)=>resolve(`butter`))

const getColdDrink = new Promise((resolve, reject)=>resolve(`coldDrink`))

    let ticket=await promiseWifeBringingTicks

        console.log(`wife:i got the ${ticket}`);
        console.log(`husband:we should go in`);
        console.log(`wife: no i am hungary`);

        let popcorn=await getPopcorn;

        console.log(`husband: i got some ${popcorn}`);
        console.log(`husband:we should go in`);
        console.log(`wife: no i need butter on my popcorn`);

        let butter=await addButter

        console.log(`husband:i got some ${butter}`);
        console.log(`husband:anything else?`);
        console.log(`wife:i need coldDrink`);

        let coldDrink=await getColdDrink

        console.log(`husband:here your ${coldDrink}`);
        console.log(`wife:lets go we are getting late`);
        console.log(`husband:okay`);
    return ticket
};
preMovie().then((m)=>console.log(`person3: shows ${m}`))

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);



