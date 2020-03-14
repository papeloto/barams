import { h } from 'preact';
import styled from 'styled-components';

const Box = styled.a`
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  padding: 16px 12px;
  width: 100%;
`;

export default Box;
