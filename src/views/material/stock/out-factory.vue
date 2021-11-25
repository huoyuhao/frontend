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
      <a-form-item label="仓库管理员">
        <a-select
          v-model:value="formItem.warehouseKeeperId"
          placeholder="请选择"
          show-search
          option-filter-prop="label"
          :options="userArr"
        />
      </a-form-item>
      <a-form-item label="经办人">
        <a-select
          v-model:value="formItem.ownerId"
          placeholder="请选择"
          show-search
          option-filter-prop="label"
          :options="userArr"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
        <a-button class="d-button" type="primary" @click="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </d-card>
  <d-material-detail v-if="materialDetail && materialDetail.length > 0" :data="materialDetail" :loading="loading" @update="queryMaterialDetail"></d-material-detail>
</template>
<script>
import { computed, defineComponent, reactive, toRefs, ref } from 'vue';
import { product } from '/@/api/product/index';
import { message, Form } from 'ant-design-vue';
import { getMaterialDetail } from './config';
import DMaterialDetail from '/@/views/material/material/detail/detail.vue';

export default defineComponent({
  name: 'DMaterialEntryFactory',
  components: { DMaterialDetail },
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
      warehouseKeeperId: '',
      ownerId: '',
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
      product({ api, method: 'put', data: formItem }).then(() => {
        message.success(`${state.title}成功`);
        resetFields();
        state.tagStr = '';
      })
        .catch();
    };

    const { rfTagCodeList } = toRefs(formItem);
    const { loading, materialDetail, queryMaterialDetail } = getMaterialDetail(rfTagCodeList);
    const userArr = ref([]);
    const queryUser = () => {
      product({ api: '/user' }).then((res) => {
        userArr.value = res.map((item) => {
          return { value: item.userId, label: `${item.userCode}(${item.userName})` };
        });
      })
        .catch();
    };
    queryUser();
    return {
      ...toRefs(state),
      formItem,
      submit,
      userArr,
      loading,
      materialDetail,
      queryMaterialDetail,
    };
  },
});
</script>
<style lang="less" scoped>
.d-button{
  width: 200px;
}
</style>
