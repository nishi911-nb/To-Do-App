import {AiFillDelete} from 'react-icons/ai'

const DisplayTodo = ({lists, handleDelete, theme}) => {
    if(lists.length === 0) return <p>There are no tasks left !! </p>
    return ( 
        <div className="Todo">
            <ul>
                {lists.map(list => {
                    return(
                        <li style={{backgroundColor: theme.backgroundColor, color: theme.color}} key={list.id}>{list.task} 
                        <AiFillDelete className='delete' size={21} style={{color: theme.color}} onClick={() => handleDelete(list.id)}/>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default DisplayTodo;