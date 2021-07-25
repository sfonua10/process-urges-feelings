import { useState } from "react"
import { Modal } from "../../components/urges/modal";
import { ActionWord } from "../../components/urges/actionWord";
import { handleModal } from "../../utils/modalText";
import { BackButton } from "../../components/urges/back";

const Stop = () => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState({
        mainText: '',
        subText: ''
    })

    return (
        <main className="flex flex-col h-screen text-center space-between justify-center mx-10">
            {showModal && <Modal mainText={text.mainText} subText={text.subText} setShowModal={setShowModal} />}
            <section>
                <ActionWord onModalClick={() => handleModal("Stop", setText, setShowModal)} actionText="Stop" />
                <ActionWord onModalClick={() => handleModal("Notice", setText, setShowModal)} actionText="Notice" />
                <ActionWord onModalClick={() => handleModal("Beware", setText, setShowModal)} actionText="Beware" />
                <ActionWord onModalClick={() => handleModal("Urges", setText, setShowModal)} actionText="Urges" />
            </section>

            <section className="mt-4 max-w-2xl text-base text-gray-500 lg:mx-auto">
                <p>
                    Start to become of aware of our body and thoughts
                </p>
                <br />
                <p>
                    This includes stopping and noticing if I’m feeling urges to <span onClick={() => handleModal("fantasize", setText, setShowModal)}>fantasize</span> or little urges to scroll on social media kinda hoping I’ll find something suggestive. Stop and notice these urges I’m having.
                </p>
            </section>
            <BackButton />
        </main>
    )
}

export default Stop;