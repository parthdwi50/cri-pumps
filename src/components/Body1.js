import trophy from "../static/1.png";
import ceremony from "../static/2.png";

function Body1(){
    return(
        <div className="flex-container">
                <div>
                <img src={trophy} className='trophy' />
                </div>
                <div>
                    <p style={{textAlign: 'left'}}><strong> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></p>
                    <ul>
                        <li style={{textAlign: 'left'}}>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li style={{textAlign: 'left'}}>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                        <br />
                        <img src={ceremony} className='ceremony' />
                        <p style={{textAlign: 'left'}}>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </ul>
                </div>
            </div>
        );
}

export default Body1;