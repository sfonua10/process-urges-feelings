import { useState } from "react"
import Link from "next/link";
import { Modal } from "../components/urges/modal";
import { urgesModalData } from "../data/urgesModalData";
import { getRandomInt } from "../utils/getRandomInt";

const Urges = () => {
    const [showModal, setShowModal] = useState(true);

    const randomInt = getRandomInt(urgesModalData.length);
    const { mainText, subText, modalList, id } = urgesModalData[randomInt];
    return (
        <div className="flex flex-col h-screen space-around justify-center text-center">
            {showModal && <Modal setShowModal={setShowModal} mainText={mainText} subText={subText} modalList={modalList} />}
            <Link href="/urges/stop">
                <a>
                    <h1 className="text-6xl font-bold">STOP</h1>
                </a>
            </Link>
            <Link href="/urges/drop">
                <a>
                    <h1 className="text-6xl font-bold my-16">DROP</h1>
                </a>
            </Link>
            <Link href="/urges/breathe">
                <a>
                    <h1 className="text-6xl font-bold">BREATHE</h1>
                </a>
            </Link>
        </div>
    )
}

export default Urges;