import React, {Component} from 'react';
import Grid from '../component/Grid'

class GridView extends Component {
    state = {
        rows: 0,
        columns: 0,
        count: 0
    };

    componentDidMount() {
        const columns = this.getValue('please enter a board height');
        const rows = this.getValue('please enter a board width');
        this.setState({columns, rows});
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
        const {rows, columns} = this.state;
        return (
            <div className="game__area">
                <Grid
                    rows={rows}
                    columns={columns}
                />
            </div>
        );
    }

}


export default GridView;
