import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-family: "Montserrat";
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #402929;
    font-size: 2.5rem;
`;

export const Coffret = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Montserrat";
    cursor: pointer;
    text-transform: uppercase;
    padding: 50px 5% 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);

    & img {
        width: 75%;
        margin: 0 auto;
    }

    & h3 {
        padding: 30px 3vw;
        font-size: 3.5rem;
        margin: 0 auto;
        text-align: center;
        font-weight: 900;
        mix-blend-mode: soft-light;

        @media screen and (max-width: 425px) {
            font-size: 2.5rem;
        }
    }
`;

export const ProductPreview = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        padding: 20px;
    }

    img {
        width: 100%;
        min-height: 200px;
        max-height: 250px;
        object-fit: contain;

        @media screen and (max-width: 600px) {
            max-height: 200px;
        }
    }

    &:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4),
            0 -2px 25px rgba(0, 0, 0, 0.2);
        transform: translateY(-10px);
    }
`;
