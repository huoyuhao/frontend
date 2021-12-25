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
        <a-form-item v-if="item.dataIndex === 'redBlue'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-radio-group v-model:value="formItem[item.dataIndex]" button-style="solid">
            <a-radio-button :value="0">红单</a-radio-button>
            <a-radio-button :value="1">蓝单</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-else-if="['ownerUserId', 'handlerUserId'].includes(item.dataIndex)" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="userArr"
          />
        </a-form-item>
        <a-form-item v-else-if="item.dataIndex === 'noteType'" :key="item.dataIndex" :label="item.title" v-bind="validateInfos[item.dataIndex]">
          <a-select
            v-model:value="formItem[item.dataIndex]"
            placeholder="请选择"
            show-search
            option-filter-prop="label"
            :options="noteTypeArr"
          />
        </a-form-item>
        <template v-else-if="item.dataIndex === 'materialList'">
          <a-form-item
            v-for="(element, index) in formItem.materialList"
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
                  v-if="formItem.materialList.length > 1"
                  class="dynamic-delete-button"
                  :disabled="formItem.materialList.length === 1"
                  @click="removeRawMaterialList(element)"
                />
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item :key="item.dataIndex">
            <a-button type="dashed" style="width: 60%; margin-left: 190px" @click="addRawMaterialList">
              <PlusOutlined />
              新增物料
            </a-button>
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
import { list, noteTypeArr } from './config';
import { Form, Radio } from 'ant-design-vue';

export default defineComponent({
  name: 'DAddNoteData',
  components: { MinusCircleOutlined, PlusOutlined, 'a-radio-group': Radio.Group, 'a-radio-button': Radio.Button },
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
    const api = '/note';
    const formItem = reactive({});
    const ruleValidate = reactive({});
    const userArr = inject('userArr');

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
      formItem.materialList.push({
        rawMaterialId: null,
        rawMaterialNum: null,
      });
    };
    const removeRawMaterialList = (item) => {
      const index = formItem.materialList.indexOf(item);
      if (index !== -1) {
        formItem.materialList.splice(index, 1);
      }
    };
    return {
      addRawMaterialList,
      removeRawMaterialList,
      list,
      userArr,
      noteTypeArr,
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
