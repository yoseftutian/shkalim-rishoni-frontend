import { Button, CircularProgress } from "@mui/material";
import "./modal.css";
import { useModalContext } from "../../contexts/modalContext";
import { useLoadingContext } from "../../contexts/loadingContext";

export default function Modal({ title, clickedYes }) {
  const { open, setOpen } = useModalContext();
  const { loading } = useLoadingContext();
  return (
    <div className={`column modal-container ${!open && "hidden"} `}>
      <h1>{title}</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="row modal-buttons">
          <Button variant="contained" onClick={clickedYes}>
            Yes
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            No
          </Button>
        </div>
      )}
    </div>
  );
}
