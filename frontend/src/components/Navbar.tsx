import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"



export function Navbar(){

    interface ImageData{
        id ?: number,
        alt : string,
        src : string,
        name ? : string
    }

    const [data , Setdata] = useState<ImageData[]>([])

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch("../../Api/images.json")
                if(!response.ok){
                    throw new Error("Erreur lors de la récupération du fichier JSON")
                }
                const dataJson = await response.json()
                Setdata(dataJson)
            } catch (error) {
                console.error("Erreur:", error);
            }
        }

        fetchData()
    },[]
    )

    const nameImages = data.filter( value =>
        value.alt === "logo"
     )

    const displaylogo = nameImages.map(image => 
        <Link to="/" key={image.id}>
            <img src={image.src} alt={image.alt} className="w-36"/>
        </Link>
    );
    
    return(
        <div className="flex items-center w-full h-16  px-36">
            <div className="bg-red-400">
                {displaylogo}
            </div>

            <div className="flex gap-6  w-full justify-center text-text-black text-base items-center">  
                <Link to="/">Accueil</Link>
                <Link to="/service">Service</Link>
                <Link to="/réalisation">Réalisation</Link>
                <Link to="/a-propos">À propos</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <Link to="/commander">
                <Button Classname="bg-orange h-10 flex justify-center items-center p-4 text-white  rounded-3xl " text=" Commander"/>
            </Link>
        </div>
    )
}

