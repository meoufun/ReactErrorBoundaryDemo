import { Button } from 'antd';

import React, { Component } from 'react';

export default class Lifecycle extends Component {
    componentDidUpdate() {
        if (this.props.lifecycleError) {
            throw new Error(
                'The lifecycle componentDidUpdate has something wrong'
            );
        }
    }
    render() {
        return (
            <div className="error">
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => this.props.setLifecycleError(true)}>
                    Lifecycle
                </Button>
            </div>
        );
    }
}
