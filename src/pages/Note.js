import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import "./styles.css";
import CreateModal from "../components/CreateModal";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import DeleteModal from "../components/DeletModal";

const Note = () => {
  const [aside, setAside] = useState(true);
  const [createNoteModal, setCreateNoteModal] = useState(false);
  const [deleteNoteModal, setDeleteNoteModal] = useState(false);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const notes = useSelector((state) => {
    return state.notes;
  });
  useEffect(() => {
    var arr = notes.filter((item) => {
      return item.title.includes(search) || item.note.includes(search);
    });
    setFilterData(arr);
  }, [search]);

  return (
    <div>
      {deleteNoteModal && <DeleteModal index={index} setDeleteNoteModal={setDeleteNoteModal} deleteNoteModal={deleteNoteModal}/>}
      {createNoteModal && (
        <CreateModal setCreateNoteModal={setCreateNoteModal} />
      )}
      <Header
        aside={aside}
        setAside={setAside}
        setCreateNoteModal={setCreateNoteModal}
        setSearch={setSearch}
        search={search}
      />
      <div className="main-container">
        {aside && <Aside />}

        <div className="right-container">
          <div className="main">
            <Card
              filterData={filterData}
              search={search}
              setDeleteNoteModal={setDeleteNoteModal}
              setIndex={setIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
