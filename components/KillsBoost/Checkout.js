import {
  TotalContainer,
  TotalTitle,
  F3,
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  InputTyped,
  TotalMoney,
  DiscountButton,
  Button,
} from "../ProductComponents/ProductElements";
import Link from "next/link";
import KillsBoost from "../../public/assets/images/killsboost.png";
import { useDispatchCart } from "../../hooks/Cart/CartHandler";
import styled from "styled-components";
const TotalContainerK = styled(TotalContainer)`
  height: auto;
  margin-bottom: 20px;
`;
const Step3 = styled(F3)`
  color: #6d00ae;
`;
const Checkout = ({
  kills,
  price,
  filteredExtras,
  moneyMultiplierDuo,
  moneyMultiplierStream,
  moneyMultiplierPriority,
  legend,
}) => {
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  // const [validPromo, setValidPromo] = useState();
  const disabled = false;
  const opacity = 1;

  return (
    <>
      <TotalContainerK>
        {" "}
        <TotalTitle>
          <Step3></Step3> Check your total
        </TotalTitle>
        <TotalMoneyCard>
          <TotalMoneyHeader>
            Your Order: <br></br> <span>{kills} Kills</span>
            <br></br> Average Completion Time: <br></br>
            <span>48h</span>
          </TotalMoneyHeader>
          <DiscountContainer>PromoCode</DiscountContainer>
          <InputTyped
            style={{ marginTop: "0px", borderColor: "#6d00ae" }}
            fontSize="20px"
            height="50px"
            width="250px"
            onChange={(e) => {
              // setValidPromo(e.target.value.toLowerCase());
            }}
          ></InputTyped>
          <div className="button_cont" align="center">
            <DiscountButton
              className="example_c k"
              disabled={disabled}
              style={{ opacity: opacity }}
            >
              {" "}
              Apply
            </DiscountButton>
          </div>
          <DiscountContainer>Total</DiscountContainer>
          <TotalMoney>
            <span className="totalMoney">
              {(
                price +
                moneyMultiplierDuo +
                moneyMultiplierStream +
                moneyMultiplierPriority
              ).toFixed(2)}
              {"$"}
            </span>
          </TotalMoney>

          <div className="button_cont" align="center">
            <Link
              href={`/Cart${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
              passHref
            >
              <Button
                onClick={() =>
                  addToCart({
                    title: "Kills Boost",
                    price: Number(
                      price +
                        moneyMultiplierDuo +
                        moneyMultiplierStream +
                        moneyMultiplierPriority
                    ).toFixed(2),

                    kills: kills,
                    icon: KillsBoost,
                    selectedLegend: Object.keys(legend),
                    filteredExtras: Object.keys(filteredExtras),
                  })
                }
                className="example_d"
                href="add-website-here"
                target="_blank"
                rel="nofollow noopener"
                id="addToCart"
              >
                Add to cart
              </Button>
            </Link>
          </div>
        </TotalMoneyCard>
      </TotalContainerK>
    </>
  );
};

export default Checkout;
