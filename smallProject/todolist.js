import React, { useState } from 'react';
function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // 增加任务
    const handleAddTodo = () => {
        // trim()函数去除输入值两端的空格，然后检查是否为空字符串
        if (inputValue.trim() !== '') {
            // 使用展开运算符(...)将现有的待办事项列表(todos)和一个新的待办事项对象({ inputValue })合并成一个新的数组。
            setTodos([...todos, { inputValue }]);
            setInputValue('');
        }
    };


    // 删除任务
    const handleDeleteTodo = (index) => {
        // 进行一个浅拷贝
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <div className="App">
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.inputValue}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>

        </div>
    );
}

export default App;

