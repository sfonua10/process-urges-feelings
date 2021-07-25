import React from "react"

export const ActionWord = ({ actionText, onModalClick }) => {
    return (
        <span onClick={() => onModalClick(actionText)}>
            <h1 className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{actionText === "Beware" ? "Beware of" : actionText === "Notice" ? "Notice &" : actionText}</h1>&nbsp;
        </span>
    )
}