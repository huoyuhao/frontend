export const type = [
  { title: '唯一标识', dataIndex: 'materialTypeId', rowKey: true, hideTable: true, hideForm: true },
  { title: '物料组别代码', dataIndex: 'materialTypeCode', required: true },
  { title: '物料组别名称', dataIndex: 'materialTypeName', required: true },
  { title: '助记码', dataIndex: 'materialTypeMnemonic', required: true },
  { title: '备注', dataIndex: 'description' },
];
export const unit = [
  { title: '唯一标识', dataIndex: 'materialUnitId', rowKey: true, hideForm: true },
  { title: '物料计量单位代码', dataIndex: 'materialUnitCode', required: true },
  { title: '物料计量单位名称', dataIndex: 'materialUnitName', required: true },
  { title: '助记码', dataIndex: 'materialUnitMnemonic', required: true },
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
  { title: '目标物料数量', dataIndex: 'targetMaterialNum', required: true },
  { title: '原材料列表', dataIndex: 'rawMaterialList', hideTable: true, required: true },
  { title: '备注', dataIndex: 'description' },
];

export const bomMaterial = [
  { title: '原材料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '原材料代码', dataIndex: 'rawMaterialCode' },
  { title: '原材料名称', dataIndex: 'rawMaterialName' },
  { title: '原材料数量', dataIndex: 'rawMaterialNum' },
];
