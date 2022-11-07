## jaxin007 shared eslint config for back-end development

### Installation
```
> npm install @jaxin007/eslint-config-backend
```

### Resolving necessary plugins
* #### Add following text to the `devDependency` to your `package.json` file
```
    "@typescript-eslint/eslint-plugin": "^5.26.0",
    "@typescript-eslint/parser": "^5.26.0",
    "eslint": "^8.16.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.0.0",
```
* #### Run `npm install` command

### Eslint configuration
* #### Replace content of your entire eslintrc.json file with following text
```json
{
    "extends": ["@jaxin007/backend"]
}
```

### Prettier configuration
* #### For prettier configuration, check this [npm package](https://www.npmjs.com/package/@jaxin007/prettier-config-backend)

### Enjoy ❤️
