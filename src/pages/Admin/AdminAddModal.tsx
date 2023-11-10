import {  useState } from "react";
import { Button, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAdmins } from "../../Store/Admins/useAdmins";

const AdminAddModal = ({

  openModal,
  handleCloseModal,
}: {
  openModal: boolean;
  handleCloseModal: (data: boolean) => void;
}) => {
  const { addUser } = useAdmins();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    number: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  },);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [compensation, setCompensationType] = useState( '');
  const [jobDescription, setBriefJobDescription] = useState('');
  const [paymentMethod, setMethodOfPayment] = useState( '');
  const [compensationPeriod, setCompensationSchedule] = useState( '');
  const [manager, setFullNameOfSupervisor] = useState( '');
  const [lastPaymentDate, setLastPaymentDate] = useState('');
  const [agreementSigned, setAgreementSigned] = useState('');
  const [signedConfidentiallyAgreement, setSignedConfidentiallyAgreement] = useState('');
  const [workAgreements, setWorkAgreements] = useState('');
  const [GovtID, setGovtID] = useState('');
  const [TimeSheetsSubmitted, setTimeSheetsSubmitted] = useState('');
  const [ConfirmReceiptPaid, setConfirmReceiptPaid] = useState('');


  return (
    <Modal
      onCancel={() => handleCloseModal(false)}
      open={openModal}
      title="Edit user"
      footer={() => (
        <>
          <Button
            className="bg-green-400"
            onClick={() => {
              addUser({
                id: Math.random(),
                name,
                email,
                phone,
                address,
                status,
                title,
                jobDescription,
              
                manager,
                compensation,
                paymentMethod,
                compensationPeriod,
                lastPaymentDate, //date
                
                agreementSigned,//date
                signedConfidentiallyAgreement,
                workAgreements,
                GovtID,
                TimeSheetsSubmitted,
                ConfirmReceiptPaid, //date
              });
              handleCloseModal(false);
            }}
          >
            Apply
          </Button>
          <Button
            className="bg-red-400"
            onClick={() => handleCloseModal(false)}
          >
            Cancel
          </Button>
        </>
      )}
    >
      <div className="flex divide-x border-t pt-10">
        <div className={block}>
          <Input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            value={phone}
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />          
          <Input
            value={status}
            placeholder="status"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />

          <div className={addressContainer}>
            <Input
              value={address.number}
              placeholder="Number street"
              onChange={(e) => {
                setAddress({ ...address, number: e.target.value });
              }}
            />
            <Input
              value={address.street}
              placeholder="Street"
              onChange={(e) => {
                setAddress({ ...address, street: e.target.value });
              }}
            />
            <Input
              value={address.apt}
              placeholder="Apartments"
              onChange={(e) => {
                setAddress({ ...address, apt: e.target.value });
              }}
            />
            <Input
              value={address.city}
              placeholder="City"
              onChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
            <Input
              value={address.state}
              placeholder="State"
              onChange={(e) => {
                setAddress({ ...address, state: e.target.value });
              }}
            />
            <Input
              value={address.country}
              placeholder="Country"
              onChange={(e) => {
                setAddress({ ...address, country: e.target.value });
              }}
            />
            <Input
              value={address.postalCode}
              placeholder="PostalCode"
              onChange={(e) => {
                setAddress({ ...address, postalCode: e.target.value });
              }}
            />
          </div>

          <Input
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextArea
            value={jobDescription}
            placeholder="Job description"
            onChange={(e) => {
              setBriefJobDescription(e.target.value);
            }}
          />
        </div>

        <div className={block}>
          <Input
            value={compensation}
            placeholder="Compensation type"
            onChange={(e) => {
              setCompensationType(e.target.value);
            }}
          />
          <Input
            value={paymentMethod}
            placeholder="Payment method"
            onChange={(e) => {
              setMethodOfPayment(e.target.value);
            }}
          />
          <Input
            value={compensationPeriod}
            placeholder="Compensation schedule"
            onChange={(e) => {
              setCompensationSchedule(e.target.value);
            }}
          />
          <Input
            value={manager}
            placeholder="Superior full-name"
            onChange={(e) => {
              setFullNameOfSupervisor(e.target.value);
            }}
          />
          <Input
            value={lastPaymentDate}
            placeholder="Last payment data"
            onChange={(e) => {
              setLastPaymentDate(e.target.value);
            }}
          />


          <Input
            value={agreementSigned}
            placeholder="agreement Signed"
            onChange={(e) => {
              setAgreementSigned(e.target.value);
            }}
          />
          <Input
            value={signedConfidentiallyAgreement}
            placeholder="signed confidentially agreement"
            onChange={(e) => {
              setSignedConfidentiallyAgreement(e.target.value);
            }}
          />
          <Input
            value={workAgreements}
            placeholder="work agreements"
            onChange={(e) => {
              setWorkAgreements(e.target.value);
            }}
          />
          <Input
            value={GovtID}
            placeholder="GovtID"
            onChange={(e) => {
              setGovtID(e.target.value);
            }}
          />
          <Input
            value={TimeSheetsSubmitted}
            placeholder="Time sheets submitted"
            onChange={(e) => {
              setTimeSheetsSubmitted(e.target.value);
            }}
          />
          <Input
            value={ConfirmReceiptPaid}
            placeholder="Confirm receipt paid"
            onChange={(e) => {
              setConfirmReceiptPaid(e.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AdminAddModal;

const addressContainer = "flex flex-col space-y-4";
const block = "flex w-1/2 flex-col space-y-4 px-5";
