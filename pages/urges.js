import { useState } from "react"
import { Switch } from '@headlessui/react'
import Link from "next/link";
import { Modal } from "../components/urges/modal";
import { urgesModalData, urgesQA } from "../data/urgesModalData";
import { getRandomInt } from "../utils/getRandomInt";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Urges = () => {
    const [showModal, setShowModal] = useState(true);
    const [enabled, setEnabled] = useState(false);

    const randomInt = getRandomInt(urgesModalData.length);
    const { mainText, subText, modalList } = urgesModalData[randomInt];

    const randomInt2 = getRandomInt(urgesQA.length);
    const { question, answer } = urgesQA[randomInt2];

    return (
        <div className="flex flex-col h-screen space-around justify-center text-center">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                    enabled ? 'bg-indigo-600' : 'bg-gray-200',
                    'absolute inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 right-1 top-1'
                )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
            {enabled && <Modal setEnabled={setEnabled} mainText={question} subText={""} modalList={answer} />}
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