import React from 'Preact'
import getKeyValue from '../../../utils/key-map-value';

function KeyMapValue() {
  const needValueKey = [
    "order_no",
    "sub_order_no",
    "name",
    'sex'
  ]

  const obj = {
    order_no: 345363,
    sub_order_no: 679686,
    name: 'corey',
    age: 18
  };

  const tempObj = getKeyValue(needValueKey, obj)
  console.log('tempObj----', tempObj);

  return (
    <div>
      <h2>数据源对象</h2>
      <h3>{JSON.stringify(obj)}</h3>
      <h2>需要获取值的key</h2>
      <h3>{JSON.stringify(needValueKey)}</h3>
      <h2>拿到值的数据</h2>
      <h3>{JSON.stringify(tempObj)}</h3>
    </div>
  )
}

export default KeyMapValue