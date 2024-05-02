import db from "./firebase.config.js";
import { ref, get } from "firebase/database";

const refMovies = ref(db, "/movies");

const getAllMovies = () => {
    return get(refMovies)
}

export default {
    getAllMovies
}