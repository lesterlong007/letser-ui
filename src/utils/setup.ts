/**
 * @name setup 主动执行的代码
 * @author Lester
 * @date 2021-05-08 10:23
 */
import FastClick from 'fastclick';

/**
 * 计算根元素font size
 */
(function (doc: Document, win: Window) {
  const docEl: HTMLElement = doc.documentElement;
  const docBody: HTMLElement = doc.body;
  const resizeEvent: string = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const reCalc = () => {
    const clientWidth: number = docBody.clientWidth || docEl.clientWidth || win.innerWidth || 375;
    const calcFontSize: number = 10 * (clientWidth / 375);
    docEl.style.fontSize = calcFontSize + 'px';
    docEl.style.opacity = '1';
  };
  reCalc();
  if (!document.addEventListener) return;
  win.addEventListener(resizeEvent, reCalc, false);
  doc.addEventListener('DOMContentLoaded', reCalc, false);
})(document, window);

(function (doc: Document) {
  doc.title = '\u200E';

  // @ts-ignore 快速点击 解决移动端点击事件延迟300ms和点击穿透的问题
  FastClick.attach(doc.body);

  // 解决ios下输入框点击不唤起软键盘的bug
  doc.body.addEventListener('click', (event: MouseEvent) => {
    const ele: HTMLElement = event.target as HTMLElement;
    const { tagName } = ele;
    if (tagName === 'INPUT' || tagName === 'TEXTAREA' || ele.getAttribute('contenteditable') === 'true') {
      ele.focus();
    }
  });

  // 错误监控
  /* win.onerror = (msg, url, row, col, error) => {
    console.log(msg);
    console.log(url);
    console.log(row);
    console.log(col);
    console.log(error);
    return false;
  }; */
})(document);
