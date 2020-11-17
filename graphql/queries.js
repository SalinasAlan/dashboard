import gql from 'graphql-tag';

export const GET_RESTAURANTS = gql`
    query MyQuery {
            restaurants {
            id
            name
            address
            phone
            photos {
                url_photo
            }
        }
    }
`;

export const GET_RESTAURANT = gql`
    query MyQuery ($id: uuid) {
        restaurants(where: {id: {_eq: $id}}) {
            name
            address
            phone
            website
            menu
            schedules {
                hours
            }
            photos {
                url_photo
            }
        }
    }
`;

export const GET_LOCATIONS = gql`
    query MyQuery {
        locations {
            id
            lat
            long
            restaurant {
                id
                name
                photos {
                    url_photo
                }
            }
        }
    }
`;