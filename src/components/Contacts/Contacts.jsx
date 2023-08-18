import NavBar from "../NavBar/NavBar";
import bg from "../../assets/52979.jpg";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; 

const Contacts = () => {
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
        <section className="z-50 absolute top-[5rem] hidden sm:block flex">
          <div className="px-12 sm:px-12 sm:pt-32">
            <h3 className="text-base font-mono leading-7 text-gray-900">
              Información de contacto
            </h3>
            <p className="mt-1 max-w-2xl font-mono text-sm leading-6 text-gray-500">
              Dejanos tus dudas o consultas.
            </p>
          </div>
          <div className="mt-6 px-10 ">
            <dl className="">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                <dt className="text-sm hidden sm:block font-mono leading-6 text-white">
                  Whatsapp:{" "}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">
                  <span className="hidden sm:inline">(+54) 3585430913</span>
                  <a
                    href="https://wa.me/1234567891"
                    className="ml-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5 mx-[20.2rem] text-white" />
                  </a>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                <dt className="text-sm hidden sm:block font-mono leading-6 text-white">
                  Mail:{" "}
                </dt>
                <dd className="mt-1 text-sm  leading-6 text-white sm:col-span-2 sm:mt-0 ">
                  <span className="hidden sm:inline">
                    benjamingagnolo@gmail.com
                  </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=benjamingagnolo@gmail.com"
                    className="ml-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope className="h-5 w-5 lg:mx-[15.53rem] lg:top-[0.1rem] md:bottom-[1.2rem] md:relative md:mx-[19.9rem] text-white" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contacts;
