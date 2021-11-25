import styled from 'styled-components';

export const Spinner = styled.div`
    border: 5px solid var(--lightGray);
    border-top: 5px solid var(--midGray);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation-delay: 1s;
    animation: spin 1s linear infinite;
    margin: 20px auto;

    @keyframes spin{
        0%{
            transform: rotate(0);
        }
        47%{
            transform: rotate(270deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;