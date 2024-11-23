import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function SocialLinks(){
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
        value.name === "link"
     )

    const displayImages = nameImages.map(image => 
        <Link to={""} key={image.id}>
            <img src={image.src} alt={image.alt} />
        </Link>
    );
    return(
        <div className="bg-orange w-full h-45 py-4 px-36 flex items-center justify-end gap-5">
            {displayImages}
        </div>
    )
}





