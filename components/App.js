import styled from 'styled-components';
import Sidebar from './Sidebar'

const App = ({ children }) => {
    return (
        <AppContainer>
            <Sidebar />
            <Main>
                {children}
            </Main>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: auto;
    grid-template-areas:
        "sidebar main";
    
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
    }
`;

const Main = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.primary};
    overflow-y: auto;
    color: ${props => props.theme.textColor};
    align-items: center;
`;

export default App;