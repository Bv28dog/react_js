import { useState } from "react"

export const ShowButton = () => {
    const [isTextVisible, setIsTextVisible] = useState(false)
    const textButton = isTextVisible ? 'Hide Text': 'Show Text'
    
    const handleButtonClick = () => {
       setIsTextVisible(!isTextVisible);
}
return(
    <div>
    <button onClick={handleButtonClick}>{textButton}</button>
    {isTextVisible && <p>This is the text to show/hide.</p>}
  </div>
)
}