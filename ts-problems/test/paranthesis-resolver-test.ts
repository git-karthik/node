import { describe, it } from "mocha";
import assert from "assert";
import { paranthesisresolver } from "../src/paranthesis-resolver";

describe('Test Paranthesis', () =>{
    let resolver = new paranthesisresolver();
    it('Should return 2',()=>{        
        assert.equal(resolver.longestValidParanthesis(")()("), 2, "Assertion Failed");
    });

    it('Should return 0',()=>{        
        assert.equal(resolver.longestValidParanthesis(")("), 0);
    });
});