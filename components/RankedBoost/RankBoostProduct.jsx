import React, { useState, useEffect, useCallback } from "react";

import Link from "next/link";
import masters from "../../public/assets/images/Ranked_Tier6_Master.png";
import diamond from "../../public/assets/images/Ranked_Tier5_Diamond.png";
import plat from "../../public/assets/images/Ranked_Tier4_Platinum.png";
import gold from "../../public/assets/images/Ranked_Tier3_Gold.png";
import silver from "../../public/assets/images/Ranked_Tier2_Silver.png";
import bronze from "../../public/assets/images/Ranked_Tier1_Bronze.jpeg";
import Image from "next/image";
import { useCart, useDispatchCart } from "../../hooks/Cart/CartHandler";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import {
  ProductContainer,
  ProductWrap,
  StepOneTitle,
  F1,
  Step2Container,
  StepOneSLidersWrap,
  F2,
  InitialRank,
  DesiredRankBoost,
  Slider,
  InputTyped,
  StepTwoWarning,
  ExtrasTitle,
  F3,
  ExtrasContainer,
  ExtrasOptions,
  ExtraIconButtonWrap,
  ExtraCheckBox,
  IconDuo,
  IconDescWrapper,
  IconStream,
  IconSpeed,
  IconOffline,
  TotalContainer,
  TotalTitle,
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  TotalMoney,
  StepTwoWarningContainer,
  Subtitle,
  DiscountButton,
  Button,
  ExtraDesc,
  Tier,
} from "../ProductComponents/ProductElements";

const RankBoostProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [firstTier, setFirstTier] = useState("I");
  const [firstRankImage, setFirstRankImage] = useState(gold);
  const [firstValue, setFirstValue] = useState(1000);
  const [secondValue, setSecondValue] = useState(2000);
  const [secondRankImage, setSecondRankImage] = useState(gold);
  const [secondTier, setSecondTier] = useState("");

  const [invalid, setInvalid] = useState("none");
  /* const [validPromo, setValidPromo] = useState(false); */
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");

  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [completionTime, setCompletionTime] = useState("");

  useEffect(() => {
    if (totalMoney < 0) {
      setTotalMoney(0);
    }
  }, [totalMoney]);
  useEffect(() => {
    if (isNaN(firstValue)) {
      setFirstValue(4800);
    }
  }, [firstValue]);
  useEffect(() => {
    if (isNaN(secondValue)) {
      setSecondValue(10000);
    }
  }, [secondValue]);

  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(totalMoney * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, totalMoney]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(totalMoney * 0.5);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority, totalMoney]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(totalMoney * 0.25);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, totalMoney]);

  useEffect(() => {
    if (Number(secondValue) < Number(firstValue)) {
      setInvalid("flex");
    } else {
      setInvalid("none");
    }
  }, [secondValue, firstValue]);

  /*   useEffect(() => {
    if (secondValue > 10137 || secondValue < 10000) {
      setDisabledDiscount("flex");
    } else {
      setDisabledDiscount("none");
    }
  }, [secondValue]); */

  useEffect(() => {
    if (firstValue > 19900) {
      setFirstValue(19900);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue > 20000) {
      setSecondValue(20000);
    }
  }, [secondValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAdjustControls = useCallback(
    debounce((firstValue, secondValue) => {
      const prices = [
        0.1,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.25,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        1.875,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        3.125,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        4.64285714286,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
      ];
      const rankMultiplierArray = prices.splice(
        (firstValue / 100) | 0,
        secondValue / 100 - ((firstValue / 100) | 0)
      );
      const summedMultiplier = rankMultiplierArray.reduce((a, b) => a + b, 0);
      setTotalMoney(summedMultiplier);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedAdjustControls(firstValue, secondValue);
  }, [debouncedAdjustControls, firstValue, secondValue]);
  useEffect(() => {
    if (firstValue >= 0) {
      setFirstTier("IV");
      setFirstRankImage(bronze);
    }
    if (firstValue >= 300) {
      setFirstTier("III");
    }
    if (firstValue >= 600) {
      setFirstTier("II");
    }
    if (firstValue >= 900) {
      setFirstTier("I");
    }
    if (firstValue >= 1200) {
      setFirstTier("IV");
      setFirstRankImage(silver);
    }
    if (firstValue >= 1600) {
      setFirstTier("III");
    }
    if (firstValue >= 2000) {
      setFirstTier("II");
    }
    if (firstValue >= 2400) {
      setFirstTier("I");
    }
    if (firstValue >= 2800) {
      setFirstTier("IV");
      setFirstRankImage(gold);
    }
    if (firstValue >= 3300) {
      setFirstTier("III");
    }
    if (firstValue >= 3800) {
      setFirstTier("II");
    }
    if (firstValue >= 4300) {
      setFirstTier("I");
    }
    if (firstValue >= 4800) {
      setFirstTier("IV");
      setFirstRankImage(plat);
    }
    if (firstValue >= 5400) {
      setFirstTier("III");
    }
    if (firstValue >= 6000) {
      setFirstTier("II");
    }
    if (firstValue >= 6600) {
      setFirstTier("I");
    }
    if (firstValue >= 7200) {
      setFirstTier("IV");
      setFirstRankImage(diamond);
    }
    if (firstValue >= 7900) {
      setFirstTier("III");
    }
    if (firstValue >= 8600) {
      setFirstTier("II");
    }
    if (firstValue >= 9300) {
      setFirstTier("I");
    }
    if (firstValue >= 10000) {
      setFirstTier("GOAT");
      setFirstRankImage(masters);
    }
  }, [debouncedAdjustControls, firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondTier("IV");
      setSecondRankImage(bronze);
    }
    if (secondValue > 300) {
      setSecondTier("III");
    }
    if (secondValue > 600) {
      setSecondTier("II");
    }
    if (secondValue > 900) {
      setSecondTier("I");
    }
    if (secondValue >= 1200) {
      setSecondTier("IV");
      setSecondRankImage(silver);
    }

    if (secondValue > 1600) {
      setSecondTier("III");
    }
    if (secondValue > 2000) {
      setSecondTier("II");
    }
    if (secondValue > 2400) {
      setSecondTier("I");
    }

    if (secondValue >= 2800) {
      setSecondTier("IV");
      setSecondRankImage(gold);
    }
    if (secondValue > 3300) {
      setSecondTier("III");
    }
    if (secondValue > 3800) {
      setSecondTier("II");
    }

    if (secondValue > 4300) {
      setSecondTier("I");
    }

    if (secondValue >= 4800) {
      setSecondTier("IV");
      setSecondRankImage(plat);
    }

    if (secondValue > 5400) {
      setSecondTier("III");
    }
    if (secondValue > 5900) {
    }
    if (secondValue > 6000) {
      setSecondTier("II");
    }

    if (secondValue > 6600) {
      setSecondTier("I");
    }

    if (secondValue >= 7200) {
      setSecondTier("IV");
      setSecondRankImage(diamond);
    }
    if (secondValue > 7900) {
      setSecondTier("III");
    }

    if (secondValue > 8600) {
      setSecondTier("II");
    }

    if (secondValue > 9300) {
      setSecondTier("I");
    }

    if (secondValue >= 10000) {
      setSecondTier("GOAT");
      setSecondRankImage(masters);
    }
  }, [secondValue, firstValue]);

  useEffect(() => {
    if (firstValue) {
      setCompletionTime("48 hours");
    }
    if (secondValue > 11000) {
      setCompletionTime("15 days");
    }
  }, [firstValue, secondValue]);

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  let extrasArr = {
    DuoQueue: activeDuo,
    Offline: activeOffline,
    Stream: activeStream,
    priority: activePriority,
  };
  useEffect(() => {
    let extrasArr2 = {
      DuoQueue: activeDuo,
      Offline: activeOffline,
      Stream: activeStream,
      priority: activePriority,
    };
    setFilteredExtras(
      Object.fromEntries(
        Object.entries(extrasArr2).filter(([key, value]) => value === true)
      )
    );
  }, [activeDuo, activeOffline, activePriority, activeStream]);

  return (
    <>
      <ProductContainer>
        <div></div>
        <ProductWrap>
          <Step2Container>
            <StepOneTitle>
              <F1></F1> Select Ranked Points to Boost
            </StepOneTitle>
            <StepOneSLidersWrap>
              <InitialRank>
                <Subtitle id="current-rank">Set your current RP</Subtitle>
                <Image
                  src={firstRankImage}
                  alt="rank"
                  width={336}
                  height={322}
                />

                <Tier id="tier">{firstTier}</Tier>
                <Slider
                  value={firstValue}
                  onChange={(e) => setFirstValue(e.target.value)}
                  step="25"
                  max="19900"
                  divider="200"
                  style={{
                    background: `linear-gradient(to right, #e43403 0%, #e43403 ${
                      firstValue / 200
                    }%, #fff ${firstValue / 200}%, #fff 100%)`,
                  }}
                ></Slider>
                <InputTyped
                  fontSize="80px"
                  height="100px"
                  width="300px"
                  value={firstValue}
                  onChange={(e) => setFirstValue(e.target.value)}
                ></InputTyped>
                <p style={{ textAlign: "center", fontSize: "45.23px" }}>RP</p>
              </InitialRank>
              <DesiredRankBoost>
                <Subtitle id="current-rank">Set your desired RP</Subtitle>

                <Image
                  src={secondRankImage}
                  alt="rank"
                  width={336}
                  height={322}
                />

                <Tier id="tier">{secondTier}</Tier>
                <Slider
                  value={secondValue}
                  onChange={(e) => setSecondValue(e.target.value)}
                  step="25"
                  max="20000"
                  divider="200"
                  style={{
                    background: `linear-gradient(to right, #e43403 0%, #e43403 ${
                      secondValue / 200
                    }%, #fff ${secondValue / 200}%, #fff 100%)`,
                  }}
                ></Slider>
                <InputTyped
                  fontSize="80px"
                  height="100px"
                  width="300px"
                  value={secondValue}
                  onChange={(e) => {
                    setSecondValue(e.target.value);
                  }}
                ></InputTyped>
                <p style={{ textAlign: "center", fontSize: "45.23px" }}>RP</p>
              </DesiredRankBoost>
            </StepOneSLidersWrap>
            <StepTwoWarningContainer style={{ display: invalid }}>
              Desired Rank May Not be Less Than Current Rank
              <StepTwoWarning>
                <i
                  className="fa fa-times"
                  onClick={() => setInvalid("none")}
                ></i>
              </StepTwoWarning>
            </StepTwoWarningContainer>
          </Step2Container>

          <ExtrasContainer>
            <ExtrasTitle>
              <F2></F2>
              Choose additional services
            </ExtrasTitle>
            <ExtrasOptions>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconOffline></IconOffline>
                  <ExtraCheckBox
                    onClick={() => setActiveOffline(!activeOffline)}
                  />
                  <ExtraDesc className="ExtraDesc">Appear offline</ExtraDesc>
                  <ExtraDesc className="ExtraDesc"> FREE</ExtraDesc>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconDuo></IconDuo>
                  <ExtraCheckBox onClick={() => setActiveDuo(!activeDuo)} />
                  <ExtraDesc className="ExtraDesc">Duo-Queue </ExtraDesc>
                  <ExtraDesc className="ExtraDesc"> +75%</ExtraDesc>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconStream />
                  <ExtraCheckBox
                    onClick={() => setActiveStream(!activeStream)}
                  />
                  <ExtraDesc className="ExtraDesc">On Stream</ExtraDesc>
                  <ExtraDesc className="ExtraDesc"> +25%</ExtraDesc>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconSpeed></IconSpeed>
                  <ExtraCheckBox onClick={() => setPriority(!activePriority)} />
                  <ExtraDesc className="ExtraDesc">Boost-Priority</ExtraDesc>
                  <ExtraDesc className="ExtraDesc"> +50%</ExtraDesc>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
            </ExtrasOptions>
          </ExtrasContainer>

          <TotalContainer>
            {" "}
            <TotalTitle>
              <F3></F3> Check your total
            </TotalTitle>
            <TotalMoneyCard>
              <TotalMoneyHeader>
                Your Order: <br></br>{" "}
                <span>
                  {firstValue}RP to {secondValue}RP
                </span>
                <br></br> Average Completion Time: <br></br>
                <span>{completionTime}</span>
              </TotalMoneyHeader>
              <DiscountContainer>PromoCode</DiscountContainer>
              <InputTyped
                style={{ marginTop: "0px" }}
                fontSize="20px"
                height="50px"
                width="250px"
                onChange={(e) => {
                  // setValidPromo(e.target.value.toLowerCase());
                }}
              ></InputTyped>
              <div className="button_cont" align="center">
                <DiscountButton
                  className="example_c"
                  disabled={true}
                  style={{ opacity: 0.4 }}
                >
                  {" "}
                  Apply
                </DiscountButton>
              </div>
              <DiscountContainer>Total</DiscountContainer>
              <TotalMoney>
                <span className="totalMoney">
                  {(
                    totalMoney +
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
                    typeof window !== "undefined"
                      ? window?.location.search
                      : null
                  }`}
                  passHref
                >
                  <Button
                    onClick={() =>
                      addToCart({
                        title: "Rank Boost",
                        price: Number(
                          totalMoney +
                            moneyMultiplierDuo +
                            moneyMultiplierStream +
                            moneyMultiplierPriority
                        ).toFixed(2),
                        firstValue: firstValue,
                        secondValue: secondValue,
                        icon: secondRankImage,
                        extrasArr: Object.entries(extrasArr),
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
          </TotalContainer>
        </ProductWrap>

        <div></div>
      </ProductContainer>
    </>
  );
};

export default RankBoostProduct;
