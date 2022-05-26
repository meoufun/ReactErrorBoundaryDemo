import { Button } from 'antd';

export default ({ renderObj, setRenderObj }) => {
    return (
        <div className="error">
            <Button
                type="primary"
                shape="round"
                onClick={() => setRenderObj(null)}>
                Render: {renderObj.type}
            </Button>
        </div>
    );
};
