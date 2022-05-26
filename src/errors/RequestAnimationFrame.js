import { useEffect } from 'react';

import { Button } from 'antd';

export default ({ requestAnimationFrameError, setRequestAnimationFrame }) => {
    useEffect(() => {
        if (requestAnimationFrameError) {
            requestAnimationFrame(() => {
                throw new Error(
                    'There is something wrong inner requestAnimationFrame'
                );
            });
        }
    }, [requestAnimationFrameError]);

    return (
        <div className="error">
            <Button
                shape="round"
                onClick={() => {
                    setRequestAnimationFrame(true);
                }}>
                requestAnimationFrame
            </Button>
        </div>
    );
};
