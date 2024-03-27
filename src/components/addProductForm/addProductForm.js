import { Button, CircularProgress, TextField } from "@mui/material";
import "./addProductForm.css";
import { useLoadingContext } from "../../contexts/loadingContext";
import { createNewProduct } from "../../utils/apiCalls";
export default function AddProductForm() {
  const { loading, setLoading } = useLoadingContext();
  const createProduct = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const body = Object.fromEntries(formData);
      await createNewProduct(body);
      e.target.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="column form-container">
      <h1>Add new product</h1>
      <form className="column form" onSubmit={createProduct}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField type="file" label="img" name="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" variant="contained">
            Add Product Amen
          </Button>
        )}
      </form>
    </div>
  );
}
