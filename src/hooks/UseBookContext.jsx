import { useContext } from "react";
import BooksContext from "../context/book";

const useBookContext = () => {
    return useContext(BooksContext)
}

export default useBookContext