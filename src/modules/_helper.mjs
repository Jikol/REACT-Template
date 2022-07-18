/* ---------
File with useful utility functions for use in javascript
--------- */

export const getVpDimensions = () => {
    return {
        vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    };
};
