import bg from "../../assets/52979.jpg";
import NavBar from "../NavBar/NavBar";
import towns from "../../assets/imagenName.png";
const About = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <div className="relative isolate overflow-hidden py-24 sm:py-[36rem]">
          {/*bg-gray-900 ver fondo sm:py-32*/}
          <img
            src={bg}
            alt="about"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center sm:w-full sm:h-full"
          />
        </div>
        <section className="z-50 absolute top-[5rem] w-full py-[2rem] md:left-[10rem]">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group relative">
            <img className="w-full" src={towns} alt="Imagen de la tarjeta" />
            <div className="px-6 py-2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="text-base leading-7 text-gray-300 font-bold text-xl mb-2">
                NG - Estudio Contable
              </div>
              <p className="text-base leading-7 text-gray-300 text-xl text-stroke">
                Proyecto para un estudio contable, donde desarrollé un sitio web
                estático que proporciona información y servicios relacionados
                con el estudio contable. En este caso se usó JavaScript, React,
                TailwindCSS.
              </p>
            </div>
          </div>
        </section>
        <section className="z-50 absolute top-[20rem] w-full py-[2rem] md:left-[50rem]">
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
                usuarios y a promover el juego de manera efectiva a través de la
                plataforma web.
              </p>
            </div>
          </div>
        </section>
        <section className="z-50 absolute top-[40rem] w-full py-[2rem] md:left-[10rem]">
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
                así también servicios de nube y entrega de notificación para el
                mejor rendimiento.
              </p>
            </div>
          </div>
        </section>
        </section>
        </>
  );
};

export default About;
