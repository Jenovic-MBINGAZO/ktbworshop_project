import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../views/Contact";


export function ContactRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}