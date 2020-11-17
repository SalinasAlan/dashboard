import Head from 'next/head';
import App from '../components/App';
import Card from '../components/Card';
import { withApollo } from '../graphql/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_RESTAURANTS } from '../graphql/queries';
import Restaurants from '../components/Restaurants';

const RestaurantsPage = () => {

    const { loading, error, data } = useQuery(GET_RESTAURANTS);
    

    return (
        <div>
            <Head>
                <title>Restaurants</title>
                <meta name="description" content="All the beautiful places to eat in CDMX"/>
            </Head>

            <App>
                <Restaurants loading={loading} error={error}>
                    {
                        !loading &&
                        data.restaurants.map((restaurant => {
                            return <Card key={restaurant.id} {...restaurant} />
                        }))
                    }
                </Restaurants>
            </App>
        </div>
    )
}

export default withApollo()(RestaurantsPage);
