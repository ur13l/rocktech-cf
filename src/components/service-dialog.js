import React, { Component } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ServiceDialogWrapper = styled.div`
  .mayus {
    text-transform: uppercase !important;
  }
  .list{
    list-style: none;
  }
`;

const ServiceDialog = ({ option, isOpen, onClose }) => {
  let title, text, text1, text2, text3;

  const data = useStaticQuery(graphql`
    query {
      iconAi: file(relativePath: { eq: "01_service.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconIa: file(relativePath: { eq: "money.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconMp: file(relativePath: { eq: "costo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconDs: file(relativePath: { eq: "estrategia.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconBa: file(relativePath: { eq: "calc.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let imageData = data.iconAi.childImageSharp.fluid;

  switch (option) {
    case 'ai':
      title = 'Análisis de Cumplimiento';
      text = 'Diseño de estructura coporativa';
      text1 = 'Análisis Contable';
      text2 = 'Análisis Fiscal';
      text3 = 'Análisis Contractural';
      break;
    case 'ia':
      title = 'Análisis Financiero del Negocio';
      text = 'Análisis de estados financieros';
      text1 = 'Indicadores financieros';
      text2 = 'Evaluación de la situación financiera del negocio';
      imageData = data.iconIa.childImageSharp.fluid;
      break;
    case 'mp':
      title = 'Análisis Financiero de Costos';
      text = 'Servicios';
      text1 = 'Bienes'; 
      imageData = data.iconMp.childImageSharp.fluid;
      break;
    case 'ds':
      title = 'Diseño de Estrategia Financiera';
      text = 'Modelo de negocio';
      text1 = 'Estrategia comercial';
      text2 = 'Estructura de capital';
      imageData = data.iconDs.childImageSharp.fluid;
      break;
    case 'ba':
      title = 'Valoración del Negocio';
      text = 'Valoración de negocios en marcha';
      text1 = 'Valoración de proyectos de inversión';
      text2 = 'Valoración de intangibles';
      imageData = data.iconBa.childImageSharp.fluid;
      break;
  }

  return (
      <Dialog open={isOpen}
              onClose={() => onClose()}
              fullWidth={true}
              maxWidth="sm"
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
        <DialogContent>
          <ServiceDialogWrapper>
            <h3 id="alert-dialog-title" className="mayus">{title}</h3>
            <ul className="list">
            <li id="alert-dialog-description">{text}</li>
            <li id="alert-dialog-description">{text1}</li>
            <li id="alert-dialog-description">{text2}</li>
            <li id="alert-dialog-description">{text3}</li>
            </ul>
            <Img
              fluid={imageData}
              imgStyle={{
                objectFit: "contain", width: '100%', height: '100%', marginBottom: 0,
                objectPosition: 'right'
              }}
              style={{ maxHeight: '120px' }}
            />
          </ServiceDialogWrapper>
        </DialogContent>
      </Dialog>
  );
};

ServiceDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

export default ServiceDialog;
