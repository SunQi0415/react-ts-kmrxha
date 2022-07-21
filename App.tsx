import * as React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './style.css';

export default function App() {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item noStyle name="username" />
      </Form>
    </div>
  );
}
