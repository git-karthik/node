const readFile = require('fs').readFile;
const filePath = __dirname+'/nse_scrips.csv';
const scripMap = new Map();
readFile(filePath,'utf-8',(err,fileContent)=>{
    if(err){
        console.log(err);
        throw new Error(err);
    }
    var duplicates = [];
    var lines = fileContent.split('\r\n');
    lines.forEach((line)=>{
        var parts = line.split(',');
        // SYMBOL,NAME OF COMPANY, SERIES, DATE OF LISTING, PAID UP VALUE, MARKET LOT, ISIN NUMBER, FACE VALUE
        var symbol = parts[0], company_name = parts[1], series = parts[2], listing_date = parts[3],
        paid_up = parts[4], market_lot = parts[5], isin_num = parts[6], face_value = parts[7];
               
        if(!scripMap.has(symbol)){
            scripMap.set(symbol, parts);
        }
        else{
            duplicates.push(symbol);
        }
    });    
    console.log("Data loaded successfully from:"+filePath);
    console.log(scripMap.size+" Records synchronized out of "+lines.length)
    if(duplicates.length != 0){
        console.log(duplicates.length+" Duplicate Entries:"+duplicates);
    }

})

exports.lookup = (scripcode)=>{
    var res = '';
    if(scripcode != 'undefined'){
        res = scripMap.get(scripcode);
    }
    return res;
}


