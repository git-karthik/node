var gulp = require('gulp');
var del = require('del');
var unzip = require('gulp-unzip');
var fs = require('fs');

gulp.task('clean', (done)=>{
    let folder = ['01DIR','02DIR'];
    var processed = [];
    folder.forEach((f)=>{
        del(`../test02/${f}`,{force: true});          
    });
    done();
    // return del(['../test02/01DIR','../test02/02DIR'], {force: true});
});

gulp.task('unzip', (done)=>{
    if(!fs.existsSync('../test01/Source/modules-cleanup-1905.8.12.zip')){
        console.log('No such file exists!');
        throw Error("File not existing");
    } else{
        let folderPath = '../test01/Dest';
        fs.readdir(folderPath, (err, files)=>{
            if(err){
                throw Error(err.message);
            }
            files.forEach((file)=>{
                if(fs.statSync(folderPath`${file}`).isDirectory()){
                    console.log(`DIR:${file}`);
                } else{
                    console.log(`FILE:${file}`);
                }
            });            
            console.log(files);
        });
    }
    gulp.src('../test01/Source/modules-cleanup-1905.8.12.zip', {allowEmpty:false})
        .pipe(unzip())
        .pipe(gulp.dest('../test01/Dest'));
    done();
});

gulp.task('move', ()=>{
    return gulp.src('../test01/**/*').pipe(gulp.dest('../test02'));
});

gulp.task('setup', gulp.series('clean', 'move'));