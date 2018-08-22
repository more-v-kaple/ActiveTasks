import React, { PureComponent } from 'react';

import { TABLE_HEADERS } from '../../constants';

import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = () => ({
    row: {
        border: '18px  inset  #52b3ec'
    },
    cell: {
        padding: '0 30px',
        height: 70,
        fontSize: 20,
        textAlign: 'center'
    }
});

class TableHeader extends PureComponent {
    render() {
        const { row, cell } = this.props.classes;

        return (
            <TableHead>
                <TableRow
                    classes={{
                        root: row
                    }}
                >
                    {
                        TABLE_HEADERS.map(header => (
                            <TableCell
                                classes={{
                                    root: cell
                                }}
                                key={header}
                            >
                                {header}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        );
    }
}
export default withStyles(styles)(TableHeader);
