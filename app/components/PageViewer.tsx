"use client";
import { useEffect, useState } from "react";

export default function PageViewer({ initialAng = 1 }: { initialAng?: number }) {
    const [ang, setAng] = useState(initialAng);
    const [text, setText] = useState("Loading...");
    const [fontSize, setFontSize] = useState(48);
    const [fullscreen, setFullscreen] = useState(false);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const handleContext = (e: MouseEvent) => e.preventDefault();
        const handleCopy = (e: ClipboardEvent) => e.preventDefault();

        document.addEventListener("contextmenu", handleContext);
        document.addEventListener("copy", handleCopy);

        return () => {
            document.removeEventListener("contextmenu", handleContext);
            document.removeEventListener("copy", handleCopy);
        };
    }, []);

    useEffect(() => {
        setFade(false); 

        setTimeout(() => {
            fetch(`/api/ang/${ang}`)
                .then((res) => res.text())
                .then((data) => {
                    setText(data);
                    setFade(true);
                })
                .catch(() => setText("Error loading ang"));
        }, 100);
    }, [ang]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setAng((prev) => prev + 1);
            if (e.key === "ArrowLeft") setAng((prev) => Math.max(1, prev - 1));
            if (e.key === "+") setFontSize((s) => s + 3);
            if (e.key === "-") setFontSize((s) => Math.max(20, s - 3));
            if (e.key === "f") toggleFullscreen();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
            document.body.style.overflow = "hidden";
        } else {
            document.exitFullscreen();
            setFullscreen(false);
            document.body.style.overflow = "auto";
        }
    }

    return (
        <div
            style={{
                height: "100vh",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
                overflow: "hidden",
            }}
        >

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    whiteSpace: "pre-wrap",
                    fontSize: fontSize,
                    lineHeight: 1.6,
                    padding: "20px",
                    overflow: "hidden",
                }}
                className={fade ? "fade-in" : "fade-out"}
            >
                {text}
            </div>

            {!fullscreen && (
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                        paddingBottom: "10px",
                    }}
                >
                    <button onClick={() => setAng((a) => Math.max(1, a - 1))}>
                        Prev
                    </button>
                    <button onClick={() => setAng((a) => a + 1)}>Next</button>
                    <button onClick={() => setFontSize((s) => Math.max(20, s - 3))}>
                        A-
                    </button>
                    <button onClick={() => setFontSize((s) => s + 3)}>A+</button>
                    <button onClick={toggleFullscreen}>Fullscreen</button>
                </div>
            )}

            {!fullscreen && (
                <div style={{ textAlign: "center", fontSize: 12 }}>
                    Use Arrow keys or presenter device
                </div>
            )}
        </div>
    );
}
