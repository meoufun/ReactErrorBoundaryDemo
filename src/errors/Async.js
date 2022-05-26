import { useEffect } from 'react';
import { Button } from 'antd';

export default ({ asyncError, setAsyncError }) => {
    useEffect(() => {
        async function fetchData() {
            await Promise.reject('There is something wrong about async');
        }

        if (asyncError) {
            fetchData();
        }
    }, [asyncError]);

    return (
        <div className="error">
            <Button
                shape="round"
                onClick={() => {
                    setAsyncError(true);
                }}>
                Async
            </Button>
        </div>
    );
};
