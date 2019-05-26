import React from 'react';
import styled from 'styled-components'

const Grid = () => {
  return (
    <GridWrapper>
      <p>Grid Test</p>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`
export default Grid;