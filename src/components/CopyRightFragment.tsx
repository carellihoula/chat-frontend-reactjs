//import React from "react";

import styled from "styled-components";

type Props = {};

function CopyRightFragment({}: Props) {
  return (
    <Container>Copyright © 2024 Carel Ntsoumou. All Rights Reserved.</Container>
  );
}

export default CopyRightFragment;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  color: #6d6f78;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background: #383a40;
  width: 100%;
  height: auto;
`;
