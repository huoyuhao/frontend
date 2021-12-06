export const list = [
  { title: '唯一标识', dataIndex: 'productiveTaskId', rowKey: true, hideTable: true, hideForm: true },
  { title: '计划名称', dataIndex: 'productiveTaskName', required: true, slots: { customRender: 'productiveTaskName' } },
  { title: '关联单号', dataIndex: 'relatedNumber', required: true },
  { title: '完⼯⽇期', dataIndex: 'requiredDate', required: true, slots: { customRender: 'requiredDate' }  },
  { title: '客户简称', dataIndex: 'customName', required: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialId', hideTable: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialName', hideForm: true },
  { title: '⽬标物料数量', dataIndex: 'targetMaterialNum', required: true },
  { title: '原材料', dataIndex: 'rawMaterialList', required: true, hideTable: true, slots: { customRender: 'rawMaterialList' } },
  { title: '紧急程度', dataIndex: 'productiveTaskUrgency', required: true, slots: { customRender: 'productiveTaskUrgency' } },
  { title: '状况', dataIndex: 'productiveTaskStatus', required: true, slots: { customRender: 'productiveTaskStatus' } },
  { title: '负责⼈', dataIndex: 'ownerId', required: true, slots: { customRender: 'user' } },
  { title: '审核⼈', dataIndex: 'auditorId', required: true, slots: { customRender: 'user' } },
  { title: '备注', dataIndex: 'description' },
];

export const taskMaterial = [
  { title: '物料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '物料代码', dataIndex: 'rawMaterialCode' },
  { title: '物料名称', dataIndex: 'rawMaterialName' },
  { title: '物料数量', dataIndex: 'rawMaterialNum' },
];
