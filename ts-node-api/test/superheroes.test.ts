import chai from "chai";
import chaiHttp from 'chai-http';
import App from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe('GET api/v1/heroes',()=>{

    it('responds JSON Array',()=>{
        return chai.request(App).get('/api/v1/heroes')
                                .then(res => {
                                    expect(res.status).to.eql(200);
                                    expect(res).to.be.json;
                                    expect(res.body).to.be.an('array');
                                    expect(res.body).to.have.length(5, "Equals 5");  
                                    res.should.be.an('object');                                     
                                });                                
    });

    it('should include Wolverine', ()=>{
        return chai.request(App).get('/api/v1/heroes')
                                .then(res => {
                                    let Wolverine = res.body.find((hero: any) => hero.name === 'Wolverine');
                                    expect(Wolverine).to.exist;
                                    expect(Wolverine).to.have.all.keys([
                                        'id',
                                        'name',
                                        'aliases',
                                        'occupation',
                                        'gender',
                                        'height',
                                        'eyes',
                                        'hair',
                                        'powers'
                                    ]);                                    
                                });
    });
});

describe('GET /api/v1/heroes/:id', ()=>{
    it('response with a single JSON Object', ()=>{
        return chai.request(App).get('/api/v1/heroes/1')
                                .then(res =>{
                                    expect(res.status).to.equal(200);
                                    expect(res).to.be.json;
                                    expect(res.body).to.be.an('object');
                                });
    });

    it('should return Luke Cage', ()=>{
        return chai.request(App).get('/api/v1/heroes/1')
                                .then(res => {
                                    expect(res.body.hero.name).to.equal('Luke Cage');
                                    expect(res.body.hero.aliases).contains('Power Man');
                                });
    });
});