import styled from 'styled-components';

export const Btn = styled.button`

    padding: 4px 8px;
    max-width: 200px;

    font-size: 14px;
    color: #000080;

    border: 1px solid #c0c0c0;
    border-radius: 4px;

    box-shadow: 0px 2px 4px #808080;
    outline: none;
    cursor: pointer;

    transition: background-color var(--animation);

    &:hover {
        background-color: #ea7e26;
    }

    @media screen and (max-width: 400px) {
        display: block;
    }

    @media screen and (min-width: (400px + 0.02)) {
        display: inline-block;
    }
`;

export const BtnLoader = styled.button` 
display: block;
min-width: 180px;
margin: 0 auto;
padding: 8px 16px;
color: #fff;
background-color: #3f51b5;
font-size: 18px;
font-weight: 500;
line-height: calc(24 / 18);
text-align: center;
border: 0;
border-radius: 2px;
text-decoration: none;
font-family: inherit;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14),
0px 1px 5px 0px rgba(0, 0, 0, 0.12);
transition: all var(--animation);
cursor: pointer;

&:hover,
&:focus {
  background-color: #303f9f;
}
`;