import { paranthesisresolver } from "./src/paranthesis-resolver";
import prompts from "prompts";
const initializer = async() =>{
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Enter Input text to parse!!!',
    });
    const resolver = new paranthesisresolver();
    const res = resolver.longestValidParanthesis(response.value);
    console.log(res);
}

initializer();


