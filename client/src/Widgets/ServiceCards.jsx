import { useState } from "react";
import service1 from "../assets/images/service1.webp";
import service2 from "../assets/images/service2.webp";
import service3 from "../assets/images/service3.webp";
import service4 from "../assets/images/service4.webp";
import { useTranslation } from "react-i18next";

export const ServiceCards = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(1);

  const handleCardHover = (cardNumber) => {
    const serviceBackground = document.getElementById("service_background");

    serviceBackground.style.transform = "scale(1.075)";
    setHoveredCard(cardNumber);
    serviceBackground.style.opacity = 0.9;

    setTimeout(() => {
      serviceBackground.style.opacity = 1;
      serviceBackground.style.transform = "scale(1)";
    }, 100);
  };

  const getCardImage = () => {
    switch (hoveredCard) {
      case 1:
        return service1;
      case 2:
        return service2;
      case 3:
        return service3;
      case 4:
        return service4;
      default:
        return null;
    }
  };

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordion = (cardNumber) => {
    setOpenAccordion((prevCard) =>
      prevCard === cardNumber ? null : cardNumber
    );
    setHoveredCard(cardNumber);
  };

  return (
    <>
      <div className="hidden xl:flex services_container w-full grid grid-cols-4 relative overflow-hidden transition-all duration-300">
        <img
          id="service_background"
          src={getCardImage()}
          alt={`Card ${hoveredCard}`}
          className="absolute inset-0 w-full h-full transform transition object-cover"
          style={{
            zIndex: 1,
          }}
        />

        <div className="flex">
        {t("services.serviceCards", { returnObjects: true }).map((service) => (
          <div
            key={service.cardNumber}
            className={`service_card transition flex-1 ${
              hoveredCard === service.cardNumber ? "bg-black/40  " : "border-r"
            }`}
            onMouseEnter={() => handleCardHover(service.cardNumber)}
            style={{
              zIndex: 2,
            }}
          >
            <div
              className={`flex gap-3 items-center p-6 transform transition duration-500 ${
                hoveredCard === service.cardNumber
                  ? "translate-y-0"
                  : "translate-y-full"
              }`}
            >
              <span className="text-5xl text-cyan-500 font-bold">
                {service.cardNumber}
              </span>
              <h3 className="text-2xl text-white font-bold">{service.title}</h3>
            </div>
            <p
              className={`text-lg text-white px-6 pb-6 relative transform transition duration-300 ${
                hoveredCard === service.cardNumber
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
            >
              {service.description}
            </p>{" "}
          </div>
        ))}
        </div>
      </div>

      <div className="xl:hidden flex flex-col transition-all duration-500 items-center w-[90%] md:w-[60%]">
        {t("services.serviceCards", { returnObjects: true }).map(
          ({ cardNumber, title, description }) => (
            <div
              key={cardNumber}
              className="flex flex-col w-full overflow-hidden rounded-lg select-none "
            >
              <div
                onClick={() => handleAccordion(cardNumber)}
                className={`w-full flex items-center gap-6 border-b-2 border-b-cyan-400 transition-all duration-500 select-none px-4 py-3 ${
                  openAccordion === cardNumber ? "bg-black/0" : "bg-black/5"
                } cursor-pointer`}
              >
                <span className="text-6xl text-cyan-400 font-bold ">
                  {cardNumber}
                </span>
                <h3 className="text-2xl text-white font-bold">{title}</h3>
              </div>

              <div
                className={`accordionItem flex flex-col gap-4 transition-all duration-500 w-full p-4 overflow-hidden ${
                  openAccordion === cardNumber
                    ? "translate-y-0 h-auto"
                    : "translate-y-full h-0"
                } `}
              >
                <img
                  src={getCardImage()}
                  className=" rounded-lg"
                  alt={`Card ${cardNumber}`}
                />
                <p className="text-white text-lg">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
