import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import './contact.css'

class Contact extends React.Component{
    render(){
        return(
           <div className="contactContainer">
               <div class="row pt-5">
                <div class="col"> 
                    <p>Get In Touch</p>
                    <i class="bi bi-envelope"></i> <span>FatenSawy05@gmail.com</span>
                </div>
                <div class="col">
                <button>Contact Me</button>
                </div>
                <div class="col">
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <p>Copyright@Faten</p>         
                </div>
            </div>
           </div>
                 
        ) 
    }
}
export default Contact