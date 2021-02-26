import React from 'react';

import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
<a href="https://rs.school/js/"><img className={s.logo} src="https://rs.school/images/rs_school_js.svg" alt="rslogo"/>
            </a>

            <div>
                <a href="https://rs.school/js/">
                Link to course
                </a>
            </div>
            <div>
                <a href="https://github.com/slavalobikov">
                    Link to my github
                </a>
            </div>
            <div>
                2021 year
            </div>
            <div>
                <a href="https://www.youtube.com/watch?v=YYWCCQxTUwA">
                    Link to youtube
                </a>
            </div>
        </footer>
    );
};

export default Footer;