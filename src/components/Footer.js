import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className="my-auto py-2">Developed by João Gonçalves &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;