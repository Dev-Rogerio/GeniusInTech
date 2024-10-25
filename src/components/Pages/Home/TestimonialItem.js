import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const testimonials = [
    {
      logoSrc: "path-to-client-logo1.jpg",
      text: "Nosso sistema ficou muito mais eficiente graças à consultoria da Genius In Tech.",
      client: "Cliente C, CEO da Empresa Y"
    },
    {
      logoSrc: "path-to-client-logo2.jpg",
      text: "A equipe da Genius In Tech transformou nossa maneira de trabalhar!",
      client: "Cliente D, Gerente de TI da Empresa X"
    },
  ];

  return (
    <div className="testimonials-section">
      {testimonials.map((testimonial, index) => (
        <TestimonialItem
          key={index}
          logoSrc={testimonial.logoSrc}
          text={testimonial.text}
          client={testimonial.client}
        />
      ))}
    </div>
  );
};

export default Testimonials;
