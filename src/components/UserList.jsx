import { useEffect, useState } from "react";
import { Container, Table, Button, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, fetchUsers } from "../redux/actions";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, totalPages } = useSelector((state) => state);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Container>
      <h2 className="my-4">User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} alt="avatar" width="50" />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="ms-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        />
        {[...Array(totalPages).keys()].map((p) => (
          <Pagination.Item
            key={p + 1}
            active={p + 1 === page}
            onClick={() => handlePageChange(p + 1)}
          >
            {p + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        />
      </Pagination>
    </Container>
  );
};

export default UserList;
