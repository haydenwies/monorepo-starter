import { Button } from "@repo/ui/components/button"
import { useState } from "react"

const App = () => {
    const [serverMessage, setServerMessage] = useState<string | null>(null)

    const handleTalkToServer = async () => {
        const res = await fetch("http://localhost:5005")
        if (res.ok) {
            const data = await res.text()
            setServerMessage(data)
        }
    }

    return (
        <div className="container h-dvh mx-auto flex flex-col items-center justify-center gap-2 bg-blue-500">
            <Button onClick={handleTalkToServer}>Talk to server</Button>
            {serverMessage && (
                <p>
                    Message from server: <span className="font-bold">{serverMessage}</span>
                </p>
            )}
        </div>
    )
}

export default App
