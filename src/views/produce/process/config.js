export const list = [
  { title: '唯一标识', dataIndex: 'standardProcessId', rowKey: true, hideTable: true, hideForm: true },
  { title: '工序代码', dataIndex: 'standardProcessCode', required: true },
  { title: '工序名称', dataIndex: 'standardProcessName', required: true },
  { title: '助记码', dataIndex: 'standardProcessMnemonic', required: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialId', hideTable: true },
  { title: '⽬标物料', dataIndex: 'targetMaterialName', hideForm: true },
  { title: '目标物料数量', dataIndex: 'targetMaterialNum' },
  { title: '原材料', dataIndex: 'rawMaterialList', hideTable: true, slots: { customRender: 'rawMaterialList' } },
  { title: '合格率', dataIndex: 'pass', required: true },
  { title: '备注', dataIndex: 'description' },
];

export const taskMaterial = [
  { title: '物料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '物料代码', dataIndex: 'rawMaterialCode' },
  { title: '物料名称', dataIndex: 'rawMaterialName' },
  { title: '物料数量', dataIndex: 'rawMaterialNum' },
];
