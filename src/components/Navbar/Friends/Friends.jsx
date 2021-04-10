import Friend from '../Friend/Friend';
import s from './Friends.module.css';


const Friends = (props) => {

    let friends = props.friends.map( el => <Friend name={el.name} />)

    return (
            <div className={s.item}>
                <h5>Friends</h5>
                {friends}
            </div>
    )
}


export default Friends;