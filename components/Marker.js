import styled from 'styled-components';
import { Marker } from 'react-map-gl';
import { useRouter } from 'next/router'

const Icon = styled.svg`
width: 20px;
cursor: pointer;
color: ${props => props.theme.locationIconColor};
`;

const MarkerIcon = ({ data, loading, openPopup, closePopup }) => {

    const route = useRouter();

    const openRestaurant = (id) => {
        console.log(id);
        route.push(id)
    };

    return (
        <>
            {
                !loading &&
                data.locations.map(loc => (
                    <Marker key={loc.id} latitude={loc.lat} longitude={loc.long}>
                        <Icon
                            xmlns="http://www.w3.org/2000/Icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => openRestaurant(loc.restaurant.id)}
                            onMouseEnter={() => openPopup(loc.id)}
                            onMouseLeave={() => closePopup()}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </Marker>
                ))
            }
        </>
    )
}

export default MarkerIcon;