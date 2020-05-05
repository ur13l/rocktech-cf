import React, {Component} from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  width: 100%;
  margin-top: 50px !important;
  border-bottom: solid 1px #df8d08;
`;

class Divider extends Component {
  render() {
    return (<DividerWrapper className={"container"}/>)
  }
}

export default Divider;
