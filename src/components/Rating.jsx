import { TiStarFullOutline } from "react-icons/ti";

const Rating = ({ value }) => {

    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            {arr.map((x, i) => <TiStarFullOutline color={i < value ? 'yellow' : ''} />)}
        </div>
    )
}

export default Rating