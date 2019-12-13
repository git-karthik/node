import chai from "chai";
import chaiHttp from "chai-http";
import app from '../src/App';

chai.use(chaiHttp);

const expect = chai.expect;

describe('base function',()=>{

    it('should be json', ()=>{
        return chai.request(app).get('/')
                                .then((res)=>{
                                    expect(res.type).to.eql('application/json');
                                });
    });

    it('should have a msg prop', ()=>{
        return chai.request(app).get('/')
                                .then(res => {
                                    expect(res.body.message).to.eql('Hello World!!!');
                                });
    });
});