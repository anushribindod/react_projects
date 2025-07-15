import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './crudoperations.css';

function CrudApp() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', dob: '', address: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const formatted = res.data.slice(0, 5).map((user, i) => ({
          id: user.id,
          name: user.name,
          age: 20 + i,
          dob: `200${i + 1}-01-0${i + 1}`,
          address: `${user.address.street}, ${user.address.city}`
        }));
        setUsers(formatted);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newUser = { ...form, id: Date.now() };
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    console.log('POST Payload:', res.data);
    setUsers([res.data, ...users]); 
    handleClear();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { ...form, id: editId };
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`, updatedUser);
    console.log('PUT Payload:', res.data);
    const updatedList = users.map(user => user.id === editId ? res.data : user);
    setUsers(updatedList);
    handleClear();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log('DELETE Payload:', { id });
    const updatedList = users.filter(user => user.id !== id);
    setUsers(updatedList);
    if (editId === id) handleClear();
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, age: user.age, dob: user.dob, address: user.address });
    setEditId(user.id);
  };

  const handleClear = () => {
    setForm({ name: '', age: '', dob: '', address: '' });
    setEditId(null);
  };

  return (
    <div className="container">
      <h2 className="title">User List</h2>
      <form className="form" onSubmit={editId ? handleUpdate : handleAdd}>
        <label className="label">Name *</label>
        <input
          className="input"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        />

        <label className="label">Age *</label>
        <input
          className="input"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter Age"
          type="number"
          required
        />

        <label className="label">Date of Birth *</label>
        <input
          className="input"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          type="date"
          required
        />

        <label className="label">Address *</label>
        <input
          className="input"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter Address"
          required
        />

        <div className="buttonGroup">
          <button type="submit" className="addBtn">{editId ? 'Update' : 'Add'}</button>
          <button type="button" className="clearBtn" onClick={handleClear}>Clear</button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr className="theadRow">
            <th>ID</th><th>Name</th><th>Age</th><th>DOB</th><th>Address</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="tbodyRow">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>{user.address}</td>
              <td>
                <div className="actionButtons">
                  <button className="updateBtn" onClick={() => handleEdit(user)}>Update</button>
                  <button className="deleteBtn" onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudApp;
