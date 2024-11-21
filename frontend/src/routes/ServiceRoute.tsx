import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Service } from "../views/Service";


export function ServiceRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="service" element={<Service/>}/>
            </Routes>
        </BrowserRouter>
    )
}