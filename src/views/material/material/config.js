export const type = [
  { title: '唯一标识', dataIndex: 'materialTypeId', rowKey: true, hideTable: true, hideForm: true },
  { title: '物料类型代码', dataIndex: 'materialTypeCode', required: true },
  { title: '物料类型名称', dataIndex: 'materialTypeName', required: true },
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

export const bom = [
  { title: '唯一标识', dataIndex: 'bomId', rowKey: true, hideTable: true, hideForm: true },
  { title: 'BOM代码', dataIndex: 'bomCode', required: true },
  { title: 'BOM名称', dataIndex: 'bomName', required: true },
  { title: '助记码', dataIndex: 'bomMnemonic', required: true },
  { title: '目标物料ID', dataIndex: 'targetMaterialId', hideTable: true, required: true },
  { title: '目标物料代码', dataIndex: 'targetMaterialCode', hideTable: true, hideForm: true },
  { title: '目标物料名称', dataIndex: 'targetMaterialName', hideForm: true },
  { title: '目标物料数量', dataIndex: 'targetMaterialNum' },
  { title: '物料列表', dataIndex: 'rawMaterialList', hideTable: true, required: true },
  { title: '备注', dataIndex: 'description' },
];

export const bomMaterial = [
  { title: '物料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '物料代码', dataIndex: 'rawMaterialCode' },
  { title: '物料名称', dataIndex: 'rawMaterialName' },
  { title: '物料数量', dataIndex: 'rawMaterialNum' },
];
