const gulp = require('gulp');
const prettier = require('gulp-prettier-plugin');
const tslint = require('gulp-tslint');
const { Linter } = require('tslint');
const isCI = process.env.CI;

gulp.task('prettier', () =>
  gulp
    .src([
      './src/webpack.config.js',
      './gulpfile.js',
      'src/**/*.ts',
      'src/css/*.css',
    ])
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

gulp.task('tslint', () => {
  const program = Linter.createProgram(require.resolve('./tsconfig.json'));
  return gulp
    .src('src/**/*.ts')
    .pipe(
      tslint({
        configuration: require.resolve('./tslint.json'),
        formatter: 'stylish',
        program,
      })
    )
    .pipe(tslint.report({ summarizeFailureOutput: true }));
});
