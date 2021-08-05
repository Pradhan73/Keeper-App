import React from "react";


const dat = new Date();
const yr = dat.getFullYear();
function Footer() {
    return <footer>
        <p>
            Copyright ⓒ {yr}
        </p>
    </footer>
}

export default Footer;