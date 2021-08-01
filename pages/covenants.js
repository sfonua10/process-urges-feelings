import React, { useState } from 'react'
import Link from 'next/link'
import { Modal } from '../components/urges/modal';


export default function covenants() {
    const [showModal, setShowModal] = useState(true);
    return (
        <div className="flex flex-col justify-center min-h-screen py-2">
                  {showModal && <Modal setShowModal={setShowModal} mainText="Covenants" subText="" />}

        <Link href="/urges">
                <a
                    className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                    <h3 className="text-2xl font-bold text-center">Baptism</h3>
                </a>
            </Link>
            <Link href="/feelings">
                <a
                    className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                    <h3 className="text-2xl font-bold text-center">Priesthood Oath and Covenant</h3>
                </a>
            </Link>
            <Link href="/urges">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Temple Covenants</h3>
            </a>
          </Link>
        </div>
    )
}
