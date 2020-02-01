import CodeArea from "./CodeArea"
import code from "./codeExamples/defaultExample"
import * as React from "react"
import generic from "../data/generic"
import copyClipBoard from "./utils/copyClipBoard"
import styles from "./GetStarted.module.css"
import codeAreaStyles from "./CodeArea.module.css"

export default function GetStarted({
  quickStartRef,
  currentLanguage,
  getStarted,
}: {
  quickStartRef: any
  currentLanguage: string
  getStarted: any
}) {
  return (
    <>
      <h2 ref={quickStartRef}>{getStarted.install.linkTitle}</h2>
      <p>{getStarted.install.description}</p>

      <span className={styles.installCode}>
        npm install react-hook-form
        <button
          className={styles.copyButton}
          onClick={() => {
            copyClipBoard("npm install react-hook-form")
            alert(generic.copied[currentLanguage])
          }}
        >
          <span className={codeAreaStyles.copyIcon}>
            <span />
          </span>{" "}
          {generic.copy[currentLanguage]}
        </button>
      </span>

      <h2
        style={{
          marginTop: 50,
        }}
      >
        {getStarted.example.title}
      </h2>
      <p>{getStarted.example.description}</p>
      <CodeArea rawData={code} url="https://codesandbox.io/s/kw7z2q2n15" />
    </>
  )
}
