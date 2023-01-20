import { useState } from "react"

export const useSendEmail = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [textarea, setTextarea] = useState("")
    const [loading, setLoading] = useState(false)
    const [modalActiv, setModalActiv] = useState(false)
    const [textModal, setTextModal] = useState("")

    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("textarea", textarea)

        try {
            await fetch("http://test1", {
                method: "POST",
                body: formData,
            })

            setLoading(false)
            setTextModal("Сообщение отправленно")
            setModalActiv(true)

            setTimeout(() => {
                setModalActiv(false)
                setTextModal("")
            }, 1000)
        } catch (er) {
            setLoading(false)
            setTextModal("Сообщение не отправленно")
            setModalActiv(true)

            setTimeout(() => {
                setModalActiv(false)
                setTextModal("")
            }, 1000)
        }

        e.target.reset()
    }

    return [
        sendEmail,
        setName,
        setEmail,
        setTextarea,
        loading,
        modalActiv,
        setModalActiv,
        textModal,
    ]
}
