//使用する関数毎にnpm install & import する
// npm install --save lodash.chunk

import _chunk from 'lodash.chunk';

// 配列を4つ毎に分ける
return _chunk(this.data_checked, 4); 