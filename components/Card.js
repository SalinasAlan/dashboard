import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled.div`
    width: 80%;
    background-color: #536471;
    border-radius: 10px;
    border: 1px solid rgba(247,251,255,0.3);
    margin: 20px;

    @media screen and (max-width: 767px){
        padding: 15px;
    }
`;

const Image = styled.img`
    width:200px;
    float: left;
    margin: 15px;

    @media screen and (max-width: 767px){
        float: none;
    }
`;

const Icon = styled.svg`
    width: 20px;
    margin-right: 10px;
`;

const CardItem = styled.p`
    display: flex;
`;

const Anchor = styled.a`
    display: inline-block;
    margin-bottom: 20px;
    cursor: pointer;
    color: ${props => props.theme.textHoverColor};

    :hover{
        color: ${props => props.theme.textHoverColorSecondary};
    }
`;

const Card = ({ id, name, address, phone, photos }) => {
    return (
        <CardContainer>
            <Image src={photos[0].url_photo} alt={name}/>
            <CardItem>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </Icon>
                {name}
            </CardItem>
            <CardItem>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </Icon>
                {address}
            </CardItem>
            <CardItem>
                <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </Icon>
                {phone}
            </CardItem>
            <Link href={`/${id}`} >
                <Anchor>
                    More details...
                </Anchor>
            </Link>
        </CardContainer>
    );
}

export default Card;