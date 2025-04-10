// Do these in order
// 1. Walk the dog
// 2. clean the kitchen
// 3. take out trash

function walkDog(callback) {
    setTimeout(() => {
        console.log("Walking the dog finished");
        callback();
    },1000);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("Kitchen cleaned");
        callback();
    },2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("Took out trash");
        callback();
    },500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("All work done");
        })
    })
})