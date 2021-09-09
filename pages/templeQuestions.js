import React, { useState } from 'react'
import { TempleQuestionComponent } from "../components/templeQuestion";
import { templeQuestionsDataSet } from "../data/templeQuestionsDataSet";

const templeQuestions = () => {
    const [qNum, setQNum] = useState(0);
    const handleChange = () => {
        setQNum(qNum + 1)
    }
    return (
        <>
            <TempleQuestionComponent question={templeQuestionsDataSet[qNum].question} notes={templeQuestionsDataSet[qNum].notes} />
            <button onClick={handleChange}>Next</button>
        </>
    )
}

export default templeQuestions;