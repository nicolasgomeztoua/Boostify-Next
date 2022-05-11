import React, { useState, useEffect, useMemo } from "react";

import Link from "next/link";
import masters from "../../public/assets/images/Ranked_Tier6_Master.png";
import diamond from "../../public/assets/images/Ranked_Tier5_Diamond.png";
import plat from "../../public/assets/images/Ranked_Tier4_Platinum.png";
import gold from "../../public/assets/images/Ranked_Tier3_Gold.png";
import silver from "../../public/assets/images/Ranked_Tier2_Silver.png";
import bronze from "../../public/assets/images/Ranked_Tier1_Bronze.jpeg";
import rookie from "../../public/assets/images/rookie.png";
import Image from "next/image";
import { useDispatchCart } from "../../hooks/Cart/CartHandler";

import { debounce } from "lodash";
import prices from "./prices";
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
  const [firstTier, setFirstTier] = useState("I");
  const [firstRankImage, setFirstRankImage] = useState(gold);
  const [firstValue, setFirstValue] = useState(1000);
  const [secondValue, setSecondValue] = useState(2000);
  const [secondRankImage, setSecondRankImage] = useState(gold);
  const [secondTier, setSecondTier] = useState("");

  const [invalid, setInvalid] = useState("none");
  const [validPromo, setValidPromo] = useState(false);
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [completionTime, setCompletionTime] = useState("");
  const [disabledDiscount, setDisabledDiscount] = useState(false);

  const handleDiscount = () => {
    if (validPromo === "boostify5") {
      setTotalMoney(totalMoney - totalMoney * 0.05);
      setDisabledDiscount(true);
      setOpacity(0.4);
    }
  };
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

  const debouncedAdjustControls = useMemo(
    () =>
      debounce(() => {
        const rankMultiplierArray = prices.slice(
          Math.floor(firstValue / 100),
          Math.floor(secondValue / 100 + 1)
        );
        const summedMultiplier = rankMultiplierArray.reduce((a, b) => a + b, 0);
        setTotalMoney(summedMultiplier);
      }, 500),
    [firstValue, secondValue]
  );

  useEffect(() => {
    debouncedAdjustControls(firstValue, secondValue);
  }, [debouncedAdjustControls, firstValue, secondValue]);
  useEffect(() => {
    if (firstValue >= 0) {
      setFirstRankImage(rookie);
      setFirstTier("IV");
    }
    if (firstValue >= 250) {
      setFirstTier("III");
    }
    if (firstValue >= 500) {
      setFirstTier("II");
    }
    if (firstValue >= 750) {
      setFirstTier("I");
    }
    if (firstValue >= 1000) {
      setFirstTier("IV");
      setFirstRankImage(bronze);
    }
    if (firstValue >= 1500) {
      setFirstTier("III");
    }
    if (firstValue >= 2000) {
      setFirstTier("II");
    }
    if (firstValue >= 2500) {
      setFirstTier("I");
    }
    if (firstValue >= 3000) {
      setFirstTier("IV");
      setFirstRankImage(silver);
    }
    if (firstValue >= 3600) {
      setFirstTier("III");
    }
    if (firstValue >= 4200) {
      setFirstTier("II");
    }
    if (firstValue >= 4800) {
      setFirstTier("I");
    }
    if (firstValue >= 5400) {
      setFirstTier("IV");
      setFirstRankImage(gold);
    }
    if (firstValue >= 6100) {
      setFirstTier("III");
    }
    if (firstValue >= 6800) {
      setFirstTier("II");
    }
    if (firstValue >= 7500) {
      setFirstTier("I");
    }
    if (firstValue >= 8200) {
      setFirstTier("IV");
      setFirstRankImage(plat);
    }
    if (firstValue >= 9000) {
      setFirstTier("III");
    }
    if (firstValue >= 9800) {
      setFirstTier("II");
    }
    if (firstValue >= 10600) {
      setFirstTier("I");
    }
    if (firstValue >= 11400) {
      setFirstTier("IV");
      setFirstRankImage(diamond);
    }
    if (firstValue >= 12300) {
      setFirstTier("III");
    }
    if (firstValue >= 13200) {
      setFirstTier("II");
    }
    if (firstValue >= 14100) {
      setFirstTier("I");
    }
    if (firstValue >= 15000) {
      setFirstTier("Masters");
      setFirstRankImage(masters);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondRankImage(rookie);
      setSecondTier("IV");
    }
    if (secondValue >= 250) {
      setSecondTier("III");
    }
    if (secondValue >= 500) {
      setSecondTier("II");
    }
    if (secondValue >= 750) {
      setSecondTier("I");
    }
    if (secondValue >= 1000) {
      setSecondTier("IV");
      setSecondRankImage(bronze);
    }
    if (secondValue >= 1500) {
      setSecondTier("III");
    }
    if (secondValue >= 2000) {
      setSecondTier("II");
    }
    if (secondValue >= 2500) {
      setSecondTier("I");
    }
    if (secondValue >= 3000) {
      setSecondTier("IV");
      setSecondRankImage(silver);
    }
    if (secondValue >= 3600) {
      setSecondTier("III");
    }
    if (secondValue >= 4200) {
      setSecondTier("II");
    }
    if (secondValue >= 4800) {
      setSecondTier("I");
    }
    if (secondValue >= 5400) {
      setSecondTier("IV");
      setSecondRankImage(gold);
    }
    if (secondValue >= 6100) {
      setSecondTier("III");
    }
    if (secondValue >= 6800) {
      setSecondTier("II");
    }
    if (secondValue >= 7500) {
      setSecondTier("I");
    }
    if (secondValue >= 8200) {
      setSecondTier("IV");
      setSecondRankImage(plat);
    }
    if (secondValue >= 9000) {
      setSecondTier("III");
    }
    if (secondValue >= 9800) {
      setSecondTier("II");
    }
    if (secondValue >= 10600) {
      setSecondTier("I");
    }
    if (secondValue >= 11400) {
      setSecondTier("IV");
      setSecondRankImage(diamond);
    }
    if (secondValue >= 12300) {
      setSecondTier("III");
    }
    if (secondValue >= 13200) {
      setSecondTier("II");
    }
    if (secondValue >= 14100) {
      setSecondTier("I");
    }
    if (secondValue >= 15000) {
      setSecondTier("Masters");
      setSecondRankImage(masters);
    }
  }, [secondValue]);

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
                  setValidPromo(e.target.value.toLowerCase());
                }}
              ></InputTyped>
              <div className="button_cont" align="center">
                <DiscountButton
                  className="example_c"
                  disabled={disabledDiscount}
                  style={{ opacity: opacity }}
                  onClick={() => handleDiscount()}
                >
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
                        icon: secondRankImage.src,
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
