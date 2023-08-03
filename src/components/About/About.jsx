import bg from "../../assets/52979.jpg";
import NavBar from "../NavBar/NavBar";
import towns from "../../assets/imagenName.png"
const About = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <div className="relative isolate overflow-hidden py-24 sm:py-[50rem]">
        {/*bg-gray-900 ver fondo sm:py-32*/}
        <img
          src={bg}
          alt="about"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center sm:w-full sm:h-full"
        />
      </div>
      <section className="z-50 absolute top-[5rem] w-full py-[2rem]">
        <div className="bg-transparent">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid gap-4">
              <img
                src={towns}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 lg:hover:scale-105 transition-transform duration-300 lg:h-[24rem] lg:w-[35rem] sm:h-[12rem] sm:w-[22rem]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-mono tracking-tight text-center text-white sm:text-4xl">
                {"Towns"}
              </h2>
              <p className="mt-4 text-black text-lg font-mono font-bold text-center bg-gradient-to-r from-blue-500 via-blue-600 via-blue-700 to-blue-800  rounded-t-[0.5rem] rounded-b-[2rem]">
                Diseñé y creé un sitio web para un juego utilizando las
                tecnologías React y TailwindCSS. Fui responsable de la
                implementación de la interfaz de usuario, la creación de
                componentes interactivos y la optimización del rendimiento del
                sitio. Mi contribución ayudó a mejorar la experiencia de los
                usuarios y a promover el juego de manera efectiva a través de la
                plataforma web.
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            </div>
          </div>
        </div>
      </section>
      <section className="z-50 absolute top-[30rem] w-full py-[2rem]">
        <div className="bg-transparent">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-mono tracking-tight text-center text-white sm:text-4xl">
                {"SPA estudio contable"}
              </h2>
              <p className="mt-4 text-black text-lg font-mono font-bold text-center bg-gradient-to-r from-blue-500 via-blue-600 via-blue-700 to-blue-800 rounded-t-[0.5rem] rounded-b-[2rem]">
                Proyecto para un estudio contable, donde desarrollé un sitio web
                estático que proporciona información y servicios relacionados
                con el estudio contable. En este caso se usó JavaScript, React,
                TailwindCSS.
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            </div>
            <div className="grid gap-4">
              <img
                src={bg}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 lg:hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="z-50 absolute top-[56rem] w-full py-[2rem]">
        <div className="bg-transparent">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid gap-4">
              <img
                src={bg}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 lg:hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl font-mono tracking-tight text-center text-white sm:text-4xl">
                {"E-learning"}
              </h2>
              <p className="mt-4 text-black text-lg font-mono font-bold text-center bg-gradient-to-r from-blue-500 via-blue-600 via-blue-700 to-blue-800  rounded-t-[0.5rem] rounded-b-[2rem]">
                API REST en Node.js bajo la metodología SCRUM, Esta permite
                comprar y vender cursos, donde cada usuario puede monitorear
                tanto sus cursos adquiridos como así también aquellos creados.
                Se trabajó con JavaScript, React, Redux y CSS, además se
                incorporó Node.js, Auth0, Express, PostgreSQL y Firebase, como
                así también servicios de nube y entrega de notificación para el
                mejor rendimiento.
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
