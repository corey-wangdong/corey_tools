const isMobile = {
  Windows: function () {
    return /IEMobile/i.test(navigator.userAgent);
  },
  Android: function () {
    return /Android/i.test(navigator.userAgent);
  },
  iOS: function () {
    return /iPhone|iPad|iPod|iOS|Mac/i.test(navigator.userAgent);
  },
  Hw: function () {
    return /HuaweiHealth/.test(navigator.userAgent);
  },
  Hos: function () {
    return /hos\/boohee/i.test(navigator.userAgent);
  },
  app: function () {
    const standalone = (window.navigator as any).standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari|micromessenger/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);

    let result = false;
    if (ios) {
      if (!standalone && !safari) {
        result = true;
      }
    } else {
      if (/boohee/.test(userAgent)) {
        result = true;
      }
    }
    return result;
  },
  weixin: function () {
    const ua = navigator.userAgent.toLowerCase();
    const isWeixin = ua.indexOf('micromessenger') !== -1;
    if (isWeixin) {
      return true;
    } else {
      return false;
    }
  },
  AliApp: () => {
    return /AliApp/i.test(navigator.userAgent);
  },
  Alipay: () => {
    return /AlipayClient/i.test(navigator.userAgent);
  },
  Taobao: () => {
    return (
      /AliApp/i.test(navigator.userAgent) && /TB/i.test(navigator.userAgent)
    );
  },
  AliHealth: () => {
    return (
      /AliApp/i.test(navigator.userAgent) &&
      /AliHealthClient/i.test(navigator.userAgent)
    );
  },
  WeixinMiniProgram: () => {
    return window.__wxjs_environment === 'miniprogram';
  }
};

export default isMobile;