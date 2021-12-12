import React,{ useState } from 'react'
import Styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars= useSelector(selectCars);
    console.log(cars);
   return (
        
        <Container>
            <a>
           <img src='/images/logo.svg' />
        </a>
       <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>

       </Menu>
       <RightMenu>
           <a href='#'>Shop</a>
           <a href='#'>Tesla Account</a>
           <CustomMenu onClick={()=>setBurgerStatus(true)}> 

            </CustomMenu>
       </RightMenu>
       <BargerNav show={burgerStatus}>
           <CloseWrapper>
           <CustomClose onClick={()=>setBurgerStatus(false)} />
            </CloseWrapper> 

     {cars.map((users) => (
       <li><a href='#'>{users}</a></li>
     ))}

           <li><a href='#'>Existing Inventory</a></li>
           <li><a href='#'>Used Inventory</a></li>
           <li><a href='#'>Trade-In</a></li>
           <li><a href='#'>Test Drive</a></li>
           <li><a href='#'>Fleet and Business</a></li>
           <li><a href='#'>Cybertruck</a></li>
           <li><a href='#'>Roadster</a></li>
           <li><a href='#'>Semi</a></li>
           <li><a href='#'>Commercial Energy</a></li>
           <li><a href='#'>Utilities</a></li>
           <li><a href='#'>Energy</a></li>
           <li><a href='#'>Charging</a></li>

       </BargerNav>
        </Container>

    )
}

export default Header

const Container = Styled.div`
min-height: 60px;
position: fixed; 
display:flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 10;
`

const Menu = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width: 768px) {
    display: none;
}
`

const RightMenu = Styled.div`
 display: flex;
 align-items: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}

`

const CustomMenu = Styled(MenuIcon)`
cursor: pointer;

`

const BargerNav = Styled.div`
position: fixed;
top:0;
bottom:0;
right: 0;
background: white;
width: 300px;
z-index:16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
trasition: transform 0.2s;
li {
    padding 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

}

a {
    font-weight:600;

}
`

const CustomClose = Styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = Styled.div`
display: flex;
justify-content: flex-end;

`