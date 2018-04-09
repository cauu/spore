import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * @todo 
 * 通常react的入口函数都是render函数调用,
 * react-router-v4中，可以通过match来获取到当前渲染的相对路径,
 * 如果是v3及一下版本，router的baseurl应与spore中的appBaseurl保持一致
 */
render(<div>fuck</div>, document.getElementById('root'));