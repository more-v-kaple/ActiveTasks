import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
    render() {
        const { name } = this.props;

        return (
            <h1>
                {name}
            </h1>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired
};

export default Header;
