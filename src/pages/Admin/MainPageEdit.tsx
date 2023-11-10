import { Input } from "antd";
import { useMainPage } from "../../Store/MainPage/useMainPage";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IContent } from "../../types/Types";

interface some {
  [key: number]: boolean;
}

const MainPageEdit = () => {
  const { content, setContent } = useMainPage();
  const [data, setData] = useState<IContent[]>(content);
  const [isEdit, setIsEdit] = useState<some>({});

  useEffect(() => {
    const obj: some = {};
    content.map((_, index) => {
      obj[index] = false;
    });
    setIsEdit(obj);
  }, [content]);

  console.log(isEdit);

  return (
    <div className={container}>
      {content.map((item, index) => (
        <div className={sectionCard} key={index}>
          {!isEdit[index] ? (
            <FiEdit
              className={editIcon}
              onClick={() => {
                const obj: some = { ...isEdit };
                obj[index] = !isEdit[index];

                setIsEdit(obj);
              }}
            />
          ) : (
            <div className={editIcon}>
              <MdDone
                onClick={() => {
                  const obj: some = { ...isEdit };
                  obj[index] = !isEdit[index];

                  setIsEdit(obj);
                  setContent([...data]);
                }}
              />
              <AiOutlineClose
                onClick={() => {
                  const obj: some = { ...isEdit };
                  obj[index] = !isEdit[index];

                  setIsEdit(obj);
                }}
              />
            </div>
          )}
          <h1 className={title}>{index + 1} section</h1>
          {!isEdit[index] && (
            <>
              <div className={headers}>
                <h1 className={header}>{item.title}</h1>
                <h1 className={header}>{item.title2}</h1>
              </div>

              <p>{item.text}</p>
              <p>{item.text2}</p>
            </>
          )}
          {isEdit[index] && (
            <div className={editField}>
              <Input
                placeholder="title"
                onChange={(e) => {
                  setData(
                    data.map((item) =>
                      item.section === index + 1
                        ? { ...item, title: e.target.value }
                        : item
                    )
                  );
                }}
              />
              <Input
                placeholder="title 2"
                onChange={(e) => {
                  setData(
                    data.map((item) =>
                      item.section === index + 1
                        ? { ...item, title2: e.target.value }
                        : item
                    )
                  );
                }}
              />
              <Input
                placeholder="text"
                onChange={(e) => {
                  setData(
                    data.map((item) =>
                      item.section === index + 1
                        ? { ...item, text: e.target.value }
                        : item
                    )
                  );
                }}
              />
              <Input
                placeholder="text 2"
                onChange={(e) => {
                  setData(
                    data.map((item) =>
                      item.section === index + 1
                        ? { ...item, text2: e.target.value }
                        : item
                    )
                  );
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainPageEdit;

const editField = " flex flex-col space-y-2";
const editIcon = "absolute flex space-x-4 text-xl top-3 right-4 cursor-pointer";
const headers = "mb-4";
const header = "font-bold";
const title = "mb-4 font-bold ml-4";
const sectionCard = "border px-4 py-2 relative";
const container =
  "relative flex flex-col w-full h-full py-5 px-10 text-gray-600";
