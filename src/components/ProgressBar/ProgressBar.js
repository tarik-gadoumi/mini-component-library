/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
const STYLES = {
  small: {
    radius: 4,
    height: 8,
  },
  medium: {
    radius: 4,
    height: 12,
  },
  large: {
    radius: 8,
    height: 16,
    padding: 4,
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--radius': styles.radius + 'px',
        '--padding': styles.padding + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  /* overflow: hidden; */
`;
const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;
export default ProgressBar;
