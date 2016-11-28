var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    var spriteData = gulp.src('./src/assets/sprite-png/*.png')
    .pipe(spritesmith({
        imgName: 'icons.png',
        cssName: 'sprite.styl',
        imgPath: '/i/icons.png',
        cssFormat: 'styl',
        padding: 4,
        // algorithm: 'top-down',
        cssTemplate: './src/stylus/mixins/sprite.template.mustache'
    }));
    spriteData.img
        .pipe(gulp.dest('./build/i'));
    spriteData.css
        .pipe(gulp.dest('./src/stylus/mixins/'));
        // .pipe(notify("New sprite created!"));
});

gulp.task('sprite:watch', function() {
    gulp.watch('./src/assets/sprite-png/*.png', ['sprite']);
});

gulp.task('images', function(){
    gulp.src(['./src/assets/img/**/*.*'])
    .pipe(gulp.dest('./build/i'))
});

// gulp.task('sprites_general', function () {
//   var spriteData = gulp.src('./src/assets/sprites/general/*.png').pipe(spritesmith({
//     imgPath: '/i/sprites-general.png',
//     imgName: 'sprites-general.png',
//     cssName: '../../stylus/mixins/sprites_general.styl',
//     padding: 20
//   }));
//   return spriteData.pipe(gulp.dest('./src/assets/img/'));
// });

// gulp.task('sprites_index', function () {
//   var spriteData = gulp.src('./src/assets/sprites/index/*.png').pipe(spritesmith({
//     imgPath: '/i/sprites-index.png',
//     imgName: 'sprites-index.png',
//     cssName: '../../stylus/mixins/sprites_index.styl',
//     padding: 20
//   }));
//   return spriteData.pipe(gulp.dest('./src/assets/img/'));
// });