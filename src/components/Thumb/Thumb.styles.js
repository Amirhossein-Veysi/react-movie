import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 1.25rem;
  box-shadow: 0 0 10px #999;
  animation: animateThumb 0.5s;
  overflow: hidden;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;

  ${({ clickable }) =>
    clickable
      ? `
        :hover {
            div{
                opacity: 1;
            }
            p{
                opacity: 1;
            }
        }
        `
      : ""}

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.4s;
    left: 0;
    border-radius: 1.25rem;
    top: 0;
    box-shadow: 0 0 15px #999;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    padding: 7px;
    overflow: auto;
    transition: 0.4s;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background: #999;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb{
        background: #f1f1f1;
        border-radius: 3px;
    }
  }

  p{
      text-align: left;
      line-height: 1.5rem;
  }
`;
