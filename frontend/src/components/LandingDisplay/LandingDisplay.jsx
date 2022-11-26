import leftarrow from "../../assets/leftarrow.svg"
import rightarrow from "../../assets/rightarrow.svg"


function LandingDisplay({products}) {

    const [index, setIndex] = [0]

    const handleNext = () => {
        if((index + 1) >= products.length) {
            setIndex(0)
        }
        else {
            setIndex((prev) => {
                return prev+1
            })
        }
    }

    const handlePrev = () => {
        if((index - 1) < 0) {
            setIndex(products.length-1)
        }
        else {
            setIndex((prev) => {
                return prev-1
            })
        }
    }
    
    return (
        <div style={{backgroundImage: products[index].webpage_view}} className="lp-main-cont">
            <img className="lp-leftarrow" onClick={handleNext} src={leftarrow}></img>
            <img className="lp-rightarrow" onClick={handlePrev} src={rightarrow}></img>
        </div>
    )
}


export default LandingDisplay