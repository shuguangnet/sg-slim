# Input 输入框

Input 组件是一个基础的表单输入元素，用于获取用户的文本输入。

## 代码演示

```tsx
import Input from './index';
import Demo from './demo';

export default () => <Demo />;
```

## API

### 属性

| 参数         | 说明                   | 类型                             | 默认值 |
| ------------ | ---------------------- | -------------------------------- | ------ |
| value        | 输入框内容             | string                           | -      |
| placeholder  | 输入框占位文本         | string                           | -      |
| disabled     | 是否禁用               | boolean                          | false  |
| maxLength    | 最大输入长度           | number                           | -      |
| type         | 输入框类型             | 'text' \| 'password' \| 'number' | 'text' |
| onChange     | 输入框内容变化时的回调 | function(e)                      | -      |
| onPressEnter | 按下回车的回调         | function(e)                      | -      |

### 方法

| 名称    | 说明     |
| ------- | -------- |
| focus() | 获取焦点 |
| blur()  | 移除焦点 |

## 基础用法
