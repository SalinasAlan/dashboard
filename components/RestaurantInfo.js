import styled from 'styled-components';

const RestaurantInfoContainer = styled.div`
    grid-area: info;
    display: grid;
    place-content: center;
`;

const ImageContainer = styled.div`
    display: grid;
    grid-area: image;
    width: 350px;
    place-self: center;
`;

const Image = styled.img`
    width: 100%;
`;

const RestaurnatItem = styled.p`
    display: flex;
`;

const RestaurantAnchor = styled.a`
    display: flex;
`;

const Icon = styled.svg`
    width: 25px;
    margin-right: 15px;
`;

const RestaurantInfo = ({ name, address, phone, website, menu, schedules, photos }) => {
    return (
        <>
            <ImageContainer>
                <Image src={photos[0].url_photo} alt={name} />
            </ImageContainer>
            <RestaurantInfoContainer>
                <RestaurnatItem>
                    <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </Icon>
                    {name}
                </RestaurnatItem>
                <RestaurnatItem>
                    <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </Icon>
                    {address}
                </RestaurnatItem>
                <RestaurnatItem>
                    <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </Icon>
                    {phone}
                </RestaurnatItem>
                {
                    menu ?
                        <RestaurantAnchor href={menu} target="_black">
                            <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </Icon>
                            Menu
                        </RestaurantAnchor>
                        :
                        null
                }
                <RestaurnatItem>
                    <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </Icon>
                    {schedules[0].hours}
                </RestaurnatItem>
                <RestaurantAnchor href={website} target="_black">
                    <Icon xmlns="http://www.w3.org/2000/Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </Icon>
                    {website}
                </RestaurantAnchor>
            </RestaurantInfoContainer>
        </>
    );
}

export default RestaurantInfo;