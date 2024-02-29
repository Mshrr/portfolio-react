import React from "react";

function Social() {
    return(
        <div className="social pt-3">
            <ul>
                <li >
                    <a href="http://" className="rounded-circle p-2 me-2 bg-dark"><img  src="/images/linkedin.png" alt="" /></a>
                    <a href="http://" className="rounded-circle p-2 me-2 bg-dark"><img  src="/images/github.png" alt="" /></a>
                    <a href="http://" className="rounded-circle p-2 me-2 bg-dark"><img  src="/images/whatsapp.png" alt="" /></a>
                    <a href="http://" className="rounded-circle p-2 me-2 bg-dark"><img  src="/images/instagram.png" alt="" /></a>
                    <a href="http://" className="rounded-circle p-2 me-2 bg-dark"><img  src="/images/youtube.png" alt="" /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social;