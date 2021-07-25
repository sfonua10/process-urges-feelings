import { ThoughtLayout } from '../components/thoughtLayout';
import { thoughtBoardData } from '../data/thoughtBoard';

const ThoughtBoard = () => {
    return (
        <ThoughtLayout data={thoughtBoardData} />
    )
}

export default ThoughtBoard;