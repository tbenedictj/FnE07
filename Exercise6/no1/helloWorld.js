//No 1 Tumewu, Benedict Jonathan
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

export default helloWorld;