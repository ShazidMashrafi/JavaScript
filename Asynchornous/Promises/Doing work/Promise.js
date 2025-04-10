// Do these in order
// 1. Walk the dog
// 2. clean the kitchen
// 3. take out trash

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("Walking the dog finished");
            } else {
                reject("You didn't walk the dog");
            }
        },1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned) {
                resolve("Kitchen cleaned");
            } else {
                reject("You didn't clean kitchen");
            }
        },2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = true;
            if(tookOutTrash) {
                resolve("Took out trash");
            } else {
                reject("You didn't take out trash");
            }
        },500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen();})
        .then(value => {console.log(value); return takeOutTrash();})
        .then(value => {console.log(value); console.log("All work done")})
        .catch(value => console.log(value));