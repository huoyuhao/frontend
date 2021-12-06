import { ref } from 'vue';
import { product } from '/@/api/product/index';

const userList = ref([]);
const userArr = ref([]);
const userName = ref('');
const userInfo = ref(null);
const userObj = ref(null);
const userNameObj = ref(null);
export const getUserData = () => {
  const setUserName = (name) => {
    userName.value = name;
  };
  const queryUser = () => {
    return new Promise((resolve, reject) => {
      product({ api: '/user' }).then((res) => {
        userArr.value = res.map((item) => {
          return { value: item.userId, label: `${item.userCode}(${item.userName})` };
        });
        resolve(res);

        userList.value = res || [];
        userArr.value = [];
        userObj.value = {};
        userNameObj.value = {};

        userList.value.forEach((element) => {
          userArr.value.push({ value: element.userId, label: `${element.userCode}(${element.userName})` });
          userObj.value[element.userId] = element;
          userNameObj.value[element.userId] = element.userName;
        });
      })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    userList,
    userArr,
    userInfo,
    userName,
    userObj,
    userNameObj,
    setUserName,
    queryUser,
  };
};
