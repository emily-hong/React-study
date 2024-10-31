import Img1 from "./assets/1.jpg"
import Img3 from "./assets/3.jpg"
import Img5 from "./assets/5.jpg"
import './App.css'

function Trip(){
    return (
        <div className="tripOuter">
            <img src={Img1} width={250} height={250} alt=""/>
            <img src={Img3} width={250} height={250} alt=""/>
            <img src={Img5} width={250} height={250} alt=""/>
        </div>
    )
}

export default Trip;