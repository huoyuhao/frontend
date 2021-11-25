<template>
  <d-card :title="title">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formItem"
      class="d-form"
      :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="物料位置" name="materialEntityPosition">
        <a-select
          v-model:value="formItem.materialEntityPosition"
          placeholder="请选择"
          show-search
          option-filter-prop="label"
          :options="materialEntityPositionArr"
        />
      </a-form-item>
      <a-form-item label="RF标签码" name="tagStr">
        <a-textarea v-model:value="tagStr" placeholder="请输入RF标签码" :auto-size="{ minRows: 3, maxRows: 6 }" allow-clear />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
        <a-button class="d-button" type="primary" @click="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </d-card>
</template>
<script>
import { computed, defineComponent, reactive, toRefs, ref } from 'vue';
import { product } from '/@/api/product/index';
import { message, Form } from 'ant-design-vue';

export default defineComponent({
  name: 'DMaterialEntryFactory',
  components: { },
  setup() {
    const state = reactive({
      title: '生产入库',
      tagStr: '',
    });
    const api = '/material/entity';

    const formItem = reactive({
      rfTagCodeList: [],
      materialEntityAction: 2,
      materialEntityPositionType: 1,
      materialEntityPosition: null,
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
      product({ api, method: 'put', data: formItem }).then(() => {
        message.success(`${state.title}成功`);
        resetFields();
        state.tagStr = '';
      })
        .catch();
    };
    const materialEntityPositionArr = ref([]);

    const query = () => {
      product({ api: '/warehouse', method: 'get' }).then((res) => {
        materialEntityPositionArr.value = res.map((item) => {
          return { value: item.warehouseId, label: item.warehouseName };
        });
      })
        .catch();
    };
    query();
    return {
      ...toRefs(state),
      formItem,
      materialEntityPositionArr,
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
