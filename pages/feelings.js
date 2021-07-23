import { useState } from 'react'
import { emotions } from '../data/emotions'
import Step from '../components/feelings/steps'

const Feelings = () => {
    const [step, setSteps] = useState(1);

    const handleNextStep = () => {
        setSteps(step + 1)
    }
    return (
        <main className="flex flex-col h-screen justify-around">
            {step === 1 && <Step stepNum="Step 1" stepAction="Name it" data={emotions} />}
            {step === 2 && <Step stepNum="Step 2" stepAction="Find it in body" subText="Example - I feel anxiety in my chest and a little in my gut" />}
            {step === 3 && <Step stepNum="Step 3" stepAction="Relax into it" subText="Yoga, meditation breathing techniques" />}
            {step === 4 && <Step stepNum="Step 4" stepAction="What does it FEEL like?" subText="Example - It feels tight, heavy and spotty" />}
            {step === 5 && <Step stepNum="Step 5" stepAction="What does it LOOK like?" subText="Picture it! Color? Slime? Cloud? Rock? Example - Heavy tightness in chest, looks red, looks kinda cloudy" />}
            {step === 6 && <Step stepNum="Step 6" stepAction="Feeling comes from brain" subText="Continually remind myself. No need to force a new thought to generate a new emotion. Acknowledge that the feeling I'm having right now is from sentences in my brain" />}
            {step === 7 && <Step stepNum="Step 7" stepAction="Allow til subsides" subText="No resisting, no hiding" />}

            {step !== 7 &&
                <div className="-bottom-0">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r m-auto block mt-" onClick={handleNextStep}>Next</button>
                </div>
            }
        </main>
    )
}

export default Feelings;