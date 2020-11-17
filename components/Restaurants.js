import Spinner from './Spinner';

const Restaurants = ({children, loading, error}) => {

    if (loading) return <Spinner />;
    if (error) return <h1>Error</h1>;

    return (
        <>
            <h1>Restaurants</h1>
            {children}
        </>
    );
}

export default Restaurants;