import { useState, useEffect } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";


export function Home(){

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
    
    const banier = data.filter( value =>
        value.alt === "banier"
    )

    const icone1 = data.filter( value =>
        value.alt === "icone1"
    )

    
    const icone2 = data.filter( value =>
        value.alt === "icone2"
    )
    const  displayicone2 = icone2.map(image => image.src);
    const displayicone2join = displayicone2.join()

    const  displayicone1 = icone1.map(image => image.src);
    const displayicone1join = displayicone1.join()
    
    //console.log(displayjoin);
    
    const  displaybanier = banier.map(image => image.src);
    console.log(typeof(displaybanier));
    
    
    return(
        <div>
            <SocialLinks/>
            <Navbar/>
            <section className="h-767 bg-gray-300 w-full  bg-cover bg-center mb-40"   style={{ backgroundImage: `url(${displaybanier})` }}>
                <div className="w-1/2  m-auto pt-32">
                    <h1 className="text-4xl text-white font-black  text-center leading-snug">Trouvez des <span className="text-text-orange">techniciens qualifiés </span>pour vos besoins en Mécanique, Électricité et Menuiserie.</h1>
                </div>

                <div className="flex justify-center gap-5 mt-16">
                    <Link to="">
                        <Button Classname="bg-orange h-10 flex justify-center items-center p-4 text-white" text="Démander un service" />
                    </Link>

                    <Link to="">
                        <Button Classname="bg-gray-900 h-10 flex justify-center items-center p-4 text-white" text="En savoir plus" />
                    </Link>
                </div>
                
        
                <div className="flex mt-221 justify-center ">
                    <div className="w-567 h-442 bg-orange p-10 text-white flex flex-col gap-7 justify-center">
                        <div className="flex items-center h-auto gap-5">
                            <div>
                                <img src={displayicone1join} alt="icone" />
                            </div>
                            <p className="text-xl font-black">Nos Services Techniques</p>
                        </div>
                        <p className="text-base">Nous concevons des structures métalliques, des charpentes en bois et d’autres éléments liés à la menuiserie. Nous réalisons les support pour les panneaux solaires, la maintenance des générateurs, l’installations des bâtiments, le dimensionnement de l'Energie solaire, la maintenance des appareils électriques .</p>
                        <Link to="" className="text-text-black font-black text-xl">En savoir plus</Link>
                    </div>
                      
                    <div className="w-567 h-442 bg-gray-900 p-10 flex flex-col justify-center gap-7 ">
                        <div className="flex items-center h-auto gap-5">
                            <div>
                                <img src={displayicone2join} alt="icone" />
                            </div>
                            <p className="text-xl font-black text-text-orange">Notre service en Équipe</p>
                        </div>
                        <p className="text-white">Notre équipe engagée travaille en parfaite synergie pour offrir des solutions innovantes adaptées à vos besoins. Nous mettons un point d’honneur à fournir un service client exemplaire à chaque étape du projet. Chaque réalisation est une réussite, grâce à notre approche collaborative et à notre expertise.</p>
                        <Link to="" className="text-text-orange font-black text-xl">En savoir plus</Link>
                    </div>
                </div>
            </section>

          

            <Footer/>
        </div>
    )
}


