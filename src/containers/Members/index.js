import React, { Component, useState, useEffect } from 'react'
import { Table, Tag, Space, Layout, Menu  } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as usersActions from '../../redux/actions/users.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import { EditOutlined, DeleteOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Members extends Component {
  mounted = true;
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'No.',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Full Name',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password'
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
          render: (text, record) => (
            <Space size="middle">
              <a><EditOutlined /></a>
              <a><DeleteOutlined /></a>
            </Space>
          ),
        }
      ],
      data: [],
      collapsed: false,
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    const { onFetchListUsers } = this.props
    onFetchListUsers();
  }

  render() {
    const {listUsers} = this.props;
    console.log('listUsers',listUsers)
    return (
      <div>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          <Table columns={this.state.columns} dataSource={listUsers} rowKey={listItem => listItem.id} className="table"/>
          </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
   listUsers: state.usersReducer.listUsers
})
const mapDispatchToProps = dispatch => ({
  onFetchListUsers: () => dispatch(usersActions.fetchUserList())
})
export default connect(mapStateToProps,mapDispatchToProps)(Members)
