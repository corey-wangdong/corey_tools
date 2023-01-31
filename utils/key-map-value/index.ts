interface IKeyInfo {
  key: string;
  getKey?: string;
  default?: any
  child?: {
    key: string | number;
    default?: any
  }
}

// 根据配置的字段从传入的对象中获取需要的字段和值
const getKeyValue = (keyInfo: (IKeyInfo | string)[], options: {}) => {
  const obj: any = {};
  (keyInfo || []).forEach(item => {
    const keys = Object.keys(options);
    const values: any[] = Object.values(options);

    const findIndex = keys.findIndex(key => {
      if (typeof item === 'string') return key === item;
      // 默认从 key 拿数据，如果有 getKey 则从 getKey 拿数据 （有可能字段重写）
      return key === (item.getKey ? item.getKey : item.key)
    })

    // 找到了对应的 key
    if (findIndex >= 0) {
      const child = typeof item === 'string' ? null : item.child;
      const currValue: any = values[findIndex];

      // 当前字段有配置 child
      if (child && typeof item !== 'string') {

        if (currValue && Object.prototype.toString.call(currValue) === '[object Object]') {
          const currChildKeyValue = getKeyValue([{ key: child.key as string }], currValue)
          if (currChildKeyValue) {
            obj[item.key] = currChildKeyValue[child.key] || child.default;
          }
        } else if (currValue && Array.isArray(currValue)) {
          obj[item.key] = currValue[child.key as number] || child.default;

        } else {
          obj[item.key] = child.default;
        }
      }
      // 当前字段配置的就是字符串 或者 当前字段信息里没有配置 child 信息
      else {
        typeof item === 'string' ? obj[item] = currValue : obj[item.key] = currValue || item.default;
      }
    }
    // 没有找到对应的 key
    else {
      typeof item !== 'string' && (obj[item.key] = item.default);
    }
  })
  return obj
}

export default getKeyValue;