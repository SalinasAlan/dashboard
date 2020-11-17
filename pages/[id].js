import styled from 'styled-components';
import { useRouter } from 'next/router';
import { withApollo } from '../graphql/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_RESTAURANT } from '../graphql/queries';
import Spinner from '../components/Spinner';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.primary};
    display: grid;
    grid-template-rows: 10% 40% 50%;
    grid-template-columns: 60%;
    grid-template-areas:
        "icon"
        "image"
        "info";
    justify-content: center;
`;

const Icon = styled.svg`
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
    grid-area: icon;
`;

const RestaurantInfoPage = () => {

    const route = useRouter();
    const { id } = route.query;
    const { loading, error, data } = useQuery(GET_RESTAURANT, {
        variables: { id }
    });

    if (loading) return <Spinner />;
    if (error) return <h1>Error</h1>;

    return (
        <RestaurantContainer>
            <Icon
                xmlns="http://www.w3.org/2000/Icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => route.back()}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </Icon>
            <RestaurantInfo {...data.restaurants[0]} />
        </RestaurantContainer>
    );
}

export default withApollo()(RestaurantInfoPage);