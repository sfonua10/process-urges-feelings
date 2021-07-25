export const handleModal = (word, setText, setShowModal) => {
    const targetWord = typeof word !== "string" ? word.target.innerText : word

    switch (targetWord) {
        case 'Stop':
            setText({
                mainText: "STOP",
                subText: "verb: stop moving or operating; \nnoun: a cessation of movement or operation"
            });
            break;
        case 'Urges':
            setText({
                mainText: "What is an urge?",
                subText: "An urge is an emotion that is intensely driving you to do something. Other words for urges are cravings, wantings, and desire. The urge to view pornography is the emotion driving you to view porn so that your brain can be rewarded with dopamine, creating a temporary pleasure."
            })
            break;
        case 'Notice':
            setText({
                mainText: "Notice",
                subText: "the fact of observing or paying attention to something"
            })
            break;
        case 'Beware':
            setText({
                mainText: "Beware",
                subText: "Be cautious and alert to the dangers of"
            })
            break;
        case 'fantasize':
            setText({
                mainText: "Fantasize",
                subText: "indulge in daydreaming about something desires"
            })
            break;
    }
    setShowModal(true);
}