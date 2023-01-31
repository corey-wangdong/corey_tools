const showToast = (title: string, duration = 1500, mask = true) => {
  if (!title) return false;

  const toastList = document.getElementsByClassName('corey-toast');
  for (let i = 0; i < toastList.length; i++) {
    toastList[i].remove();
  }
  const toastHtml = document.createElement('div') as any;
  toastHtml.className = 'corey-toast';
  if (mask) {
    toastHtml.style = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; opacity: 0; transition: opacity .2s;';
  }
  const toast = document.createElement('div') as any;
  toast.style = 'position: absolute; left: 50%; bottom: 50%; transform: translateX(-50%); min-height: 32px; line-height: 18px; background-color: rgba(0, 0, 0, 0.6); padding: 7px 10px; color: #fff; font-size: 12px; text-align: center; border-radius: 6px; box-sizing: border-box;';
  const toastText = document.createElement('div') as any;
  toastText.style = 'text-overflow: -o-ellipsis-lastline; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical;';
  const text = document.createTextNode(title);
  toastText.appendChild(text);
  toast.appendChild(toastText);
  toastHtml.appendChild(toast);
  document.body.appendChild(toastHtml);
  setTimeout(() => {
    toastHtml.style.opacity = 1;
  });
  setTimeout(() => {
    toastHtml.style.opacity = 0;
    setTimeout(() => {
      toastHtml.remove();
    }, 200);
  }, duration);
};

export default showToast;