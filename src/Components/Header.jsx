import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/carSlice/carSlice'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const cars = useSelector(selectCars)

    const toggleMenuHandler = () => {
        setIsMenuOpen(true)
    }

    const closeMenuHandler = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index}>{car}</a>
                ) )}
            </Menu>
            <RigthMenu>
                <a>Shop</a>
                <a>Tesla Account</a>
                <CustomMenu onClick={toggleMenuHandler} />
            </RigthMenu>
            <BurgerNav show={isMenuOpen}>
                <CloseWrapper >
                    <CustomClose onClick={closeMenuHandler} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li><a key={index}>{car}</a></li>
                ) )}
                <li><a>Existing Inventory</a></li>
                <li><a>Use Inventory</a></li>
                <li><a>Trade-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>Roadster</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header;


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RigthMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 1000;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s ease-in-out;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);
        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`