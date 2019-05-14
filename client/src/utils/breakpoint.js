import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

export const breakpoints = {
    mobile: '(max-width: 736px)',
    tablet: '(min-width: 737px) and (max-width: 1024px)',
    desktop: '(min-width: 1025px)'
};

const Breakpoint = ({ children, name }) => {
    const breakpoint = name || 'mobile';
    return (
        <MediaQuery query={breakpoints[breakpoint]}>
            {children}
        </MediaQuery>
    );
};

export default Breakpoint;

Breakpoint.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node
};