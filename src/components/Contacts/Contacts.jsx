import NavBar from "../NavBar/NavBar";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <div className="relative isolate overflow-hidden py-24 sm:py-[20rem] bg-gray-900">         
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
        </div>
        <section className="z-50 absolute top-[5rem] hidden sm:block flex">
          <div className="px-12 sm:px-12 sm:pt-32">
            <h3 className="text-base font-mono leading-7 text-gray-900">
              Información de contacto
            </h3>
            <p className="mt-1 max-w-2xl font-mono text-sm leading-6 text-white">
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
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                <dt className="text-sm hidden sm:block font-mono leading-6 text-white">
                  LinkedIn:{" "}
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
                  GitHub:{" "}
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
            </dl>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contacts;
