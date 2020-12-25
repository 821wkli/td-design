import React, { useState, useEffect } from 'react';
import { Text, Table, WingBlank, WhiteSpace } from '@td-design/react-native';
import { ScrollView } from 'react-native';

export default () => {
  const [data, setData] = useState<any>([]);
  const columns = [
    {
      title: '管理员',
      dataIndex: 'userInfo',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '角色',
      dataIndex: 'roleName',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '部门',
      dataIndex: 'opDepartmentName',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '操作内容',
      dataIndex: 'opContent',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '业务模块',
      dataIndex: 'businessModule',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
  ];
  const columns1 = [
    {
      title: '管理员',
      dataIndex: 'userInfo',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      width: 100,
      flex: 2,
    },
    {
      title: '角色',
      dataIndex: 'roleName',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      width: 50,
    },
    {
      title: '部门',
      dataIndex: 'opDepartmentName',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      width: 20,
    },
    {
      title: '操作内容',
      dataIndex: 'opContent',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '业务模块',
      dataIndex: 'businessModule',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '操作时间',
      dataIndex: 'createdAt',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'dateTimeRange',
    },
    {
      title: 'IP地址',
      dataIndex: 'loginIp',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
  ];
  const dataSource = [
    {
      id: 4694447,
      userId: 117676,
      userName: 'sxj',
      nickName: 'sxj',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 22,
      opDepartmentName: 'lw是',
      accountType: 1,
      opResources: '',
      opType: '解除封禁会员账号、漫克',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '会员模块',
      loginIp: '222.173.46.190',
      loginCity: null,
      createdAt: '2020-12-01T17:17:22.000+08:00',
    },
    {
      id: 4694446,
      userId: 117676,
      userName: 'sxj',
      nickName: 'sxj',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 22,
      opDepartmentName: 'lw是',
      accountType: 1,
      opResources: '117569,[2, 1, 4],11',
      opType: '封禁会员账号、漫克',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '会员模块',
      loginIp: '222.173.46.190',
      loginCity: null,
      createdAt: '2020-12-01T17:17:09.000+08:00',
    },
    {
      id: 4694443,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T17:15:09.000+08:00',
    },
    {
      id: 4694369,
      userId: 117676,
      userName: 'sxj',
      nickName: 'sxj',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 22,
      opDepartmentName: 'lw是',
      accountType: 1,
      opResources: '117569,[4],11',
      opType: '封禁会员账号、漫克',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '会员模块',
      loginIp: '222.173.46.190',
      loginCity: null,
      createdAt: '2020-12-01T17:00:21.000+08:00',
    },
    {
      id: 4694357,
      userId: 117676,
      userName: 'sxj',
      nickName: 'sxj',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 22,
      opDepartmentName: 'lw是',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '222.173.46.190',
      loginCity: null,
      createdAt: '2020-12-01T16:59:43.000+08:00',
    },
    {
      id: 4694356,
      userId: 117676,
      userName: 'sxj',
      nickName: 'sxj',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 22,
      opDepartmentName: 'lw是',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '222.173.46.190',
      loginCity: null,
      createdAt: '2020-12-01T16:59:43.000+08:00',
    },
    {
      id: 4694289,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T16:54:06.000+08:00',
    },
    {
      id: 4694269,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T16:45:09.000+08:00',
    },
    {
      id: 4694268,
      userId: null,
      userName: null,
      nickName: null,
      roleId: null,
      roleName: '',
      opDepartmentId: null,
      opDepartmentName: null,
      accountType: null,
      opResources: '',
      opType: '退出登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T16:44:56.000+08:00',
    },
    {
      id: 4694267,
      userId: 117704,
      userName: 'bly',
      nickName: '毕立宇',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 0,
      opResources: 'bly',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T16:44:26.000+08:00',
    },
    {
      id: 4694243,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:33:38.000+08:00',
    },
    {
      id: 4694242,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:33:38.000+08:00',
    },
    {
      id: 4694241,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:33:32.000+08:00',
    },
    {
      id: 4694240,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: '',
      opType: '查看黑白名单列表',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '黑白名单',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:33:32.000+08:00',
    },
    {
      id: 4694227,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:23:13.000+08:00',
    },
    {
      id: 4694226,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:19:13.000+08:00',
    },
    {
      id: 4694176,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:10:33.000+08:00',
    },
    {
      id: 4694173,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '27.208.255.241',
      loginCity: null,
      createdAt: '2020-12-01T16:08:31.000+08:00',
    },
    {
      id: 4694040,
      userId: 116969,
      userName: 'zhuxc',
      nickName: 'zhuxc',
      roleId: 519,
      roleName: '超级管理员角色',
      opDepartmentId: 4,
      opDepartmentName: '根部门1',
      accountType: 1,
      opResources: 'zhuxc',
      opType: '运营商用户名密码登录',
      deviceNo: null,
      deviceSystem: null,
      clientId: 'manke-management',
      groupId: null,
      businessModule: '用户登录',
      loginIp: '60.12.241.84',
      loginCity: null,
      createdAt: '2020-12-01T15:52:27.000+08:00',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(dataSource);
    }, 1000);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>基本:</Text>
      <WhiteSpace />
      <WingBlank>
        <Table columns={columns} dataSource={data} tableHeight={300} />
      </WingBlank>
      <WhiteSpace />
      <Text>columns 属性:</Text>
      <WhiteSpace />
      <WingBlank>
        <Table columns={columns1} dataSource={data} tableHeight={300} />
      </WingBlank>
      <WhiteSpace />
      <Text>横向滚动:</Text>
      <WhiteSpace />
      <WingBlank>
        <Table columns={columns} dataSource={data} horizontalScroll={true} tableWidth={1000} tableHeight={300} />
      </WingBlank>
      <WhiteSpace />
      <Text>自定义render:</Text>
      <WhiteSpace />
      <WingBlank>
        <Table columns={columns1} dataSource={[]} tableHeight={300} />
      </WingBlank>
      <Text>空:</Text>
      <WhiteSpace />
      <WingBlank>
        <Table columns={columns} dataSource={[]} tableHeight={300} />
      </WingBlank>
    </ScrollView>
  );
};
