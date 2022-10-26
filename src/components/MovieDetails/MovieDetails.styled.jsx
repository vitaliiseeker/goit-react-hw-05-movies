import styled from 'styled-components';

export const Box = styled.div`
display: flex;
padding: 15px;
border-bottom: 2px solid #c0c0c0;

@media screen and (max-width: 550px) {
  flex-direction: column;
  gap: 8px;
}

@media screen and (min-width: 550.02px) {
  flex-direction: row;
  gap: 15px;
}
`;

export const Inner = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 15px;
`;
