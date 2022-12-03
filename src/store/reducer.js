const INITIAL_STATE = {
  todos: [],
  key: "",
  categories:[],
  category:""
};
var pk = 1;
function reducer(state = INITIAL_STATE, action) { 
  let todos = state.todos;
  switch (action.type) {
    case "ADD_TODO":
       todos = [ ...todos, {...action.todo, id:pk}]; 
        pk++;
      return {...state, todos}; 
    case "UPDATE_TODO":
      let index = todos.findIndex(t=>t.id===action.todoId);
      if(index>-1){   
        todos.splice(index, 1,  action.newValue)
      } 
      return {...state, todos}; 
    case "REMOVE_TODO":
      todos = todos.filter(t=> t.id !== action.todoId); 
      return {...state, todos};  
    case "COMPLETE_TODO":
      let idx = todos.findIndex(t=>t.id===action.todoId);
      if(idx>-1){   
        todos.splice(idx, 1, {...todos[idx], isComplete:!todos[idx]["isComplete"]})
      } 
      return {...state, todos};  
    case "SET_KEY":
      return {...state,key:action.key}

    case "ADD_TO_CATEGORY":
      let tId = todos.findIndex(t=>t.id == action.todo.id);
      if(tId>-1){
        let t = action.todo;
        t["category"] = action.category;
        todos.splice(tId, 1, t);
      }
      return {...state, todos:[...todos], category:action.category}

    case "REMOVE_FROM_CATEGORY":
      let tmId = todos.findIndex(t=>t.id == action.todo.id);
      if(tmId>-1){
        let t = action.todo;
        t["category"] = "";
        todos.splice(tmId, 1, t);
      }
      return {...state, todos:[...todos]}

    case "ADD_CATEGORY":

      if(!action.category || state.categories.find(c=> c === action.category)) return state;
      return {...state, categories:[...state.categories, action.category]}
    case "SET_CATEGORY": 
      if(!action.category || state.categories.find(c=> c === action.category))  
        return {...state, category:action.category}
      else
        return {...state, category:action.category, categories:[...state.categories, action.category]}
    default: 
      return state;
  }
}

export default reducer;