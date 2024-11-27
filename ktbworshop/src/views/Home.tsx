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
                const response = await fetch("/Api/images.json")
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

    const icone3 = data.filter( value =>
        value.alt === "icone3"
    )

    const icone44 = data.filter( value =>
        value.alt === "icone44"
    )

    const image1 = data.filter( value =>
        value.alt === "image1"
    )

    const image2 = data.filter( value =>
        value.alt === "image2"
    )

    const image3 = data.filter( value =>
        value.alt === "images3"
    )

    const image4 = data.filter( value =>
        value.alt === "image4"
    )

    const image6 = data.filter( value =>
        value.alt === "image6"
    )

    const image9 = data.filter( value =>
        value.alt === "image9"
    )
 
    const  displayimage6 = image6.map(image => image.src);
    const displayimage6join = displayimage6.join()

    const  displayimage9 = image9.map(image => image.src);
    const displayimage9join = displayimage9.join()


    const  displayimage4 = image4.map(image => image.src);
    const displayimage4join = displayimage4.join()

    const  displayimage2 = image2.map(image => image.src);
    const displayimage2join = displayimage2.join()

    const  displayimage3 = image3.map(image => image.src);
    const displayimage3join = displayimage3.join()

    const  displayimage1 = image1.map(image => image.src);
    const displayimage1join = displayimage1.join()
    
    const  displayicone44 = icone44.map(image => image.src);
    //console.log(displayicone4);
    
    const displayicone44join = displayicone44.join()
    //console.log("dfdfdfdfdfdfd",displayicone4join);
    

    const  displayicone3 = icone3.map(image => image.src);
    const displayicone3join = displayicone3.join()

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
            
            <section className="w-full  px-36 py-12 flex justify-center">
                <div className="w-1/2">
                    <div className="flex gap-4">
                        <h2 className="text-4xl font-bold text-text-orange">À propos de nous</h2>
                        <div className="flex">
                            <img src={displayicone3join} alt="icone" />
                            <img src={displayicone3join} alt="icone" />
                            <img src={displayicone3join} alt="icone" />
                            <img src={displayicone3join} alt="icone" />
                            <img src={displayicone3join} alt="icone" />
                        </div>
                    </div>
                    <p className="py-4 text-text-black pr-8">
                        KTBWORKSHOP est une entreprise qui propose des services techniques modernes , dédiés à fournir des solutions innovantes pour répondre aux besoins complexe des différents projets de sa clientèle.  Fondé depuis 2020, Nous sommes spécialisés dans les prestations des services technique modernes et la maintenance des infrastructures mécanique, électrique, de la menuiserie et en informatique.
                    </p>
                    <div>
                        <div className="flex gap-4 pb-4">
                            <img src={displayicone44join} alt="icone" />
                            <h3 className="text-2xl text-text-black">Notre mission</h3>
                        </div>
                        <p className="text-text-black">
                            Notre mission consiste à offrir une main d’œuvre qualifiée et professionnelle pour les prestations des services techniques aux entreprises, aux personnes morales et aux institutions publiques.
                        </p>
                    </div>
                    <div className="pt-4">
                        <div className="flex gap-4 pb-4">
                            <img src={displayicone44join} alt="icone" />
                            <h3 className="text-2xl text-text-black">Nos valeurs</h3>
                        </div>
                        <p className="text-text-black">
                            Être leader incontournable en prestations des services techniques modernes en mécanique, électricité, menuiserie et en informatique en République Démocratique du Congo.
                        </p>
                    </div>
                </div>
                <div className=" flex  flex-col gap-4 justify-center items-center w-1/3 ">
                    <div className="flex justify-center">
                        <img src={displayimage1join} alt="image casser" className="w-429" />
                    </div>
                    <div className="flex gap-4">
                        <img src={displayimage2join} alt="image casser" className="w-236"/>
                        <img src={displayimage3join} alt="image casser" className="w-236" />
                    </div>
                </div>
            </section>

            <section className="relative w-full px-36  mb-12">
                <div className="flex justify-center">
                    <div className="w-2/5 ">
                        <img src={displayimage4join} alt="image casser"  className="w-full"/>
                    </div>
                    <div className="w-2/5 bg-gray-300">

                    </div>
                </div>
                <section className="absolute inset-0 flex justify-center items-end z-10 h-full">
                    <div className="bg-white w-1/4 px-4 py-28 text-center text-text-orange font-bold">
                        <h2 className="text-4xl">Plus de 4 ans d'expertise technique</h2>
                    </div>
                </section>
            </section>

            <section className="w-full  px-36 pb-12">
                <div className="flex gap-4 pb-4">
                    <h2 className="text-4xl font-bold text-text-orange">Services</h2>
                    <div className="flex">
                        <img src={displayicone3join} alt="icone" />
                        <img src={displayicone3join} alt="icone" />
                        <img src={displayicone3join} alt="icone" />
                        <img src={displayicone3join} alt="icone" />
                        <img src={displayicone3join} alt="icone" />
                    </div>
                </div>
                <p className="pb-4 text-text-black">Nos réalisation reflète notre engagement envers la qualité et la satifaction client  </p>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded overflow-hidden">
                        <img src={displayimage4join} alt="image casser" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Intallation batiment</h3>
                            <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio neque unde blanditiis sequi vero impedit pariatur doloremque ratione iste placeat tempora rerum quo quidem accusamus, eius dolores atque et. Inventore.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded overflow-hidden">
                        <img src={displayimage6join} alt="" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Intallation panneau</h3>
                            <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ut totam odit velit recusandae nobis saepe nam possimus, praesentium quasi reiciendis cupiditate asperiores incidunt quod repellendus id. Rerum, officia. Minima?</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded overflow-hidden">
                        <img src={displayimage9join} alt="image casser" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Meuble personnalisé</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus? Nam inventore repudiandae facere dignissimos dicta quae in amet placeat, voluptates cupiditate distinctio corporis quis magni vitae atque optio ab.</p>
                        </div>
                    </div>
                </div>
                <div className="flex pt-8 justify-center gap-8">
                    <div  className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div  className="w-8 h-8 rounded-full bg-text-orange"></div>
                    <div  className="w-8 h-8 rounded-full bg-gray-200"></div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}


