import NavBar from "../NavBar/NavBar";
import towns from "../../assets/imagenName.png";
const About = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <div className="relative isolate overflow-hidden py-[22rem] sm:py-[46rem] bg-gray-900">    
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <section>
          <section className="z-50 absolute top-[5rem] w-full py-[2rem] md:left-[10rem] hidden sm:block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group relative">
              <img className="w-full" src={towns} alt="Imagen de la tarjeta" />
              <div className="px-6 py-2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="text-base leading-7 text-gray-300 font-bold text-xl mb-2">
                  NG - Estudio Contable
                </div>
                <p className="text-base leading-7 text-gray-300 text-xl text-stroke ">
                  Proyecto para un estudio contable, donde desarrollé un sitio
                  web estático que proporciona información y servicios
                  relacionados con el estudio contable. En este caso se usó
                  JavaScript, React, TailwindCSS.
                </p>
              </div>
            </div>
          </section>
          <section className="z-50 absolute top-[20rem] w-full py-[2rem] md:left-[50rem] hidden sm:block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group relative ">
              <img className="w-full" src={towns} alt="Imagen de la tarjeta" />
              <div className="px-6 py-2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="text-base leading-7 text-gray-300 font-bold text-xl mb-2">
                  Towns
                </div>
                <p className="text-base leading-7 text-gray-300 text-xl text-stroke">
                  Diseñé y creé un sitio web para un juego utilizando las
                  tecnologías React y TailwindCSS. Fui responsable de la
                  implementación de la interfaz de usuario, la creación de
                  componentes interactivos y la optimización del rendimiento del
                  sitio. Mi contribución ayudó a mejorar la experiencia de los
                  usuarios y a promover el juego de manera efectiva a través de
                  la plataforma web.
                </p>
              </div>
            </div>
          </section>
          <section className="z-50 absolute top-[40rem] w-full py-[2rem] md:left-[10rem] hidden sm:block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group relative">
              <img className="w-full" src={towns} alt="Imagen de la tarjeta" />
              <div className="px-6 py-2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="text-base leading-7 text-gray-300 font-bold text-xl mb-2">
                  EasyLearning
                </div>
                <p className="text-base leading-7 text-gray-300 text-xl text-stroke">
                  API REST en Node.js bajo la metodología SCRUM, Esta permite
                  comprar y vender cursos, donde cada usuario puede monitorear
                  tanto sus cursos adquiridos como así también aquellos creados.
                  Se trabajó con JavaScript, React, Redux y CSS, además se
                  incorporó Node.js, Auth0, Express, PostgreSQL y Firebase, como
                  así también servicios de nube y entrega de notificación para
                  el mejor rendimiento.
                </p>
              </div>
            </div>
          </section>
          <section className="z-50 absolute top-[55rem] w-full py-[2rem] md:left-[50rem] hidden sm:block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group relative">
              <img className="w-full" src={towns} alt="Imagen de la tarjeta" />
              <div className="px-6 py-2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="text-base leading-7 text-gray-300 font-bold text-xl mb-2">
                  Towns
                </div>
                <p className="text-base leading-7 text-gray-300 text-xl text-stroke">
                  Diseñé y creé un sitio web para un juego utilizando las
                  tecnologías React y TailwindCSS. Fui responsable de la
                  implementación de la interfaz de usuario, la creación de
                  componentes interactivos y la optimización del rendimiento del
                  sitio. Mi contribución ayudó a mejorar la experiencia de los
                  usuarios y a promover el juego de manera efectiva a través de
                  la plataforma web.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="sm:hidden"> 
              <h1>hidden en lg</h1>
        </section>
      </div>
    </>
  );
};

export default About;
