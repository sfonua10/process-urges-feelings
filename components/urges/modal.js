export const Modal = ({ setShowModal, mainText, subText, modalList }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={() => setShowModal(false)}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                {mainText && <h3 className="text-lg leading-6 font-medium text-gray-900">{mainText}</h3>}
                                {subText && <div className="mt-2">
                                    <p className="text-sm text-gray-500">{subText}</p>
                                </div>
                                }
                                {modalList && <ul className="list-decimal text-left px-8"> {
                                    modalList.map(idea => <li>{idea}</li>)
                                }
                                </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}