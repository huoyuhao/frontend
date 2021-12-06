<template>
  <div class="d-login">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formState"
      class="d-form"
      :wrapper-col="{ span: 24 }"
    >
    <a-row class="d-title" justify="center">登录</a-row>
    <a-form-item name="name">
      <a-input size="large" placeholder="账号" v-model:value="formState.name" autocomplete="off" />
    </a-form-item>
    <a-form-item  name="psw">
      <a-input size="large" placeholder="密码" v-model:value="formState.psw" type="password" autocomplete="off" />
    </a-form-item>
    <a-button class="d-button" html-type="submit" block size="large" @click="submit">登录</a-button>
  </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { useRouter } from 'vue-router';
import { setToken } from '/@/utils/http/auth';
import { getUserData } from '/@/utils/user/index';

export default defineComponent({
  name: 'DLogin',
  components: {
  },
  setup() {
    const router = useRouter();
    const { setUserName } = getUserData();
    const formRef = ref();
    const state = reactive({
      loading: false,
      data: '',
    });
    const formState = reactive({
      name: 'admin',
      psw: 'haofang@123',
    });
    const submit = () => {
      state.loading = true;
      product({ api: '/login', method: 'post', data: formState }).then((res) => {
        state.loading = false;
        const { token } = res;
        setToken(token);
        setUserName(formState.name);
        router.push({ name: 'home' });
      })
        .catch();
    };
    return {
      ...toRefs(state),
      formState,
      formRef,
      submit,
    };
  },
});
</script>
<style lang="less" scoped>
.d-login{
  height: 100vh;
  width: 100vw;
  background: @color;
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-form{
  background: #FFF;
  margin-top: -160px;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 30px 20px;
  width: 400px;
  .d-title{
    margin-bottom: 20px;
    color: #222;
    font-size: 20px;
    font-weight: 900;
 }
  .d-button{
    background: #40A9FF;
    color: #FFF;
    &:hover{
      border: none;
   }
 }
}
</style>
