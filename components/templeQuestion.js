export const TempleQuestionComponent = ({ question, notes }) => {
    return (
        <div className="mt-12 lg:mt-0 lg:col-span-2 mx-10">
            <dl className="space-y-12">

                <div key={0}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">{question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{notes}</dd>
                </div>

            </dl>
        </div>
    )
}