import Urges from "../../components/urges/urges";
import { BackButton } from "../../components/urges/back";

const Drop = () => {
    const sensations = [
        "Where? (Chest, shoulders, nect, gut, etc)",
        "Fast or slow",
        "hard or soft",
        "color?",
        "worksheet"
    ]
    return (
        <div>
            <Urges
                heading="Drop"
                list={sensations}
                text1="Go into body and focus on sensations in body. What does it feel like in my body?"
                sectionContent="Thoughts of body vs Sensations of body"
            />
        </div>
    )
}

export default Drop