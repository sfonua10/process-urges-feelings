import { useState } from "react"
import { Modal } from "../../components/urges/modal";
import { ActionWord } from "../../components/urges/actionWord";
import { handleModal } from "../../utils/modalText";
import { BackButton } from "../urges/back";

const Urges = ({ stepNum, stepAction, subText, data, text1, text2, heading, list, sectionContent }) => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState({
        mainText: '',
        subText: ''
    })

    return (
        <main className="flex flex-col h-screen text-center space-between justify-evenly mx-10">
            {showModal && <Modal mainText={text.mainText} subText={text.subText} setShowModal={setShowModal} modalList={modalList} />}
            <section>
                <ActionWord onModalClick={() => handleModal(heading, setText, setShowModal)} actionText={heading} />
            </section>

            <section className="mt-4 max-w-2xl text-base text-gray-500 lg:mx-auto">
                <p>
                    {text1}
                </p>
                <br />
                <p>
                    {text2}
                </p>
                {list && list.map(item => <li>{item}</li>)}
            </section>
            {sectionContent &&
                <section className="mt-4 max-w-2xl text-base text-gray-500 lg:mx-auto">
                    <h1>{sectionContent}</h1>
                </section>
            }
            <BackButton />
        </main>
    )
}

export default Urges;