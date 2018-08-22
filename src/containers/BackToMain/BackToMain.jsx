import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class BackToMain extends PureComponent {
    render() {
        return (
            <Link to="/">
                <Button
                    size="large"
                    color="primary">
                    Back to All
                </Button>
            </Link>
        );
    }
}

export default BackToMain;
