# static-site-boilerplate

Boilerplate for simple web development, *HTML*, *CSS*, *JavaScript*

- **JavaScript** : webpack + TypeScript
- **CSS** : scss + PostCss Autoplefixer (build by webpack)
- **HTML** : EJS
- **Local Server** : webpack-dev-server
- **Linter/Formatter**: tslint/prettier


## Setup
```bash
git clone https://github.com/sk-rt/static-site-boilerplate-ts.git
cd static-site-boilerplate-ts
yarn install  #or npm install
```

## Development
```bash
yarn start
```
and open `http://localhost:8080/`

## Production Build
```bash
yarn dist
```