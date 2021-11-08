import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        //crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
        //dispatch
    }
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }


    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <br />
            <div className="row">
                <div className=" col-7">
                    TODOS
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </div>

            </div>

        </>
    )
}
