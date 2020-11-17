import { useState } from 'react';
import Head from 'next/head';
import App from '../components/App';
import { withApollo } from '../graphql/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATIONS } from '../graphql/queries';
import MapComponent from '../components/Map';
import Marker from '../components/Marker';
import Popup from '../components/Popup';

const Map = () => {

    const { loading, error, data } = useQuery(GET_LOCATIONS);
    const [restaurant, setRestaurant] = useState();

    const openPopup = (id) => {
        const restaurantData = data.locations.find(loc => {
            return loc.id == id;
        });
        setRestaurant(restaurantData);
    }

    const closePopup = () => {
        setRestaurant(null);
    }

    const renderPopup = () => {
        return (
            restaurant &&
            <Popup {...restaurant} close={setRestaurant} />
        )
    }

    return (
        <div>
            <Head>
                <title>Map</title>
                <meta name="description" content="Find the location of beautiful places to eat in CDMX" />
            </Head>
            <App>
                <MapComponent
                    loading={loading}
                    error={error}
                >
                    <Marker data={data} loading={loading} openPopup={openPopup} closePopup={closePopup} />
                    {renderPopup()}
                </MapComponent>
            </App>
        </div>
    )
}

export default withApollo()(Map);