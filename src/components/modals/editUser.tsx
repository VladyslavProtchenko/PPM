import { FC } from "react";
import { IUser } from "../../types/Types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type editUserProps = {
  user: IUser;
  modalOpen: boolean;
  setModalOpen: (data: boolean) => void;
};
const EditUser: FC<editUserProps> = ({ user, modalOpen, setModalOpen }) => {
  const cloneUser = JSON.parse(JSON.stringify(user));
  delete cloneUser.id;
  delete cloneUser.posts;
  delete cloneUser.img;

  return (
    <>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
        onClose={() => setModalOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={modalOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit user data and send message
        </DialogTitle>
        <Button
          aria-label="close"
          onClick={() => setModalOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </Button>
        <DialogContent dividers>
          {Object.entries(cloneUser).map(([key, value]) => (
            <TextField
              sx={{ marginBottom: "30px" }}
              required
              fullWidth
              multiline
              label={key + " field"}
              defaultValue={value}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setModalOpen(false)}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditUser;
