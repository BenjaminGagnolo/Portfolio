import bg from "../../assets/52979.jpg";
import NavBar from "../NavBar/NavBar";

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
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
      </div>
      <section className="z-50 absolute top-[5rem] w-full">
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
                {"Un poco sobre mi"}
              </h2>
              <p className="mt-4 text-white font-mono text-center bg-gray-900 rounded-lg">
                🌱 Hola 👋, mi nombre es Benjamin, tengo 24 años y actualmente
                soy FullStack Developer, aquí se encontrarán a una persona
                sociable, entusiasta y perseverante, con muchas ganas de seguir
                aprendiendo y demostrar las herramientas y capacidades que
                tiene.
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            </div>
          </div>
        </div>
      </section>
      <section className="z-50 absolute top-[30rem] w-full">
        <div className="bg-transparent">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-mono tracking-tight text-center text-white sm:text-4xl">
                {"Mis estudios"}
              </h2>
              <p className="mt-4 text-white font-mono text-center bg-gray-900 rounded-lg">
                Además de ser recibido de la academia Henry, tambien realice
                estudios en Coderhouse, donde adquiri los primeros conocimientos
                en JavaScrip, React y Redux. 
                {<br></br>}Cuento tambien con estudios
                avanzados en la carrera de Imgenieria en computacion, cursandos
                en la Universidad Nacional de Córdoba
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
    </>
  );
};

export default About;
