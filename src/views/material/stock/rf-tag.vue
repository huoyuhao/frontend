<template>
  <d-card :title="title">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formItem"
      class="d-form"
      :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="操作类型">
        <a-radio-group v-model:value="operateType" button-style="solid">
          <a-radio-button value="create">标签入厂</a-radio-button>
          <a-radio-button value="modify">标签初始化</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="RF标签码">
        <a-textarea v-model:value="tagStr" placeholder="请输入RF标签码" :auto-size="{ minRows: 3, maxRows: 6 }" allow-clear />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
        <a-button class="d-button" type="primary" @click="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </d-card>
</template>
<script>
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { product } from '/@/api/product/index';
import { message, Form, Radio } from 'ant-design-vue';

export default defineComponent({
  name: 'DMaterialRfTag',
  components: {
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button,
  },
  setup() {
    const state = reactive({
      title: '标签初始化',
      tagStr: '',
      operateType: 'create',
    });
    const api = '/rfTag';

    const formItem = reactive({
      rfTagCodeList: [],
    });
    const ruleValidate = reactive({});
    const { useForm } = Form;
    const { resetFields } = useForm(formItem, ruleValidate);
    formItem.rfTagCodeList = computed(() => {
      return state.tagStr.trim().split(/[\n\s+,，；;]/g).filter((item) => {
        return item;
      });
    });
    const submit = () => {
      state.loading = true;
      const method = state.operateType === 'modify' ? 'put' : 'post';
      product({ api, method, data: formItem }).then(() => {
        message.success(`${state.title}成功`);
        resetFields();
        state.tagStr = '';
      })
        .catch();
    };
    return {
      ...toRefs(state),
      formItem,
      submit,
    };
  },
});
</script>
<style lang="less" scoped>
.d-button{
  width: 200px;
}
</style>
