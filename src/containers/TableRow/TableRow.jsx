import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import { TableRow as Row } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import SvgIcon from '@material-ui/core/SvgIcon';

import icon from '../../assets/icons';

const styles = () => ({
    row: {
        padding: '0 30px',
        height: 70,
        background: 'linear-gradient(45deg, #499bea 30%, #ffffff 90%)'
    },
    cell: {
        padding: '0 30px',
        width: '20%',
        textAlign: 'center'
    }
});

class TableRow extends PureComponent {
    render() {
        const {
            estimatedEffort,
            isHighPriority,
            actualEffort,
            classes,
            expires,
            name,
            tags,
            id
        } = this.props;

        return (
            <Row
                classes={{
                    root: classes.row
                }}
                hover={true}
            >
                <TableCell
                    classes={{
                        root: classes.cell
                    }}
                >
                    <Link to={'/task/' + id}>
                        {name}
                        {
                            isHighPriority &&
                            <SvgIcon>
                                <path fill="#ff6600" d={icon.fire} />
                            </SvgIcon>
                        }
                    </Link>
                </TableCell>
                <TableCell
                    classes={{
                        root: classes.cell
                    }}
                >
                    {tags}
                </TableCell>
                <TableCell
                    classes={{
                        root: classes.cell
                    }}
                >
                    {actualEffort}
                </TableCell>
                <TableCell
                    classes={{
                        root: classes.cell
                    }}
                >
                    {estimatedEffort}
                </TableCell>
                <TableCell
                    classes={{
                        root: classes.cell
                    }}
                >
                    {expires}
                </TableCell>
            </Row>
        );
    }
}

TableRow.defaultProps = {
    isHighPriority: false,
    tags: ''
}

TableRow.propTypes = {
    estimatedEffort: PropTypes.number.isRequired,
    actualEffort: PropTypes.number.isRequired,
    expires: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.string,
    id: PropTypes.number.isRequired,
    isHighPriority: PropTypes.bool
}

export default withStyles(styles)(TableRow);;
