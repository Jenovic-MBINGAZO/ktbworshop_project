import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Achievement } from "../views/Achievement";


export function AchievementRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/réalisation" element={<Achievement/>}/>
            </Routes>
        </BrowserRouter>
    )
}


