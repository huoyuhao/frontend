export const list = [
  { title: '唯一标识', dataIndex: 'noteId', rowKey: true, hideTable: true, hideForm: true },
  { title: '单据代码', dataIndex: 'noteCode', required: true },
  { title: '单据类型', dataIndex: 'noteType', required: true, slots: { customRender: 'noteType' } },
  { title: '红蓝单', dataIndex: 'redBlue' },
  { title: '原材料', dataIndex: 'materialList', hideTable: true, slots: { customRender: 'materialList' } },
  { title: '领料⼈', dataIndex: 'ownerUserId', required: true, slots: { customRender: 'user' } },
  { title: '发料⼈', dataIndex: 'handlerUserId', required: true, slots: { customRender: 'user' } },
  { title: '⽤途', dataIndex: 'usage' },
  { title: '描述', dataIndex: 'description' },
];

export const materialColumns = [
  { title: '物料ID', dataIndex: 'rawMaterialId', rowKey: true },
  { title: '物料代码', dataIndex: 'rawMaterialCode' },
  { title: '物料名称', dataIndex: 'rawMaterialName' },
  { title: '物料数量', dataIndex: 'rawMaterialNum' },
];

// 正常，⽣产中，撤销，暂停，完成
export const noteTypeArr = [
  { label: '领料单', value: 0 },
];
