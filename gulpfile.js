const gulp = require('gulp');
const prettier = require('gulp-prettier-plugin');
const isCI = process.env.CI;

gulp.task('prettier', () =>
  gulp
    .src(['./src/webpack.config.js', './gulpfile.js', 'src/**/*.ts'])
    .pipe(
      prettier(
        {
          trailingComma: 'es5',
          singleQuote: true,
        },
        {
          filter: !isCI,
          validate: isCI,
        }
      )
    )
    .pipe(gulp.dest(file => file.base))
);
