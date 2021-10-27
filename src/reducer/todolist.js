import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value :[],
    user: '',
}


const todoslice = createSlice({
    name :'todos',
    initialState,
    reducers : {
        addItem:(state,action)=>{
            state.value.push(action.payload)
        },
        deleteItem:(state,action)=>{
            state.value=state.value.filter(ele=>ele.id!==action.payload);
        },
        updateTodos: (state, action) => {
          // debugger
            state.value = state.value.map((todo) => {
              console.log('edit id',action.payload.id)
              console.log('id is',todo.id)
              if (todo.id === action.payload.id){
                return{
                  ...todo,
                  task: action.payload.task,
                  // todo.task = action.payload.task
                }
              }
              return todo;
            });
            // return newstate
          },
          completetodos: (state,action) =>{
            return state.value.map((todo)=>{
              return todo
            })
          },
        userData: (state, action) => {
            state.user = action.payload;
        },
        filterSearch:(state,action)=>{
          console.log('=====>',action.payload);
          state.value = state.value.filter((ele)=>{
            if(ele.task.toLowerCase().includes(action.payload)){
              return ele.task
            }
          })
        },
    }
})



export const {addItem,deleteItem,userData,updateTodos,filterSearch}=todoslice.actions

export default todoslice.reducer