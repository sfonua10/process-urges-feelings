import { useState, useEffect } from "react"
import Link from "next/link";
import { Modal } from "../components/urges/modal";

const Urges = () => {
    //Be aware of body and thoughts!
    //Many people are so disconnected with the bodies that they don’t realize they’re feeling an urge until they’re looking at the pornography or until they’re way deep into the urge
    const [showModal, setShowModal] = useState(true);
    // useEffect(() => {

    // }, [])
    return (
        <div className="flex flex-col h-screen space-around justify-center text-center">
            {showModal && <Modal setShowModal={setShowModal} mainText="Important Note!" subText="Many people are so disconnected with the bodies that they don’t realize they’re feeling an urge until they’re looking at the pornography or until they’re way deep into the urge. " />}
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