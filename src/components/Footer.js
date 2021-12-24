import { Link, BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

class Footer extends Component {  
    render(){
    return (
<footer class="footer section gray-bg">
<div class="container">
    <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="widget mb-5 mb-lg-0">
                <h4 class="text-capitalize mb-3">Support</h4>
                <div class="divider mb-4"></div>

                <ul class="list-unstyled footer-menu lh-35">
                    <li><a href="#!">Terms & Conditions</a></li>
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">FAQs</a></li>
                    
                </ul>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget widget-contact mb-5 mb-lg-0">
                <h4 class="text-capitalize mb-3">Get in Touch</h4>
                <div class="divider mb-4"></div>

                <div class="footer-contact-block mb-4">
                    <div class="icon d-flex align-items-center">
                        <i class="icofont-email mr-3"></i>
                        <span class="h6 mb-0">support@aarogya.com</span>
                    </div>
                </div>

                <div class="footer-contact-block">
                    <div class="icon d-flex align-items-center">
                        <i class="icofont-support mr-3"></i>
                        <span class="h6 mb-0">+23-456-6588</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</footer>
);
}
}
export default Footer;