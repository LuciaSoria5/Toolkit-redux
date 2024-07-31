import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos' // concatenamos al baseUrl ese /todos
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }` // concatenamos al baseUrl ese /todos
        }),
    })

})

// devuelve un custom hook con toda la info necesaria de la peticion (errores y demas)
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;