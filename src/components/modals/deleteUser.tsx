import {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type deleteUserProps = {
    userId: number | null,
    modalOpen: boolean,
    setModalOpen: (data: boolean) => void
}
const DeleteUser: FC<deleteUserProps> = ({userId, modalOpen, setModalOpen}) => {
    return (
        <>
            <Dialog
                sx={{'& .MuiDialog-paper': {width: '80%', maxHeight: 435}}}
                onClose={() => setModalOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={modalOpen}
            >
                <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                    Edit post
                </DialogTitle>
                <Button
                    aria-label="close"
                    onClick={() => setModalOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </Button>
                <DialogContent dividers>
                    <TextField
                        sx={{marginBottom: '30px'}}
                        required
                        fullWidth
                        multiline
                        label="post title"
                        defaultValue={userId}
                    />
                    {/*<TextField*/}
                    {/*    required*/}
                    {/*    fullWidth*/}
                    {/*    multiline*/}
                    {/*    label="post description"*/}
                    {/*    defaultValue={post.content}*/}
                    {/*/>*/}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={() => setModalOpen(false)}
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteUser;