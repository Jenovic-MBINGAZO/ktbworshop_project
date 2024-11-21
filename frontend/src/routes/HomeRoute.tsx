import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";


export function HomeRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}



