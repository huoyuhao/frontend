export const type = [
  { title: '唯一标识', dataIndex: 'materialTypeId', rowKey: true, hideTable: true, hideForm: true },
  { title: '物料组别代码', dataIndex: 'materialTypeCode', required: true },
  { title: '物料组别名称', dataIndex: 'materialTypeName', required: true },
  { title: '助记码', dataIndex: 'materialTypeMnemonic', required: true },
  { title: '备注', dataIndex: 'description' },
];
export const unit = [
  { title: '唯一标识', dataIndex: 'materialUnitId', rowKey: true, hideTable: true, hideForm: true },
  { title: '物料计量单位代码', dataIndex: 'materialUnitCode', required: true },
  { title: '物料计量单位名称', dataIndex: 'materialUnitName', required: true },
  { title: '助记码', dataIndex: 'materialUnitMnemonic', required: true },
  { title: '备注', dataIndex: 'description' },
];

export const list = [
  { title: '唯一标识', dataIndex: 'materialId', hideTable: true, rowKey: true, hideForm: true },
  { title: '物料代码', dataIndex: 'materialCode', required: true },
  { title: '物料名称', dataIndex: 'materialName', required: true, slots: { customRender: 'materialName' } },
  { title: '规格型号', dataIndex: 'materialSap', required: true, disabled: true },
  { title: '物料属性', dataIndex: 'materialProperties', required: true, disabled: true },
  { title: '物料类型', dataIndex: 'materialTypeId', hideTable: true, required: true, hideForm: true },
  { title: '物料类型', dataIndex: 'materialType', hideForm: true, slots: { customRender: 'materialType' } },
  { title: '物料计量单位', dataIndex: 'materialUnitId', hideTable: true, required: true, hideForm: true, filter: true },
  { title: '物料计量单位', dataIndex: 'materialUnit', hideForm: true, slots: { customRender: 'materialUnit' } },
  { title: '数量显示精度', dataIndex: 'accuracy', required: true, disabled: true },
  { title: '备注', dataIndex: 'description' },
];

export const detail = [
  { title: '唯一标识', dataIndex: 'materialEntityId', rowKey: true },
  { title: '物料名称', dataIndex: 'materialName', filter: true },
  { title: '物料类型ID', dataIndex: 'materialTypeId', filter: true },
  { title: '元素数量', dataIndex: 'materialEntityElementNumber' },
  { title: 'RF标签码', dataIndex: 'rfTagCode' },
  { title: '物料状态', dataIndex: 'materialEntityStatus', filter: true },
  { title: '物料位置', dataIndex: 'materialEntityPosition', sort: 'string', filter: true },
];

export const trace = [
  { title: '唯一标识', dataIndex: 'materialEntityTraceId', rowKey: true },
  { title: 'RF标签码', dataIndex: 'currentRFTagCode' },
  { title: '物料ID', dataIndex: 'materialEntityId' },
  { title: '物料件追踪的相关操作', dataIndex: 'operation' },
  { title: '仓库ID', dataIndex: 'warehouseId' },
  { title: '流水线ID', dataIndex: 'assemblyLineId' },
];
