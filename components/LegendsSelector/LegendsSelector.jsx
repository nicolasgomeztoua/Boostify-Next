import Image from "next/image";
import styled from "styled-components";

import { LegendsObj } from "../../utils/InfoObj";
import styles from "../AcheivementBoost/Acheivementbadges.module.css";

const BadgeDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 22.62px;
  font-weight: 100;
  line-height: 28px;
  color: white;
  text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black,
    -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black,
    0.07em 0.07em black;
`;

const TextIconCheckBox = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#3f3f3f"};
  border-radius: 100%;
  height: 320px;
  width: 320px;

  @media (max-width: 530px) {
    padding: 0.1rem;
    width: 250px;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;
const BadgesSelectionContainers = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: ${(props) => (props.height ? props.height : "500px")};
  overflow-y: auto;
  margin-bottom: 150px;
  @media (max-width: 1780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 530px) {
    height: 520px;
  }
`;
const Searchbar = styled.input.attrs({
  type: "text",
  placeholder: "search",
})`
  box-sizing: border-box;
  font-size: 2rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
  width: 50vw;
  border-radius: 50px;
`;
const BadgesSectionTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 31.99px;
  font-weight: 700;
  line-height: 48px;
  color: white;
  border-bottom: solid 4px #e43403;
  border-top: solid 4px #e43403;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 80vw;
`;
const LegendSelectionContainer = styled(BadgesSelectionContainers)`
  margin-bottom: 0;
  border: 1px solid #000;
`;
const LegendsTitle = styled(BadgesSectionTitle)`
  border-color: #000;
  color: black;
`;
const Search = styled(Searchbar)`
  border: 2px solid #000;
  outline-color: #000;
`;

const Legends = ({
  setSearchFieldLegends,
  setLegend,
  searchFieldLegends,
  checkedLegend,
}) => {
  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };

  let ReversedObj = [...LegendsObj].reverse();
  return (
    <>
      <LegendsTitle>Select a Legend</LegendsTitle>
      <Search
        onChange={(e) => setSearchFieldLegends(e.target.value)}
        value={searchFieldLegends}
        autoFocus
      ></Search>
      <LegendSelectionContainer>
        {ReversedObj.filter((items) => {
          return items.name
            .toLowerCase()
            .includes(searchFieldLegends.toLowerCase());
        }).map((Items, index) => {
          return (
            <TextIconCheckBox backgroundColor="white" key={index}>
              <div
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  height: "210px",
                  width: "210px",
                  color: "white",
                }}
              >
                <Image
                  height={210}
                  width={210}
                  src={Items.icon}
                  alt="badge"
                ></Image>
              </div>
              <BadgeDesc>{Items.name}</BadgeDesc>
              <label
                className={styles["check"]}
                key={Items.key}
                style={{ backgroundColor: "black" }}
              >
                <input
                  type="checkbox"
                  className={styles["inputCheck"]}
                  name={Items.name}
                  checked={checkedLegend[Items.name]}
                  onChange={handleChangeLegends}
                />

                <div
                  className={styles["box"]}
                  style={{ backgroundColor: "black" }}
                ></div>
              </label>
            </TextIconCheckBox>
          );
        })}
      </LegendSelectionContainer>
    </>
  );
};
export default Legends;
