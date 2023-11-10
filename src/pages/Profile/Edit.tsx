import { DatePicker, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const Edit = () => {
  const onFinish = () => {
    console.log("Success:");
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        <Form.Item
          label="Street Number"
          name="streetNumber"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Street Number" />
        </Form.Item>

        <Form.Item
          label="Apartment"
          name="apartment"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Apartment" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="City" />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="State" />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Country" />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input type="number" placeholder="Postal Code" />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select placeholder="Status"></Select>
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Job Description"
          name="jobDescription"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <TextArea placeholder="Job Description" />
        </Form.Item>

        <Form.Item
          label="Manager"
          name="manager"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Manager" />
        </Form.Item>

        <Form.Item
          label="Compensation"
          name="compensation"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select placeholder="Compensation"></Select>
        </Form.Item>

        <Form.Item
          label="Payment Method"
          name="paymentMethod"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select placeholder="Payment Method"></Select>
        </Form.Item>

        <Form.Item
          label="Compensation Period"
          name="compensationPeriod"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select placeholder="Compensation Period"></Select>
        </Form.Item>

        <Form.Item
          label="Agreement Signed"
          name="agreementSigned"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <DatePicker placeholder="Agreement Signed" />
        </Form.Item>

        <Form.Item
          label="Last Payment"
          name="lastPayment"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <DatePicker placeholder="Last Payment" />
        </Form.Item>
      </Form>
    </Form>
  );
};

export default Edit;
