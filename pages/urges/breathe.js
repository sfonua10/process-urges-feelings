import Urges from "../../components/urges/urges";

const Breathe = () => {
    const exercises = [
        "Describe to Martian",
        "Watch from across the room, take myself out of body and pretend like I'm watching myself",
        "Hold in hand with peace and childlike curiosity",
        "Open up to it - Allow it. Move towards it. Get interested and approach it with a mindset of fascination and curiosity. What is this urge that is so strong?"
    ]
    return (
        <>
            <Urges
                heading="Breathe"
                text1="Relax shoulders, take deep breathe, breathe into warmth of head, breathe into tightness of chest and fast heartbeat."
                text2="I'm not trying to make it go away. I'm not trying to make urges go away. I want to experience it, in its fulness"
                modalList={exercises}
            />
            <button onClick={() => setShowModal(true)}>Other Ideas</button>
        </>
    )
}

export default Breathe;