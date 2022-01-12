/**
 * @name base
 * @author Lester
 * @date 2022-01-12 11:22
 */

/**
 * 获取屏幕宽度
 */
export const getClientWidth = () : number => {
  const docBody = document.body;
  const docEl: HTMLElement = document.documentElement;
  return docBody.clientWidth || docEl.clientWidth || window.innerWidth || 375;
};

/**
 * 当前屏幕相对标准屏幕比
 */
export const screenRate = getClientWidth() / 375;
