//No 1-3 Tumewu, Benedict Jonathan
import helloWorld from "./helloWorld.js";
import ambilDataUser from "../no2/ambilDataUser.js";
import ambilDataUserAsync from "../no3/ambilDataUserAsync.js";

async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

messages();
ambilDataUser();
ambilDataUserAsync();