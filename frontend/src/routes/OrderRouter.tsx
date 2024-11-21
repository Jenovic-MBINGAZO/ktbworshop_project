import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Order } from "../views/Order";


export function OrderRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/commander" element={<Order/>}/>
            </Routes>
        </BrowserRouter>
    )
}




