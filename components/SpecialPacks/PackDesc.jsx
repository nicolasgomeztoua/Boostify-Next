import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatchCart } from "../../hooks/Cart/CartHandler";

import Image from "next/image";

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  align-self: center;
  justify-self: center;
`;
const ImgBox = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateY(-50%);
  @media screen and (orientation: portrait) {
    top: 0%;
    transform: translateY(-25%);
  }
`;
const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedLegend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
`;
const Button = styled.button`
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  border: ${(props) => (props.border ? props.border : "solid #056e84 1px")};
  border-radius: 25px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
  color: ${(props) => (props.color ? props.color : "#056e84")};
  cursor: pointer;
  font-weight: bold;
  height: auto;
  line-height: 2.5em;
  margin: 0;
  margin-top: 140px;
  min-height: 30px;
  min-width: 74.0740740741%;
  padding: 0.25rem 0.5rem;
  position: absolute;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    transition: all 0.2s ease 0s;
  }
`;
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 30px;
  margin: 0 15px;

  @media screen and (orientation: portrait) {
    margin: auto;
    width: 250px;
    &::before {
      clip-path: circle(150px at 80% -20%);
    }
    ${ImgBox} {
      top: 0%;
      transform: translateY(-25%);
    }
    ${ContentBox} {
      height: 210px;
    }
    ${SelectedLegend} {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    }
    button {
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 0.7s;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      `linear-gradient(90deg, #${props.firstColor} 0%, #${props.secondColor} 120%)`};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }
  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }
  &::after {
    content: "Plat --";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }
  &:hover {
    ${ImgBox} {
      top: 0%;
      transform: translateY(-25%);
    }
    ${ContentBox} {
      height: 210px;
    }
    ${SelectedLegend} {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    }
    button {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const Images = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: auto;
  border-radius: 100%;
`;
const ImageFree = styled.div`
  position: absolute;
  top: 12%;
  left: 18%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
`;

const Title = styled.h2`
  position: absolute;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  font-size: 22px !important;
`;
const Subtitle = styled.h3`
  color: white;
  font-weight: 300;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "70px")};
`;
const PackDesc = ({
  checkedLegend,
  firstColor,
  title,
  price,
  firstValue,
  secondValue,
  img,
}) => {
  const history = useRouter();

  let displayLegend = Object.keys(checkedLegend)[0];
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const addPackToCart = () => {
    addToCart({
      title: title,
      price: price.toFixed(2),
      selectedLegend: displayLegend,
      icon: img,
      firstValue: firstValue,
      secondValue: secondValue,
      badgesExtras: "",
    });
    history.push("/cart" + window.location.search);
  };

  return (
    <Container>
      <Card firstColor={firstColor} secondColor="9c64ca">
        <ImageFree>
          <Image
            height={100}
            width={100}
            src={"/assets/images/SpecialPackBadges.png"}
            alt="free 4k and 20 bomb"
          ></Image>
        </ImageFree>
        <ImgBox>
          <Images>
            <Image
              height={200}
              width={200}
              src={img}
              alt="Plat 4 to masters"
            ></Image>
          </Images>
        </ImgBox>

        <ContentBox>
          <Title>{title}</Title>

          <SelectedLegend>
            <Subtitle fontSize="21px">{price}.00$</Subtitle>
            <Subtitle marginTop="10px">Legend : {displayLegend}</Subtitle>
          </SelectedLegend>

          <Button
            background={"black"}
            color={"white"}
            border={"none"}
            onClick={addPackToCart}
            id="specialAddToCart"
          >
            Buy Now
          </Button>
        </ContentBox>
      </Card>
    </Container>
  );
};

export default PackDesc;
