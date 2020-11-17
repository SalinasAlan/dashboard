import styled from 'styled-components';

const SpinnerContainer = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid ${props => props.theme.textColor}; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`;

const Spinnner = () => {
    return <SpinnerContainer />;
}

export default Spinnner;