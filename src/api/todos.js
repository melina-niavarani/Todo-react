const todo_list_api = "https://jsonplaceholder.typicode.com/todos"

export function fetchToDoList(){
    return fetch(todo_list_api)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
            return data
         })
}