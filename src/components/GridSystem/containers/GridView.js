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
        let input = parseInt(prompt(message));
        if (input === null) {
            return;
        }

        if (typeof input === 'string') {
            alert('please provide a valid integer');
            input = prompt(message);
        }

        return input;
    };
    render() {
        const { rows, columns } = this.state;
        return (
            <div>
                <div className="game__area">
                    <Table width={rows} height={columns} />
                </div>
            </div>
        );
    }
}

export default Grid;
