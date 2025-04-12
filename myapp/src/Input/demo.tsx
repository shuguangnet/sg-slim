import React, { useState } from 'react';
import  Input  from './index';

const Demo = () => {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [multiline, setMultiline] = useState('');

  // 基础输入框示例
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 密码输入框示例
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 多行文本框示例
  const handleMultilineChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMultiline(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 基础输入框 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>基础输入框</h3>
        <Input 
          placeholder="请输入内容"
          value={value}
          onChange={handleChange}
        />
      </div>

      {/* 密码输入框 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>密码输入框</h3>
        <Input 
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {/* 禁用状态 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>禁用状态</h3>
        <Input 
          disabled
          placeholder="禁用状态"
        />
      </div>

      {/* 多行文本框 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>多行文本框</h3>
        <Input 
          type="textarea"
          rows={4}
          placeholder="请输入多行内容"
          value={multiline}
          onChange={handleMultilineChange}
        />
      </div>
    </div>
  );
};

export default Demo;
