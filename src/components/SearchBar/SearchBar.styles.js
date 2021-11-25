import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: var(--darkGray);
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    border-radius: 40px;
    margin: 0 auto;
    background: var(--midGray);
    color: var(--white);

    img{
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input{
        width: 100%;
        height: 100%;
        background: transparent;
        border-radius: 40px;
        padding-left: 60px;
        color: var(--white);
        outline: 0;
        border: 0;
        font-size: var(--fontSmall);
        letter-spacing: 1px;
        transition: .3s;

        :focus{
            background: #252525;
        }
    }
`;