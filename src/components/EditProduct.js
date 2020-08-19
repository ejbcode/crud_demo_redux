import React from "react";

const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit a product
            </h2>
            <form>
              <div className="form-group">
                <label for="name">Email address</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  aria-describedby="name"
                  placeholder="Product`s Name"
                />
              </div>
              <div className="form-group">
                <label for="price">Email address</label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  name="price"
                  aria-describedby="price"
                  placeholder="Product`s Price"
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
