export const API_URL_REGISTER =
  process.env.NODE_ENV === "production"
    ? "https://book-town-server.herokuapp.com/api/users/register"
    : "http://localhost:8080/api/users/register";

export const API_URL_LOGIN =
  process.env.NODE_ENV === "production"
    ? "https://book-town-server.herokuapp.com/api/users/login"
    : "http://localhost:8080/api/users/login";
