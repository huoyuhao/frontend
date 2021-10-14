<template>
  <d-card :title="title">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formItem"
      class="d-form"
      :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="RF标签码" name="tagStr">
        <a-textarea v-model:value="tagStr" placeholder="请输入RF标签码" :auto-size="{ minRows: 3, maxRows: 6 }" allow-clear />
      </a-form-item>
      <a-form-item label="物料位置" name="materialEntityPosition">
        <a-input-number v-model:value="formItem.materialEntityPosition" placeholder="输入输入物料位置" />
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
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'DProductEntryFactory',
  components: { },
  props: {
    data: Object,
  },
  setup() {
    const state = reactive({
      title: '出厂',
      tagStr: '',
    });
    const api = '/material/entity';

    const formItem = reactive({
      rfTagCodeList: [],
      materialEntityAction: 3,
      materialEntityPositionType: 3,
      materialEntityPosition: null,
    });
    formItem.rfTagCodeList = computed(() => {
      return state.tagStr.trim().split(/[\n\s+,，；;]/g).filter((item) => {
        return item;
      });
    });
    const submit = () => {
      state.loading = true;
      product({ api, method: 'put', data: formItem }).then(() => {
        message.success(`${state.title}成功`);
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
