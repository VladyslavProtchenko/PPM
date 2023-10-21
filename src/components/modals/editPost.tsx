import {FC, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {EditProps} from "../../types/Types";

const EditPost: FC<EditProps> = ({post, modalOpen, setModalOpen}) => {

    const [newPost, setNewPost] = useState(post)
    const successEditPost = () => {

    }

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
                        defaultValue={post.title}
                        onChange={e=> setNewPost({...newPost, title: e.target.value})}
                    />
                    <TextField
                        required
                        fullWidth
                        multiline
                        label="post description"
                        defaultValue={post.content}
                        onChange={e=> setNewPost({...newPost, content: e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={successEditPost}
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EditPost;