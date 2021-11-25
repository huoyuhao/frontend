<template>
  <a-modal
    v-model:visible="visibleModal"
    :title="isModify ? '修改' : '新增'"
    width="800px"
    cancelText="取消"
    okText="提交"
    @ok="submit"
    @cancel="close"
  >
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
      <template v-for="item in list">
        <a-form-item v-if="item.dataIndex === 'psw'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input-password v-model:value="formItem[item.dataIndex]" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item v-else-if="!item.hideForm" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input v-model:value="formItem[item.dataIndex]" :disabled="isModify && (item.disabled || false)" />
        </a-form-item>
      </template>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { addFun } from '/@/utils/operate/index';
import { list } from './config';
import { Form, Input } from 'ant-design-vue';

export default defineComponent({
  name: 'DAddSettingUser',
  components: {
    'a-input-password': Input.Password,
  },
  props: {
    visible: {
      required: true,
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default() {
        return null;
      },
    },
    isModify: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const api = '/user';
    const formItem = reactive({});
    const ruleValidate = reactive({});
    list.forEach((item) => {
      const { title, dataIndex } = item;
      if (item.required) {
        ruleValidate[dataIndex] = [{ required: true, message: `${title}不能为空！` }];
      }
      formItem[dataIndex] = '';
    });
    const { useForm } = Form;
    const { resetFields, validate, validateInfos } = useForm(formItem, ruleValidate);

    const { visibleModal, close, submit } = addFun(toRefs(props), emit, { resetFields, validate }, { formItem, api });

    return {
      list,
      formItem,
      visibleModal,
      validateInfos,
      close,
      submit,
    };
  },
});
</script>
<style lang="less" scoped></style>
