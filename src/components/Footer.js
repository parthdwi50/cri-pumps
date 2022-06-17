import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="footer">
            <br />
            <footer>
            <div className='flex-container2'>
                <div>
                    <p style={{color: "white"}}><FontAwesomeIcon icon={faPhone} /> Toll Free 1800-200-1234</p>
                </div>
                <div>
                    <p style={{color: "white"}}><FontAwesomeIcon icon={faFacebook} /> <a href='www.facebook.com/cripumps'> www.facebook.com/cripumps</a></p>
                </div>
                <div>
                    <p style={{color: "white"}}><FontAwesomeIcon icon={faGlobe} /> <a href='www.cripumps.com'> www.cripumps.com</a></p>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;