import ButtonComponent from '../Button/Button';

import '../../styles/_contactform.scss';

const Contact = () => {
    return ( 
        <section className="contact" id="contact"  aria-label="Send message">
                <hr />
                <h2 className="contact__title">Get In Touch</h2>
                <hr />
                <form className="contact__form">
                <label htmlFor="firstname" className="contact__label"> First Name: </label>
                <input type="text" id="firstname" className="contact__input" />
                <br />

                <label htmlFor="lasttname" className="contact__label"> Last Name: </label>
                <input type="text" id="lastname" className="contact__input" />
                <br />

                <label htmlFor="email" className="contact__label"> Email-Id: </label>
                <input type="text" id="email" className="contact__input" />
                <br /> <br />
                <label htmlFor="message" className="contact__label"> Message </label>
                <textarea className="contact__textarea">  </textarea>
                <br />
               
                <ButtonComponent type='submit' text='Submit' />
                </form>
            
        </section>    
     );
}
 
export default Contact;