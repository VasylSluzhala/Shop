import * as React from 'react';
import FooterTop from './FooterTop';
import FooterInner from './FooterInner';
import FooterBottom from './FooterBottom';

function Footer(props) {
    return (
        <footer id="footer">
            <FooterTop />
            <FooterInner />
            <FooterBottom />
        </footer>
    );
}

export default Footer;