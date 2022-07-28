import { removeRule, rule, Tmock } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { FooterToolbar, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Input, message } from 'antd';
import user from 'mock/user';
import React, { useEffect, useRef, useState } from 'react';
import { connect, FormattedMessage, useIntl } from 'umi';

const TableList: React.FC = connect(({ user }: any) => ({ user }))(function (props: any) {
  const { dispatch } = props;
  console.log(props, 'pros');

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '地区',
      dataIndex: 'name',
    },
    {
      title: '值',
      dataIndex: 'value',
    },
    {
      title: '其他',
      dataIndex: 'type',
      sorter: true,
      hideInForm: true,
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              dispatch({
                type: 'user/getUser',
                payload: {},
              });
            }}
          >
            <PlusOutlined /> 添加
          </Button>,
        ]}
        dataSource={props.user.users}
        columns={columns}
      />
    </PageContainer>
  );
});

export default TableList;
