import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class HeaderHandBook extends Component {
    static displayName = HeaderHandBook.name;

    render() {
        return (
            <div>
                <TextField id="filled-basic" label="Фильтр" variant="filled" className="field-wrap" />
                <Button variant="contained" color="primary" className="field-wrap">
                    Добавить
                </Button>
                <Button variant="contained" color="secondary" className="field-wrap">
                    Удалить
                </Button>
            </div>
        );
    }
}