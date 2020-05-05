import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ServiceCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 12fr;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  padding: 0 10px;
  cursor: pointer;
  
  .custom-card {
    width: 100%;
    background: white;
    height: 100%;
    padding: 15px;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
    text-align: center;
    display: table;
  }
  
  .custom-card:hover .custom-title {
    color: #DF8D08 !important;
  }
  
  .custom-title {
    display: table-cell;
    vertical-align: middle;
    color: black;
  }
`;

class ServiceCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ServiceCardWrapper onClick={() => this.onCardClick()}>
        <div className="custom-card hvr-grow">
          <h3 className="custom-title">{this.props.title}</h3>
        </div>
      </ServiceCardWrapper>
    )
  }

  onCardClick() {
    if (this.props.onClick){
      return this.props.onClick();
    }
  }
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ServiceCard;
