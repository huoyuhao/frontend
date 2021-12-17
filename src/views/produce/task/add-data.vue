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
        <a-form-item v-if="item.dataIndex === 'targetMaterialId'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="materialArr"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'requiredDate'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-date-picker
            v-model:value="formItem[item.dataIndex]"
            type="date"
            placeholder="请选择"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'productiveTaskUrgency'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-radio-group v-model:value="formItem[item.dataIndex]" button-style="solid">
            <a-radio-button :value="0">正常</a-radio-button>
            <a-radio-button :value="1">紧急</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'productiveTaskStatus'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-radio-group v-model:value="formItem[item.dataIndex]" button-style="solid">
            <a-radio-button :value="0">正常</a-radio-button>
            <a-radio-button :value="1">异常</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'targetMaterialNum'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input-number v-model:value="formItem[item.dataIndex]" :placeholder="`请输入${item.title}`" />
        </a-form-item>
        <a-form-item v-else-if="['ownerId', 'auditorId'].includes(item.dataIndex)" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="userArr"
          />
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
                <a-input-number v-model:value="element.rawMaterialNum" placeholder="请输入原材料数量" :formatter="value => `${value}${materialObj[element.rawMaterialId] || '' }`" :parser="value => value.replace(`${materialObj[element.rawMaterialId] || '' }`, '')" />
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
          <a-form-item :key="item.dataIndex" label="物料操作">
            <a-row align="middle">
              <a-col span="9" offset="2">
                <a-button type="dashed" block @click="addRawMaterialList">
                  <PlusOutlined />
                  新增物料
                </a-button>
              </a-col>
              <a-col span="9" offset="2">
                <a-button type="dashed" block @click="bomDetail">
                  <p style="color: #1890ff">按BOM分析</p>
                </a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </template>
        <a-form-item v-else-if="!item.hideForm" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-input v-model:value="formItem[item.dataIndex]" />
        </a-form-item>
      </template>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, reactive, toRefs, inject } from 'vue';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { addFun } from '/@/utils/operate/index';
import { list } from './config';
import { Form, Radio, message } from 'ant-design-vue';
import { product } from '/@/api/product/index';

export default defineComponent({
  name: 'DAddTaskData',
  components: {
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button,
    MinusCircleOutlined, PlusOutlined,
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
    materialArr: Array,
    materialObj: Object,
  },
  setup(props, { emit }) {
    const userArr = inject('userArr');
    const api = '/productive/task';
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
    const bomDetail = () => {
      if (!formItem.targetMaterialId) return message.error('请先选择目标物料信息');
      if (!formItem.targetMaterialNum > 0) return message.error('请先输入目标物料数量');
      product({ api: `bom?targetMaterialId=${formItem.targetMaterialId}`, method: 'get' }).then((res) => {
        if (res.length === 0) return message.error('没有该物料的BOM单信息。');
        const [detail] = res;
        formItem.rawMaterialList = detail.rawMaterialList.map((item) => {
          return {
            rawMaterialId: item.rawMaterialId,
            rawMaterialNum: item.rawMaterialNum * formItem.targetMaterialNum };
        });
      })
        .catch();
    };
    return {
      bomDetail,
      addRawMaterialList,
      removeRawMaterialList,
      list,
      formItem,
      visibleModal,
      validateInfos,
      close,
      submit,
      userArr,
    };
  },
});
</script>
<style lang="less" scoped></style>
