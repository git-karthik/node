import prompts from "prompts";
import {_modules, _constants} from "./module-paths";
const paths = _modules.paths;

const initializer = async() =>{
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: _constants.choose_module_msg,
    });
    const resval: string = response.value;

    switch (resval) {
        case '1':
            const paranInput = await prompts({
                type: 'text',
                name: 'value',
                message: _constants.input_paran_msg,
            });
            const {paranthesisresolver} = require(paths[resval]);            
            const resolver = new paranthesisresolver()
            const res = resolver.longestValidParanthesis(paranInput.value);
            console.log(res);            
            break;    
        default:
            const inp = await prompts({
                type: 'text',
                name: 'value',
                message: 'Default: Input your string to validate:',
            });
            import(paths["1"])
            .then((_value) =>{
                const paranthesisresolver = _value.paranthesisresolver;
                const res = new paranthesisresolver().longestValidParanthesis(inp.value);
                console.log(res); 
            })
            .catch((err) => {
                console.error('Failed to Initialize', err);
            })
            
            break;
    }
    
}

initializer();


