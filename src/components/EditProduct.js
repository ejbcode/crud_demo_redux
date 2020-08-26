import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductEditStartAction } from "../actions/productsActions";

const EditProduct = () => {
  const edit = useSelector((state) => state.products.productEdit);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(edit);
  if (edit === null) {
    return <p>There´s no selected product</p>;
  }

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductEditStartAction(editForm));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit a product
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  aria-describedby="name"
                  placeholder="Product`s Name"
                  value={editForm.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="price">Price</label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  name="price"
                  aria-describedby="price"
                  placeholder="Product`s Price"
                  value={editForm.price}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block font-weight-bold text-uppercase"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
