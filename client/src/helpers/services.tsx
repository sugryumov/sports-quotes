import axios from "axios";

export function getList() {
  console.log("sa");
  axios
    .post("http://172.31.0.3:8080/api/v1/create-quote", {
      quote: "“The only way to prove that you’re a good sport is to lose.”",
      author: "– Ernie Banks"
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
