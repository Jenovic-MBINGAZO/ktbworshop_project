import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../views/About";
import { Achievement } from "../views/Achievement";
import { Contact } from "../views/Contact";
import { Home } from "../views/Home";
import { Notfound } from "../views/NotFound";
import { Order } from "../views/Order";
import { Service } from "../views/Service";


export function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/a-propos" element={<About/>} /> 
                <Route path="/réalisation" element={<Achievement/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/notfound" element={<Notfound/>}/>
                <Route path="/commander" element={<Order/>}/>
                <Route path="/service" element={<Service/>}/>
            </Routes>
        </BrowserRouter>
    )
}