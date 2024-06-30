import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { removeTodo, setTodos } from '../../Redux/Slice/todoSlice';
import { useGetTodosQuery, useDeleteTodoMutation } from '../../Redux/Slice/todoApiSlice';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    if (data) {
      dispatch(setTodos(data));
    }
  }, [navigate, userInfo, data, dispatch]);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id).unwrap();
      dispatch(removeTodo(id));
    } catch (err) {
      console.error('Failed to delete the todo:', err);
    }
  };

  if (isLoading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata oluştu: {error.message}</p>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={() => navigate('/profile')} className={styles.profileButton}>Profile Git</button>
        <button onClick={() => navigate('/add-new-todo')} className={styles.addButton}>Yeni Görev Ekle</button>
      </div>
      <div className={styles.userInfo}>
        <h2>Kullanıcı Bilgileri</h2>
        <p>İsim: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
      </div>
      <div className={styles.todoList}>
        <h2>Görevler</h2>
        {data && data.map(item => (
          <div key={item._id} className={styles.todoItem}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={() => handleDelete(item._id)} className={styles.deleteButton}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
