import React from 'react';
import { Button } from './index';
import { SearchOutlined } from '@ant-design/icons';

// 基础按钮
const ButtonDemo = () => {
    return (
        <div className="button-demo">
            <div className="demo-section">
                <h3>基础按钮</h3>
                <Button>默认按钮</Button>
            </div>

            <div className="demo-section">
                <h3>按钮类型</h3>
                <Button type="primary">主要按钮</Button>
                <Button type="secondary">次要按钮</Button>
                <Button type="text">文本按钮</Button>
                <Button type="link">链接按钮</Button>
            </div>

            <div className="demo-section">
                <h3>按钮尺寸</h3>
                <Button size="large">大按钮</Button>
                <Button size="medium">中按钮</Button>
                <Button size="small">小按钮</Button>
            </div>

            <div className="demo-section">
                <h3>图标按钮</h3>
                <Button icon={<SearchOutlined />}>搜索</Button>
            </div>

            <div className="demo-section">
                <h3>加载状态</h3>
                <Button loading>加载中</Button>
            </div>

            <div className="demo-section">
                <h3>禁用状态</h3>
                <Button disabled>禁用按钮</Button>
            </div>

            <div className="demo-section">
                <h3>块级按钮</h3>
                <Button block>块级按钮</Button>
            </div>
        </div>
    );
};

export default ButtonDemo;