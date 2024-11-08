"use client"
import styles from "@/css/global.module.css"
import { useEffect, useState } from "react"
export default function ScrollTop() {

    const [buttonOn, setButtonOn] = useState(false);

    const buttonSwitch = () => {
        console.log(window.innerHeight)
        console.log(window.scrollY)
        if (window.scrollY > window.innerHeight) {
            setButtonOn(true)
        }
        else {
            setButtonOn(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', buttonSwitch);

        return () => {
            window.removeEventListener('scroll', buttonSwitch)
        }
    }, [])

    const buttonStyle = buttonOn ? styleOn : styleOff;

    return (
        <><div className={styles.scrollButton} style={buttonStyle} onClick={() => window.scrollTo(0, 0)}>
            <div style={{ borderColor: "white", position: "absolute", top: "40%", left: "50%", translate: "-50% -50%", rotate: "-45deg", height: "30px", width: "30px", borderWidth: "4px 4px 0 0", borderStyle: "solid" }}></div>
            <div style={{ position: "absolute", top: "65%", left: "50%", translate: "-50% -50%", fontSize: "24px", fontWeight: "bold", color: "white" }}><p>TOP</p></div>
        </div>
        </>
    )
}

const styleOn = {
    height: "100px",
    width: "100px",
    backgroundColor: "#76D9FF",
    position: "fixed",
    bottom: "40px",
    right: "10px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.3s"
}

const styleOff = {
    height: "100px",
    width: "100px",
    opacity: "0",
    pointerEvents: "none",
    position: "fixed",
    bottom: "40px",
    right: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s"
}