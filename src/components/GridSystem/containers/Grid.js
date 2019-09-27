import React from 'react';
import Table from '../component/table';

class Grid extends React.Component {
    state = {
        rows: 0,
        columns: 0,
    };

    componentDidMount() {
        const columns = this.getValue('please enter a board height');
        const rows = this.getValue('please enter a board width');
        this.setState({ columns, rows });
    }

    getValue = message => {
        let value = parseInt(prompt(message));
        if (!value) {
            alert('please provide a valid integer');
            value = prompt(message);
        }
        return value;
    };
    render() {
        const { rows, columns } = this.state;
        return (
            <div className="game__area">
                <Table width={rows} height={columns} />
            </div>
        );
    }
}

export default Grid;
