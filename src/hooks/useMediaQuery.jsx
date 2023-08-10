import { useEffect, useState } from "react"


const useMediaQuery = (query) =>{

    const [matches, setMatches] = useState(false)

    useEffect(()=>{
        const result = window.matchMedia(query)

        if(result.matches !== matches)
            setMatches(result.matches)
        const listner = () => {setMatches(result.matches)}
        console.log(matches)
        window.addEventListener('resize',listner);
        return ()=> window.removeEventListener('resize',listner);

    },[query,matches])
    return matches
}

export default useMediaQuery