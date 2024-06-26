export default function todosReducer(todos, action) {
    switch (action.type) {
        case "add":
            const { text } = action;
            return [...todos, { id: todos.length + 1, text, completed: false }];
        case "update":
            const { item } = action;
            return todos.map((todo) => (todo.id === item.id ? item : todo));
        case "remove":
            const { id } = action;
            return todos.filter((todo) => todo.id !== id);
        case "filter":
            const { filter } = action;
            return todos.filter((todo) => {
                if (filter === "all") return true;
                if (filter === "completed") return todo.completed;
                if (filter === "incomplete") return !todo.completed;
                return true;
            });
        default:
            throw new Error("Hubo un error en" + action.type);
    }
}
