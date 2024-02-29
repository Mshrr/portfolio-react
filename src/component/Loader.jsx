import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css'; // Import file CSS jika diperlukan

const Loader = ({ loadingTime, children }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false);
        }, loadingTime);

        return () => clearTimeout(timeout);
    }, [loadingTime]);

    return (
        <div>
            {showLoader && <div className="loader" id="loader"></div>}
            {!showLoader && ( // Tampilkan konten hanya jika loader tidak ditampilkan
                <div className="content" id="content">
                    {children}
                </div>
            )}
        </div>
    );
};

Loader.propTypes = {
    loadingTime: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default Loader;
