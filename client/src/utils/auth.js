// use this to decode a token and get the user's information out of it
// import decode from "jwt-decode";
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';



// create a new class to instantiate for a user
class AuthService {
    // get user data from JSON web token by decoding it
    getUser() {
        const token = this.getToken();
        return token ? jwtDecode(token) : null;
    }

    loggedIn() {
        const token = this.getToken();
        // If there is a token and it's not expired, return `true`
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        // Decode the token to get its expiration time that was set by the server
        const decoded = jwtDecode(token);
        // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem("id_token");
            return true;
        }
        // If token hasn't passed its expiration time, return `false`
        return false;
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token");
    }

    login(idToken) {
        // Saves user token to localStorage and reloads the application for logged in status to take effect
        console.log(idToken);
        localStorage.setItem("id_token", idToken);
        window.location.assign("/");
        return idToken;
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem("id_token");
        // this will reload the page and reset the state of the application
        window.location.reload();
    }
}

export default new AuthService();
