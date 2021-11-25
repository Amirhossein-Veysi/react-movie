import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-content: center;
    padding: 0 20px;
    min-height: 100px;
    background: var(--darkGray);
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .column{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--midGray);
        border-radius: .5rem;
        margin: 20px;
        flex: 1;

        :first-child {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 768px){
        display: block;

        .column{
            margin: 20px 0;
        }
    }
`;