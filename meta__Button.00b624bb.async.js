"use strict";(self.webpackChunksg_slim=self.webpackChunksg_slim||[]).push([[461],{4695:function(x,t,e){e.r(t),e.d(t,{demos:function(){return h}});var c=e(90228),o=e.n(c),m=e(87999),p=e.n(m),l=e(75271),_=e(71504),v=e(88685),h={"button-demo-0":{component:l.memo(l.lazy(p()(o()().mark(function s(){var n,r;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,88685));case 2:return n=d.sent,r=n.default,d.abrupt("return",{default:function(){return l.createElement(r,null)}});case 5:case"end":return d.stop()}},s)})))),asset:{type:"BLOCK",id:"button-demo-0",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from './index';
import ButtonDemo from './demo';

export default () => <ButtonDemo />;`},"./demo.tsx":{type:"FILE",value:e(51449).Z}},entry:"index.tsx"},context:{"./demo.tsx":v,"/home/runner/work/sg-slim/sg-slim/myapp/src/Button/demo.tsx":v},renderOpts:{compile:function(){var s=p()(o()().mark(function r(){var u,d=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(490).then(e.bind(e,1490));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,d));case 3:case"end":return a.stop()}},r)}));function n(){return s.apply(this,arguments)}return n}()}}}},88685:function(x,t,e){e.r(t),e.d(t,{default:function(){return j}});var c=e(75271),o=e(26068),m=e.n(o),p=e(67825),l=e.n(p),_=e(53649),v=e.n(_),h=e(54403),s=e(26609),n=e(52676),r=["type","size","children"],u,d=(0,s.ZP)(h.ZP)(u||(u=v()([`
  &.ant-btn {
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s ease;

    &-primary {
      background: linear-gradient(145deg, #2563eb, #1d4ed8);
      border: none;
      box-shadow: 0 4px 6px -1px rgb(37 99 235 / 0.2);

      &:hover {
        background: linear-gradient(145deg, #1d4ed8, #1e40af);
        transform: translateY(-1px);
      }
    }

    &-secondary {
      background: #f1f5f9;
      border: none;
      color: #334155;

      &:hover {
        background: #e2e8f0;
        color: #334155;
      }
    }

    &-text {
      &:hover {
        background: #f1f5f9;
        color: #334155;
      }
    }

    &-link {
      &:hover {
        color: #1d4ed8;
      }
    }

    &-lg {
      font-size: 16px;
      height: 44px;
      padding: 8px 24px;
    }

    &-middle {
      font-size: 14px;
      height: 36px;
      padding: 6px 16px;
    }

    &-sm {
      font-size: 12px;
      height: 28px;
      padding: 4px 12px;
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`]))),I=c.forwardRef(function(i,A){var B=i.type,f=B===void 0?"primary":B,g=i.size,b=g===void 0?"middle":g,D=i.children,P=l()(i,r),O=f==="secondary"?"default":f;return(0,n.jsx)(d,m()(m()({ref:A,type:O,size:b},P),{},{children:D}))});I.displayName="Button";var a=I,y=e(90195),E=function(){return(0,n.jsxs)("div",{className:"button-demo",children:[(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u57FA\u7840\u6309\u94AE"}),(0,n.jsx)(a,{children:"\u9ED8\u8BA4\u6309\u94AE"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u6309\u94AE\u7C7B\u578B"}),(0,n.jsx)(a,{type:"primary",children:"\u4E3B\u8981\u6309\u94AE"}),(0,n.jsx)(a,{type:"secondary",children:"\u6B21\u8981\u6309\u94AE"}),(0,n.jsx)(a,{type:"text",children:"\u6587\u672C\u6309\u94AE"}),(0,n.jsx)(a,{type:"link",children:"\u94FE\u63A5\u6309\u94AE"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u6309\u94AE\u5C3A\u5BF8"}),(0,n.jsx)(a,{size:"large",children:"\u5927\u6309\u94AE"}),(0,n.jsx)(a,{size:"medium",children:"\u4E2D\u6309\u94AE"}),(0,n.jsx)(a,{size:"small",children:"\u5C0F\u6309\u94AE"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u56FE\u6807\u6309\u94AE"}),(0,n.jsx)(a,{icon:(0,n.jsx)(y.Z,{}),children:"\u641C\u7D22"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u52A0\u8F7D\u72B6\u6001"}),(0,n.jsx)(a,{loading:!0,children:"\u52A0\u8F7D\u4E2D"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u7981\u7528\u72B6\u6001"}),(0,n.jsx)(a,{disabled:!0,children:"\u7981\u7528\u6309\u94AE"})]}),(0,n.jsxs)("div",{className:"demo-section",children:[(0,n.jsx)("h3",{children:"\u5757\u7EA7\u6309\u94AE"}),(0,n.jsx)(a,{block:!0,children:"\u5757\u7EA7\u6309\u94AE"})]})]})},j=E},56363:function(x,t,e){e.r(t),e.d(t,{texts:function(){return o}});var c=e(71504);const o=[{value:"\u6309\u94AE\u662F\u7528\u6237\u754C\u9762\u4E2D\u6700\u57FA\u7840\u7684\u4EA4\u4E92\u5143\u7D20\uFF0C\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"\u6309\u94AE\u7C7B\u578B",paraId:1,tocIndex:3},{value:"'primary'",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"'secondary'",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"'text'",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"'link'",paraId:1,tocIndex:3},{value:"'primary'",paraId:1,tocIndex:3},{value:"size",paraId:1,tocIndex:3},{value:"\u6309\u94AE\u5927\u5C0F",paraId:1,tocIndex:3},{value:"'large'",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"'middle'",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"'small'",paraId:1,tocIndex:3},{value:"'middle'",paraId:1,tocIndex:3},{value:"icon",paraId:1,tocIndex:3},{value:"\u6309\u94AE\u56FE\u6807",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"loading",paraId:1,tocIndex:3},{value:"\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"block",paraId:1,tocIndex:3},{value:"\u662F\u5426\u4E3A\u5757\u7EA7\u6309\u94AE",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"onClick",paraId:1,tocIndex:3},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:3},{value:"(event) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u4E3B\u8981\u6309\u94AE\uFF08Primary\uFF09",paraId:2,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5F3A\u8C03\u9875\u9762\u7684\u4E3B\u8981\u64CD\u4F5C\uFF0C\u901A\u5E38\u5728\u4E00\u4E2A\u533A\u57DF\u5185\u53EA\u51FA\u73B0\u4E00\u4E2A\u4E3B\u8981\u6309\u94AE\u3002",paraId:2,tocIndex:4},{value:"\u6B21\u8981\u6309\u94AE\uFF08Secondary\uFF09",paraId:3,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u975E\u4E3B\u8981\u64CD\u4F5C\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u548C\u4E3B\u8981\u6309\u94AE\u642D\u914D\u4F7F\u7528\u3002",paraId:3,tocIndex:4},{value:"\u6587\u672C\u6309\u94AE\uFF08Text\uFF09",paraId:4,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5F31\u64CD\u4F5C\uFF0C\u4E0D\u5E0C\u671B\u5F15\u8D77\u5F3A\u70C8\u89C6\u89C9\u5E72\u6270\u65F6\u4F7F\u7528\u3002",paraId:4,tocIndex:4},{value:"\u94FE\u63A5\u6309\u94AE\uFF08Link\uFF09",paraId:5,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u8DF3\u8F6C\u94FE\u63A5\u7684\u573A\u666F\u3002",paraId:5,tocIndex:4},{value:"\u5728\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u5185\uFF0C\u5EFA\u8BAE\u4E3B\u8981\u6309\u94AE\u6700\u591A\u51FA\u73B0\u4E00\u4E2A",paraId:6,tocIndex:5},{value:"\u6309\u94AE\u6587\u5B57\u5EFA\u8BAE\u4F7F\u7528\u7B80\u6D01\u6709\u529B\u7684\u52A8\u8BCD\u6216\u52A8\u8BCD\u77ED\u8BED",paraId:6,tocIndex:5},{value:"\u5F53\u6309\u94AE\u5728\u52A0\u8F7D\u72B6\u6001\u65F6\uFF0C\u5EFA\u8BAE\u7981\u7528\u6309\u94AE\uFF0C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4",paraId:6,tocIndex:5},{value:"\u56FE\u6807\u6309\u94AE\u901A\u5E38\u7528\u4E8E\u5DE5\u5177\u680F\uFF0C\u5EFA\u8BAE\u642D\u914D Tooltip \u63D0\u793A\u6309\u94AE\u542B\u4E49",paraId:6,tocIndex:5},{value:`
\u8FD9\u4E2A\u6587\u6863\u5305\u542B\u4E86\uFF1A
1. \u7EC4\u4EF6\u7684\u57FA\u672C\u4ECB\u7ECD
2. \u4EE3\u7801\u6F14\u793A\u90E8\u5206
3. \u8BE6\u7EC6\u7684 API \u8BF4\u660E\u8868\u683C
4. \u4E0D\u540C\u7C7B\u578B\u6309\u94AE\u7684\u8BBE\u8BA1\u8BF4\u660E
5. \u4F7F\u7528\u5EFA\u8BAE\u548C\u6700\u4F73\u5B9E\u8DF5

\u6587\u6863\u91C7\u7528\u4E86\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\uFF0C\u65B9\u4FBF\u7528\u6237\u5FEB\u901F\u67E5\u627E\u6240\u9700\u4FE1\u606F\u3002
`,paraId:7,tocIndex:5}]},51449:function(x,t){t.Z=`import React from 'react';
import  Button  from './index';
import { SearchOutlined } from '@ant-design/icons';

// \u57FA\u7840\u6309\u94AE
const ButtonDemo = () => {
    return (
        <div className="button-demo">
            <div className="demo-section">
                <h3>\u57FA\u7840\u6309\u94AE</h3>
                <Button>\u9ED8\u8BA4\u6309\u94AE</Button>
            </div>

            <div className="demo-section">
                <h3>\u6309\u94AE\u7C7B\u578B</h3>
                <Button type="primary">\u4E3B\u8981\u6309\u94AE</Button>
                <Button type="secondary">\u6B21\u8981\u6309\u94AE</Button>
                <Button type="text">\u6587\u672C\u6309\u94AE</Button>
                <Button type="link">\u94FE\u63A5\u6309\u94AE</Button>
            </div>

            <div className="demo-section">
                <h3>\u6309\u94AE\u5C3A\u5BF8</h3>
                <Button size="large">\u5927\u6309\u94AE</Button>
                <Button size="medium">\u4E2D\u6309\u94AE</Button>
                <Button size="small">\u5C0F\u6309\u94AE</Button>
            </div>

            <div className="demo-section">
                <h3>\u56FE\u6807\u6309\u94AE</h3>
                <Button icon={<SearchOutlined />}>\u641C\u7D22</Button>
            </div>

            <div className="demo-section">
                <h3>\u52A0\u8F7D\u72B6\u6001</h3>
                <Button loading>\u52A0\u8F7D\u4E2D</Button>
            </div>

            <div className="demo-section">
                <h3>\u7981\u7528\u72B6\u6001</h3>
                <Button disabled>\u7981\u7528\u6309\u94AE</Button>
            </div>

            <div className="demo-section">
                <h3>\u5757\u7EA7\u6309\u94AE</h3>
                <Button block>\u5757\u7EA7\u6309\u94AE</Button>
            </div>
        </div>
    );
};

export default ButtonDemo;`}}]);
