import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../views/About";


export function AboutRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/a-propos" element={<About/>} /> 
            </Routes>
        </BrowserRouter>
    )
}