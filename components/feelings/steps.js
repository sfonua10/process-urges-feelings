const Step = ({ stepNum, stepAction, subText, data }) => {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-center mt-12">
                {stepNum}
            </h1>
            <section className="mt-16">
                <h5 className="text-5xl text-center font-bold p-4">{stepAction}</h5>
                {subText && <p className="text-center">{subText}</p>}
                {data && <select className="text-lg m-auto block">
                    {data.map(emotion => <option key={emotion} value={emotion}>{emotion}</option>)}
                </select>}
            </section>
        </div>
    )
}

export default Step;