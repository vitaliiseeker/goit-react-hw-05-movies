import styled from 'styled-components';

export const List = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-auto-flow: 260px;
grid-gap: 16px;

`;

export const Item = styled.li`
 display: flex;
 flex-direction: column;
 gap: 8px;
 margin: 10px;
 padding: 10px;
`;
