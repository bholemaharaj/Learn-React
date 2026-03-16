import "./styles.css";

export const MyList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <div className="table-container">
          <h2>Items to display:</h2>
          <table className="items-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>🤷 No items to display </p>
      )}
    </>
  );
};
