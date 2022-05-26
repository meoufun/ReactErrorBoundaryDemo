import { useEffect } from 'react';

import { Button } from 'antd';

export default ({ setTimeoutError, setSetTimeoutError }) => {
    let timer = null;

    useEffect(() => {
        if (setTimeoutError) {
            timer = setTimeout(() => {
                throw new Error('There is something wrong inner setTimeout');
            }, 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [setTimeoutError]);

    return (
        <div className="error">
            <Button shape="round" onClick={() => setSetTimeoutError(true)}>
                setTimeout
            </Button>
        </div>
    );
};
