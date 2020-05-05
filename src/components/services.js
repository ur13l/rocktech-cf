import React, { Component } from "react";
import styled from "styled-components";
import ServiceCard from "./service-card"
import Link from "./items/link"
import ServiceDialog from "./service-dialog"

const ServicesWrapper = styled.div`
  .services {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
  }
  
  .link-services {
    padding: 0 15px;
    font-size: 11px;
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    .team-members {
      grid-template-columns: 12fr;
    }
    
    .services {
      grid-template-columns: 12fr;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .services {
      grid-template-columns: 6fr 6fr;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .services {
      grid-template-columns: 4fr 4fr 4fr;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .services {
      grid-template-columns: 4fr 4fr 4fr;
    }
  }
`;

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      optionModal: '',
    };
  }

  render() {
    return (
      <ServicesWrapper className={"container"}>
        <h1 style={{marginTop: '120px'}}></h1>
        <div className="services">
          <ServiceCard title="Análisis de Cumplimiento"
                       onClick={() => this.onCardClick(0)}/>
          <ServiceCard title="Análisis Financiero del Negocio"
                       onClick={() => this.onCardClick(1)}/>
          <ServiceCard title="Análisis Financiero de Costos"
                       onClick={() => this.onCardClick(2)}/>
          <ServiceCard title="Diseño Financiero de Negocio"
                       onClick={() => this.onCardClick(3)}/>
          <ServiceCard title="Valoración del Negocio"
                       onClick={() => this.onCardClick(4)}/>
          <ServiceCard title="Análisis de Valores"
                       onClick={() => this.onCardClick(5)}/>
        </div>
        <div className="link-services">
        </div>
        <ServiceDialog isOpen={this.state.openModal}
                      onClose={() => this.onCloseModal()}
                      option={this.state.optionModal} />
      </ServicesWrapper>
    );
  }

  onCardClick(card) {
    let option = '';

    switch (card) {
      case 0:
        option = 'ai';
        break;
      case 1:
        option = 'ia';
        break;
      case 2:
        option = 'mp';
        break;
      case 3:
        option = 'ds';
        break;
      case 4:
        option = 'ba';
        break;
      case 5:
        option = 'con';
        break;
    }

    this.setState({
      openModal: true,
      optionModal: option,
    });
  }

  onCloseModal() {
    this.setState({
      openModal: false,
      optionModal: '',
    });
  }
}

export default Services;
