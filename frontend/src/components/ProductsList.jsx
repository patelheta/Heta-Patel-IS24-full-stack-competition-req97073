import React from "react";

const ProductsList = () => {
  const products = [
    {
      productId: 1,
      productName: "Topicware",
      productOwnerName: "Maddy Beard",
      Developers: [
        "Monica Mayert",
        "Allan Labadie",
        "Gretchen Abbott",
        "Tyrone Casper",
        "Valerie Wiegand",
      ],
      scrumMasterName: "Dolores Sprosson",
      startDate: "2022/04/18",
      methodology: "Waterfall",
    },
    {
      productId: 2,
      productName: "Realpoint",
      productOwnerName: "Leopold Tomblett",
      Developers: [
        "Carrie Mitchell",
        "Yvonne Cremin",
        "Jackie Hermann",
        "Ron Kautzer",
        "Ms. Amanda Hickle",
      ],
      scrumMasterName: "Deloria Hansom",
      startDate: "2022/04/23",
      methodology: "Agile",
    },
    {
      productId: 3,
      productName: "Dynazzy",
      productOwnerName: "Malia Pennaman",
      Developers: [
        "Monica Mayert",
        "Allan Labadie DVM",
        "Gretchen Abbott",
        "Tyrone Casper DVM",
        "Miss Valerie Wiegand",
      ],
      scrumMasterName: "Othello Petr",
      startDate: "2022/10/02",
      methodology: "Waterfall",
    },
    {
      productId: 4,
      productName: "Skivee",
      productOwnerName: "Birgitta Toe",
      Developers: ["Jackie Hermann", "Ron Kautzer", "Ms. Amanda Hickle"],
      scrumMasterName: "Rolfe Cicccitti",
      startDate: "2022/08/16",
      methodology: "Agile",
    },
  ];
  return (
    <>
      <main className="container-fluid">
        <section className="table-responsive">
          <div className="d-flex justify-content-between">
            <h1>Product List</h1>
            <button type="button" className="btn btn-primary">
              Add New Product
            </button>
          </div>
          <table className="table table-hover rounded-2">
            <thead>
              <tr>
                <th className="align-middle" scope="col">
                  Product Number
                </th>
                <th className="align-middle" scope="col">
                  Product Name
                </th>
                <th className="align-middle" scope="col">
                  Product Owner
                </th>
                <th className="align-middle" scope="col">
                  Developer Names
                </th>
                <th className="align-middle" scope="col">
                  Scrum Master
                </th>
                <th className="align-middle" scope="col">
                  Start Date
                </th>
                <th className="align-middle" scope="col">
                  Methodology
                </th>
                <th className="align-middle">Edit</th>
                <th className="align-middle">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.productOwnerName}</td>
                  <td>{product.Developers.join(", ")}</td>
                  <td>{product.scrumMasterName}</td>
                  <td>{product.startDate}</td>
                  <td>{product.methodology}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger rounded-pill"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default ProductsList;
