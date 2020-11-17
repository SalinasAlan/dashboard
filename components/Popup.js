import styled from 'styled-components';
import { Popup } from 'react-map-gl';

const Name = styled.p`
    color: black;
`;

const Anchor = styled.a`
    color: black;
    cursor: pointer;
`;

const Image = styled.img`
    width: 200px;
`;

const PopupCard = ({ long, lat, restaurant, close }) => {
    return (
        <Popup
            longitude={long}
            latitude={lat}
            closeButton={true}
            closeOnClick={false}
            onClose={() => close()}
        >
            <Image src={restaurant.photos[0].url_photo} />
            <Name>{restaurant.name}</Name>
        </Popup>
    )
}

export default PopupCard;