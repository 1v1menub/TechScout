import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";

function LandingDisplay({ products }) {
  const [index, setIndex] = [0];
  const handleNext = () => {
    if (index + 1 >= products.length) {
      setIndex(0);
    } else {
      setIndex((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <div
      style={{ backgroundImage: products[index].webpage_view }}
      className="lp-main-cont"
    >
      <img className="lp-leftarrow" src={leftarrow}></img>
      <img className="lp-rightarrow" src={rightarrow}></img>
    </div>
  );
}

export default LandingDisplay;
