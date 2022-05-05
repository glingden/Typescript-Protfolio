import '../../styles/_footer.scss'

const Footer = () => {
    return ( 
       <footer  className="section6">
            <div className="uparrow">
                <a href="#home" ><i className='fas fa-chevron-circle-up  page-arrow'></i></a>
            </div>
            <hr />
            
            <section className="footer">
                <p>Copyright © 2022 Ganga Lingden. All rights reserved.</p>
                <nav>
                    <ul className="footer__list">
                        <li className="icons" aria-hidden="true" > 
                            <a className="footer__link"href="#home"> 
                            <i className="fab fa-instagram"aria-hidden="true"></i> 
                            </a>
                        </li>

                        <li className="icons"> 
                            <a className="footer__link"href="#home"> 
                                <i className="fab fa-twitter" aria-hidden="true"> </i>
                            </a>
                        </li>
                        
                        <li className="icons"> 
                            <a className="footer__link" href="https://fi.linkedin.com/in/ganga-lingden" target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>

                        <li className="icons">
                            <a className="footer__link" href="https://github.com/glingden" target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
       </footer>
    );
}
 
export default Footer;