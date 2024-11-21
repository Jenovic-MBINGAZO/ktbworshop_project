import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notfound } from "../views/NotFound";


export function NotfoundRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="notfound" element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

