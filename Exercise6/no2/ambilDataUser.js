//No 2 Tumewu, Benedict Jonathan
function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); 
        return data.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  export default ambilDataUser;