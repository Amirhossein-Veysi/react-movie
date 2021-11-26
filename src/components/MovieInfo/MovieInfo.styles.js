import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#333"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: fade 1s;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  box-shadow: 0 0 30px #444;

  img {
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    max-height: none;

    img {
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors-genres {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: var(--white);
    color: var(--darkGray);
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media only screen and (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }

  .genres {
    .genre {
      padding: 7px;
      margin: 10px;
      background: #f1f1f1;
      color: #555;
      border-radius: 1.25rem;
      user-select: none;
      cursor: default;

      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
`;
