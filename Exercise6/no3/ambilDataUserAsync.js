//No 3 Tumewu, Benedict Jonathan
async function ambilDataUserAsync() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data); 
      return data.data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  export default ambilDataUserAsync;