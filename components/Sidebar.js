import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarContainer = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-right: 1px solid rgba(247, 251, 255, 0.2);
    background-color: ${props => props.theme.primary};
    overflow-y: auto;
    color: ${props => props.theme.textColor};

    @media screen and (max-width: 767px){
        display: grid;
        height: 20%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "home restaurants map";
    }
`;

const NavItem = styled.div`
    padding: 15px;
    
    :hover{
        color: ${props => props.theme.textHoverColor};
    }

    @media screen and (max-width: 767px){
        padding: 5px;
        place-self: center;
    }
`;

const Icon = styled.svg`
    width: 20px;
    margin-right: 10px;

    @media screen and (max-width: 767px){
        margin-right: 5px;
    }
`;

const Anchor = styled.a`
    cursor: pointer;
`;

const Sidebar = () => {

    const route = useRouter();

    const styleRestaurants = {
        "backgroundColor": `${route.pathname == '/restaurants' ? "#536471" : null}`
    }

    const styleMap = {
        "backgroundColor": `${route.pathname == '/map' ? "#536471" : null}`
    }

    return (
        <SidebarContainer>
            <NavItem>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </Icon>
                <Link href='/'>
                    <Anchor>Home</Anchor>
                </Link>
            </NavItem>

            <NavItem style={styleRestaurants}>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </Icon>
                <Link href='/restaurants'>
                    <Anchor>Restaurants</Anchor>
                </Link>
            </NavItem>
            <NavItem style={styleMap}>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </Icon>
                <Link href='/map'>
                    <Anchor>Map</Anchor>
                </Link>
            </NavItem>
        </SidebarContainer>
    );
}

export default Sidebar;