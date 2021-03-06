import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './atoms/ServiceCard';


const servicesData = [
    {
      id: 1,
      title: "Phone",
      src: "/assets/images/phone.png",
    },
    {
      id: 2,
      title: "Broadband",
      src: "/assets/images/triimage2.jpg",
    },
    {
      id: 3,
      title: "Fiber",
      src: "/assets/images/tv_zoom.png",
    },
    {
      id: 4,
      title: "Television",
      src: "/assets/images/triimage3.jpg",
    },
  ];

function Services() {
  return (
    <section id="img_cards" className="my-5">
        <Container>
          <Row>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                title={service.title}
                home
              />
            ))}
          </Row>
        </Container>
      </section>
  )
}

export default Services
