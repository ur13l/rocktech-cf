import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const LinkWrapper = styled.div`
  width: 100%;
  text-align: ${props => props.align ? props.align : 'left'};
  
  .custom-link {
    color: #df8d08;
    font-weight: bold;
    text-decoration: ${props => props.decoration ? props.decoration : 'none'};
  }
`;

class Link extends Component {
  render() {
    return (
      <LinkWrapper decoration={this.props.decoration}
                   align={this.props.align}>
        <a className="custom-link" href={this.props.href}>{this.props.label}</a>
      </LinkWrapper>
    )
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  decoration: PropTypes.oneOf([
    'underline',
    'overline',
    'line-through',
    'none'
  ])
};

export default Link;
