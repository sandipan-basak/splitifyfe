import React from 'react'
import { useState } from 'react';
import { Form, Input, Button, Tooltip } from "antd";
import { GoogleOutlined } from '@ant-design/icons'


const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    // alert('Username: ' + username);
  };

  return (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <Form className='bg-white p-6 rounded shadow-lg w-80'>
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='rounded'
        />
      </Form.Item>
      <Form.Item className='w-full flex justify-center'>
        <Tooltip title='Google Login' placement='bottom'>
          <Button
            type='primary'
            htmlType='submit'
            onClick={handleSubmit}
            className='w-full bg-primary'
            icon={<GoogleOutlined/>}
            shape='circle'
          />
        </Tooltip>
      </Form.Item>
    </Form>
  </div>
)};

export default LoginForm;