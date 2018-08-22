import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter as Footer } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

import TablePaginationActions from '../TablePaginationActions';

class TableFooter extends PureComponent{
    render() {
        const {
            onChangeRowsPerPage,
            onChangePage,
            rowsPerPage,
            count,
            page
        } = this.props;

        return (
            <Footer>
                <TableRow>
                    <TablePagination
                        onChangeRowsPerPage={onChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        onChangePage={onChangePage}
                        rowsPerPage={rowsPerPage}
                        count={count}
                        page={page}
                    />
                </TableRow>
            </Footer>
        );
    };
}

TableFooter.propTypes = {
    onChangeRowsPerPage: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
};

export default TableFooter;
