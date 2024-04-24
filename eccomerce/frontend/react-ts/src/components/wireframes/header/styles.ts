import styled from "styled-components";

export const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
`

export const ContainerHeader = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 125px;
background-color: var(--green-strength);
`

export const LogoFolhaRainha = styled.img`
margin-top: 35px;
width: 150px;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
`

export const SearchInput = styled.input`
min-width: 300px;
max-width: 500px;
font-size: 1rem;
height: 30px;
padding: 0.5rem;
border-radius: 15px;
border: 2px solid var(--yellow-strength);
font-family: var(--font-produtos-name);
font-size: 1.6rem;
`

export const HeaderSections = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
color: var(--text-color-white);
cursor: pointer;
position: relative;
`

export const AccountOptionsContainer = styled.div`
display: none;
position: absolute;
top: 35px;
left: 0;
width: 200px;
background-color: white;
border-radius: 10px;
border: 1px solid var(--yellow-strength);
transition: cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const ServiceOptionsContainer = styled(AccountOptionsContainer)`
width: 260px;
`

export const ServiceIcons = styled.img`
margin: 0.2rem;
color: var(--yellow-strength);
width: 24px;
height: 24px;
`

export const ListaUL = styled.ul`
list-style: none;
`

export const ListaLI = styled.li`
margin: 1rem;
display: flex;
align-items: center;
justify-content: left;
`

export const ListaHREF = styled.a< { $marginLeft?: string } >`
margin-left: ${props => props.$marginLeft || "0px"};
 
 &hover {
   text-decoration: underline;
 }
`

export const CarrinhoValue = styled.p`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--yellow-strength);
width: 23px;
height: 23px;
font-size: 1.3rem;
margin-left: 0.5rem;
padding: 0.3rem;
border-radius: 50%;
color: var(--green-strength);
`

export const CategoriasNavContainer = styled.nav`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--green-light);
border: 1px solid var(--yellow-strength);
width: 100%;
`

export const CategoriasUL = styled.ul`
display: flex;
align-items: center;
justify-content: center;
list-style: none;
`

export const CategoriasLI = styled.li`
margin: 1rem 1.5rem;
`

export const CategoriasItens = styled.a`
text-decoration: none;
color: var(--text-color-white);
font-size: 1.2rem;
`