import React from "react";
import './terms.css';
import { Link } from "react-router-dom";
import { Paper } from "@mui/material"

const Terms = () => {
    return (
        // Terms of Service Template from: https://www.websitepolicies.com/blog/sample-terms-service-template
        <div className="terms">
            <Paper className="content" sx={{borderRadius: '0px', padding: '50px', border: '1px solid black', borderTop: '0', backgroundColor: 'whitesmoke'}}>
                <h1>TERMS OF SERVICE</h1>
                <p>Please read these terms of service (“terms”, “terms of service”) carefully before using the Texturetalk website (the “service”) operated by Texturetalk (“us”, ‘we”, “our”).</p>
                <h2>Conditions of Use</h2>
                <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, and use its services, you accept the following conditions. This is why we urge you to read them carefully.</p>
                <h2>Privacy Policy</h2>
                <p>Before you continue using our website we advise you to read our <Link to="/privacy">Privacy Policy</Link> regarding our user data collection. It will help you better understand our practices.</p>
                <h2>Copyright</h2>
                <p>Content published on this website (digital images, texts, graphics, logos) is the property of Texturetalk and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Texturetalk, with copyright authorship for this compilation by Texturetalk.</p>
                <h2>Communications</h2>
                <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p>
                <h2>Applicable Law</h2>
                <p>By visiting this website, you agree that the laws of the United States of America, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Texturetalk and you, or its business partners and associates.</p>
                <h2>Disputes</h2>
                <p>Any dispute related in any way to your visit to this website shall be arbitrated by state or federal court in the United States of America and you consent to exclusive jurisdiction and venue of such courts.</p>
                <h2>Comments, Reviews, and Emails</h2>
                <p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy, or injurious in any other way to third parties. Content has to be free of software viruses, political campaigns, and commercial solicitation.</p>
                <p>We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Texturetalk non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.</p>
                <h2>License and Site Access</h2>
                <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p>
                <h2>User Account</h2>
                <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.</p>
                <p>We reserve all rights to terminate accounts, edit or remove content at our sole discretion.</p>
                <p>By visiting this page, you agree to our terms.</p>
            </Paper>
        </div>
    );
};
 
export default Terms;