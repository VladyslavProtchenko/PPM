import { useState } from "react";
import { Button, Input, Modal } from "antd";
import { useVacancy } from "../../Store/Vacancies/vacancies";
import TextArea from "antd/es/input/TextArea";
import { IVacancy } from "../../types/Types";

const PostModal = ( {data}: {data:IVacancy} ) => {
  const { vacancies, setModal, editVacancy, setVacancy } = useVacancy();
  const [post, setPost] = useState<IVacancy>({
    ...data,
  });

  return (
    <Modal
      onCancel={() => setModal(false)}
      open={vacancies.isModal}
      title="Edit Post"
      footer={() => (
        <>
          <Button
            className="bg-green-400"
            onClick={() => {
              
              if (vacancies.isAdd) {
                setVacancy(post);
                return setModal(false);
              }
              console.log(post, 'post sssss')
              editVacancy({
                ...data ,title: post.title, text:post.text
              });
              setModal(false);
            }}
          >
            Apply
          </Button>
          <Button className="bg-red-400" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </>
      )}
    >
      <div className="flex flex-col space-y-5">
        <Input
          value={post.title || ""}
          placeholder="Set title"
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
        <TextArea
          value={post.text || ""}
          placeholder="Set content"
          onChange={(e) => {
            setPost({ ...post, text: e.target.value });
          }}
        />
      </div>
    </Modal>
  );
};

export default PostModal;
