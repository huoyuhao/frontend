/**
 * 属性值复制
 * 将oldObj的属性值复制到newObj中（必须是newObj存在的属性）
 * [{ id:'' }, { name: 'liam', id: '123' }] => { id: '123' }
 * 注意是浅拷贝
 */
export const getObjectValueByKey = (newObj, oldObj) => {
  if (!newObj || !oldObj) return;
  Object.keys(newObj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(oldObj, key)) {
      // eslint-disable-next-line
      newObj[key] = oldObj[key];
    }
  });
};
/**
 * 将一维数组根据key的值转换为对象数组
 * @param {Array} arr 对象数组
 * @param {String} key 排序的根据
 * ['sex'， [{ name: 'liam', sex: 'man' }, { name: 'william', sex: 'man' },
 * { name: 'lucy', sex: 'woman' }, { name: 'lisa', sex: 'woman' }]]
 * { man: [{ name: 'liam', sex: 'man' }, { name: 'william', sex: 'man' }]
 *   woman: [{ name: 'lucy', sex: 'woman' }, { name: 'lisa', sex: 'woman' }]}
 */

export const transArrByKey = (data, key) => {
  const result = {};
  data.forEach((item) => {
    const content = item[key];
    if (!Object.prototype.hasOwnProperty.call(result, content)) {
      (result[content]) = [];
    }
    result[content].push(item);
  });
  return result;
};
/**
 * @param {Array} data 对象数组
 * @param {String} key 排序的根据
 * @description 根据数组中的key来对数组对象排序
 */
export const sortArrByKey = (data, key) => {
  const result = {};
  data.forEach((element) => {
    const type = element[key];
    if (!result[type]?.length) {
      result[type] = [];
    }
    result[type].push(element);
  });
  return Object.values(result).flat();
};

export const getTime = (time = +new Date()) => {
  const date = new Date(time); // 增加8小时
  return date.toJSON().substr(0, 19).replace('T', ' ');
};
