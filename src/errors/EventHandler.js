import { Button } from 'antd';

export default () => {
    return (
        <div className="error">
            <Button
                shape="round"
                onClick={() => {
                    throw new Error('The event handler has something wrong');
                }}>
                EventHandler
            </Button>
        </div>
    );
};
