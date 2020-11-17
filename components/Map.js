import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Spinner from './Spinner';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 767px){
    position: absolute;
    top: 20%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    }
`;

const Map = ({ children, loading, error }) => {

    const MAPBOX_TOKEN = process.env.MAP_TOKEN;

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 19.4265914,
        longitude: -99.1709005,
        zoom: 13
    });

    if (loading) return <Spinner />;
    if (error) return <h1>Error</h1>;

    return (
        <MapContainer>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                {
                    children
                }
            </ReactMapGL>
        </MapContainer>
    )
}

export default Map;