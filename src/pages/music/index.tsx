import music from '@/models/music';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
const TableList: React.FC = connect(({ music }) => ({ music }))(function ({
  dispatch,
  music: { list },
}: any) {
  useEffect(() => {
    dispatch({
      type: 'music/getMusicList',
      payload: {},
    });
  }, []);
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '地区',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <PageContainer>
      <ProTable
        search={{
          labelWidth: 120,
        }}
        options={false}
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
        dataSource={list}
        columns={columns}
      />
    </PageContainer>
  );
});

export default TableList;
