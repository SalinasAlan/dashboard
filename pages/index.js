import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textColor};
`;

const Anchor = styled.a`
    border: 2px solid ${props => props.theme.textColor};
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;

    :hover{
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.textColor};
    }
`;

const Header3 = styled.h3`
    text-align: center;
    margin-bottom: 50px;
`;

const Header1 = styled.h1`
    text-align: center;
`;

export default function Home() {
    return (
        <HomeContainer>
            <Head>
                <title>Home</title>
            </Head>
                <Header1>
                    Welcome to findMyRestaurant 😃
                </Header1>
                <Header3>
                    Discover beautiful places to eat in CDMX
                </Header3>
                <Link href='/restaurants'>
                    <Anchor>Discover</Anchor>
                </Link>
        </HomeContainer>
    )
}
