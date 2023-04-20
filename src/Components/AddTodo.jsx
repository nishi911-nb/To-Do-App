import '../App.css';
import {AiOutlinePlus} from 'react-icons/ai';


const AddTodo = ({handleSubmit, theme}) => {
    return ( 
        <div className="Add">
            <form onSubmit={handleSubmit}>
                <input type="text" name="add" placeholder="Example: Paying the bills" 
                style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                <button className='button' style={{backgroundColor: theme.backgroundColor, color: theme.color}}><AiOutlinePlus size={32}  /></button>
            </form>
        </div>
     );
}
 
export default AddTodo;