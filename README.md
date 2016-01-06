#csgo-cache

A modern web approach to the CSGO market and analysis of the CSGO market using React.

To build code (mainly a note for myself): `watchify -t [ babelify --presets [ es2015 react ] ] ./public/app.js -o ./public/build/bundle.js`

or with gulp...
`gulp watchify` and it will output the latest bundle to `./public/build/bundle.js`
`gulp browserify` and `gulp browserify-production` are also options.
