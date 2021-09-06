import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  //states
  const [name,set_name] = useState("");
  const [list,set_list] = useState(get_list());
  const [is_editing,set_is_editing] = useState(false);
  const [edit_id,set_edit_id] = useState(null);
  const [alert,set_alert] = useState({show:false,msg:"",type:""});
  //effects 
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  //fuctions
  function show_alert(show=false,msg="",type=""){
    set_alert({show,msg,type});
  }
  function get_list(){
    const list = localStorage.getItem("list");
    if(!list){
     return [];
    }
    return JSON.parse(list);
  }
  //handlers
  function edit_item(id){
    const specific_item = list.find(item => item.id === id);
    set_name(specific_item.title);
    set_is_editing(true);
    set_edit_id(id);
  }
  function remove_item(id){
    set_list(list.filter(item=> item.id !== id));
    show_alert(true,"item removed","danger");
  }
  function clear_items(){
    show_alert(true,"empty list","danger");
    set_list([]);
  }
  function handle_submit(event){
    event.preventDefault();
    if(!name){
      // handle empty input
      show_alert(true,"empty feild","danger");
    }
    else{
      if(is_editing){
        // handle editing
        set_list(list.map(item => {
          if(item.id === edit_id){
            return {...item,title:name};
          }
          else{
            return item;
          }
        }));
        show_alert(true,"item edited","success");
        set_name("");
        set_is_editing(false);
      }
      else{
        // handle adding 
        const new_item = {id: new Date().getTime().toString(),
        title:name};
        set_list([...list,new_item]);
        show_alert(true,"item added","success");
        set_name("");
      }
    }
  }

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handle_submit}>
      {alert.show && <Alert alert={alert} remove_alert={show_alert} />}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" value={name}
        placeholder="e.g. eggs" 
        onChange={event => set_name(event.currentTarget.value)} />
        <button type="submit" className="submit-btn">
          {is_editing ? "Edit" : "Add"}
        </button>
      </div>
    </form>
    {list.length === 0 ? null : 
      <div className="grocery-container">
        <List items={list} remove={remove_item} edit_item={edit_item}/>
        <button className="clear-btn" onClick={clear_items}>
          clear items
        </button>
      </div>}
  </section>
}

export default App
