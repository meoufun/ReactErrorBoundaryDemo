import { Button } from 'antd';
import { useEffect } from 'react';

export default ({ promiseError, setPromiseError }) => {
    useEffect(() => {
        new Promise(
            () => {
                if (promiseError)
                    throw new Error('There is something wrong about promise');
            },
            () => {}
        );
    }, [promiseError]);

    return (
        <div className="error">
            <Button shape="round" onClick={() => setPromiseError(true)}>
                promise
            </Button>
        </div>
    );
};
