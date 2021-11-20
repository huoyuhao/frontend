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
      <template v-for="item in bom">
        <a-form-item v-if="item.dataIndex === 'targetMaterialId'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="materialArr"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'targetMaterialNum'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input-number v-model:value="formItem[item.dataIndex]" :placeholder="`请输入${item.title}`" />
        </a-form-item>
        <template v-else-if="item.dataIndex === 'rawMaterialList'">
          <a-form-item
            v-for="(element, index) in formItem.rawMaterialList"
            :key="element + item + index"
            :label="item.title"
            :name="['domains1', index, 'value']"
          >
            <a-row align="middle">
              <a-col span="8">
                <a-select
                  v-model:value="element.rawMaterialId"
                  placeholder="请选择"
                  show-search
                  option-filter-prop="label"
                  :options="materialArr"
                />
              </a-col>
              <a-col span="11" offset="2">
                <a-input-number v-model:value="element.rawMaterialNum" placeholder="请输入原材料数量" />
              </a-col>
              <a-col span="1">
                <MinusCircleOutlined
                  v-if="formItem.rawMaterialList.length > 1"
                  class="dynamic-delete-button"
                  :disabled="formItem.rawMaterialList.length === 1"
                  @click="removeRawMaterialList(element)"
                />
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item :key="item.dataIndex">
            <a-button type="dashed" style="width: 60%; margin-left: 180px" @click="addRawMaterialList">
              <PlusOutlined />
              新增物料
            </a-button>
          </a-form-item>
        </template>
        <a-form-item v-else-if="!item.hideForm" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input v-model:value="formItem[item.dataIndex]" :disabled="isModify && (item.disabled || false)" />
        </a-form-item>
      </template>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { product } from '/@/api/product/index';
import { addFun } from '/@/utils/operate/index';
import { bom } from './config';
import { Form } from 'ant-design-vue';

export default defineComponent({
  name: 'DAddMaterialBom',
  components: { MinusCircleOutlined, PlusOutlined },
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
    const api = '/bom';
    const formItem = reactive({});
    const ruleValidate = reactive({});
    bom.forEach((item) => {
      const { title, dataIndex } = item;
      if (item.required) {
        ruleValidate[dataIndex] = [{ required: true, message: `${title}不能为空！` }];
      }
      formItem[dataIndex] = '';
      if (dataIndex === 'rawMaterialList') {
        formItem[dataIndex] = [];
      }
    });
    const { useForm } = Form;
    const { resetFields, validate, validateInfos } = useForm(formItem, ruleValidate);

    const { visibleModal, close, submit } = addFun(toRefs(props), emit, { resetFields, validate }, { formItem, api });
    const materialArr = ref([]);
    const query = () => {
      product({ api: '/material', method: 'get' }).then((res) => {
        materialArr.value = res.map((item) => {
          return { value: item.materialId, label: item.materialName };
        });
      })
        .catch();
    };
    query();

    const addRawMaterialList = () => {
      formItem.rawMaterialList.push({
        rawMaterialId: null,
        rawMaterialNum: null,
      });
    };
    const removeRawMaterialList = (item) => {
      const index = formItem.rawMaterialList.indexOf(item);
      if (index !== -1) {
        formItem.rawMaterialList.splice(index, 1);
      }
    };
    return {
      addRawMaterialList,
      removeRawMaterialList,
      materialArr,
      bom,
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
