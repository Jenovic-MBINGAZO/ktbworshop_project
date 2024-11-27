import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export function Footer(){
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

  const top = data.filter( value =>
      value.alt === "top"
   )

  const navbar = data.filter( value =>
    value.alt === "icone9"
  )

  const icone9 = data.filter( value =>
    value.alt === "icone8"
  )

  const icone11 = data.filter( value =>
    value.alt === "icone11"
  )

  const icone10 = data.filter( value =>
    value.alt === "icone10"
  )

  const  displayicone10 = icone10.map(image => 
    <Link to={""}  key={image.id}>
      <img src={image.src} alt={image.alt} />
    </Link>
  );

  const  displayicone11 = icone11.map(image => 
    <Link to={""} key={image.id }>
      <img src={image.src} alt={image.alt} />
    </Link>
  );
  const  displayicone9 = icone9.map(image => 
    <Link to={""} key={image.id }>
      <img src={image.src} alt={image.alt} />
    </Link>
  );

  const  displaynavbar = navbar.map(image => 
    <Link to={""} key={image.id }>
      <img src={image.src} alt={image.alt} />
    </Link>
  );

  const  displayImages= nameImages.map(image => 
    <Link to={""} key={image.id }>
      <img src={image.src} alt={image.alt} />
    </Link>
  );
  const displaytop = top.map(image => 
    <Link to={""} key={image.id }>
        <img src={image.src} alt={image.alt} />
    </Link>
  );
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex justify-between">

          <div>
            <h1 className="text-2xl font-bold mb-4">KTB <span className="text-text-orange">WORSHOP</span></h1>
            <div className="flex gap-4">
                {displayImages}
            </div>
          </div>

          <div>
            <h5 className="text-2xl font-bold mb-4">Liens pertinants</h5>
            <div className="flex gap-4 flex-col text-base">
                <div className="flex gap-4">
                  <strong>{displaynavbar}</strong>
                  <Link to={"/"} className="hover:text-red-300">Accueil</Link>
                </div>
                <div className="flex gap-4">
                  <strong>{displaynavbar}</strong>
                  <Link to={""} className="hover:text-red-300">Service</Link>
                </div>

                <div className="flex gap-4">
                  <strong>{displaynavbar}</strong>
                  <Link to={""} className="hover:text-red-300">Réalisations</Link>
                </div>

                <div className="flex gap-4">
                  <strong>{displaynavbar}</strong>
                  <Link to={""} className="hover:text-red-300">À propos</Link>
                </div>

            </div>
          </div>

          <div>
            <h5 className="text-2xl font-bold mb-4">Information contacts</h5>
            <div className="space-y-4">

              <div className="flex gap-4">
                <div className="flex items-center h-auto">
                  {displayicone9}
                </div>
                <div>
                  <p>Kinshasa : N°12, Avenue Mobutu, Q. Kimbuala, C. Mont-Ngafula</p>
                  <p>Goma : N°65, Avenue Mukosasenge, Q. Murara, C. Karisimbi</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center">
                  {displayicone11}
                </div>
                <div>
                  <Link to={"tel:+24397780559"} className=" hover:text-red-300" target="blank">
                    <p>+243 977 800 559</p>
                  </Link>
                  <Link to={"tel:+243854289047"} className="hover:text-red-300" target="blank">
                    <p>+243 854 289 047</p>
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center">{displayicone10}</div>
                <div >
                  <Link to={"mailto:cloviskambaleck@gmail.com"} className=" hover:text-red-300" target="blank">
                    <p>cloviskambaleck@gmail.com</p>
                  </Link>
                  <Link to={"https://bertinmulamdiocloud.com"} className=" hover:text-red-300" target="blank">
                    <p>bertinmulamdiocloud.com</p>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div className="flex gap-4 items-center  h-full">
                {displaytop}
            </div>
          </div>


        </div>

        <div className="mt-8 flex justify-center">
          <div className="text-xs text-gray-500">
            © KTBWorkshop 2024. Tous droits réservés. | Developed by Jenovic × Caleb
          </div>
        </div>

      </div>
    </div>
  );
}



