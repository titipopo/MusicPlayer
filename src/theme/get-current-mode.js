import { useColorScheme } from "react-native";
import { useState, useEffect } from "react";


const [test, setTest] = useState(null);
const scheme = useColorScheme();

const Test = () => {
    scheme === 'dark' ? setTest(true) : setTest(false);

    return test
}

export default Test;