import { useState } from 'react';

import Async from './errors/Async';
import EventHandler from './errors/EventHandler';
import Lifecycle from './errors/Lifecycle';
import PromiseError from './errors/PromiseError';
import Render from './errors/Render';
import RequestFrameAnimation from './errors/RequestAnimationFrame';
import SetTimeout from './errors/SetTimeout';

import { Divider, Button } from 'antd';

import ErrorBoundary from './ErrorBoundary';

function Demo() {
    const [lifecycleError, setLifecycleError] = useState(false);
    const [renderObj, setRenderObj] = useState({ type: 'render' });
    const [setTimeoutError, setSetTimeoutError] = useState(false);
    const [promiseError, setPromiseError] = useState(false);
    const [requestAnimationFrameError, setRequestAnimationFrame] =
        useState(false);
    const [asyncError, setAsyncError] = useState(false);
    const [selftError, setSelfError] = useState(false);

    if (selftError) {
        throw new Error('There is something wrong');
    }

    return (
        <div className="demo">
            <ErrorBoundary>
                <ErrorBoundary>
                    <Lifecycle
                        lifecycleError={lifecycleError}
                        setLifecycleError={setLifecycleError}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Render renderObj={renderObj} setRenderObj={setRenderObj} />
                </ErrorBoundary>

                <Divider />

                <ErrorBoundary>
                    <EventHandler />
                </ErrorBoundary>

                <ErrorBoundary>
                    <PromiseError
                        promiseError={promiseError}
                        setPromiseError={setPromiseError}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Async
                        asyncError={asyncError}
                        setAsyncError={setAsyncError}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <RequestFrameAnimation
                        requestAnimationFrameError={requestAnimationFrameError}
                        setRequestAnimationFrame={setRequestAnimationFrame}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <SetTimeout
                        setTimeoutError={setTimeoutError}
                        setSetTimeoutError={setSetTimeoutError}
                    />
                </ErrorBoundary>

                <Button
                    shape="round"
                    onClick={() => {
                        setSelfError(true);
                    }}>
                    Self
                </Button>
            </ErrorBoundary>
        </div>
    );
}

export default Demo;
