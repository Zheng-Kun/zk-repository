# TypeScript编译选项

## 一、自动编译
```shell
# 自动监测文件变化并自动编译
tsc [filename] -w
```

## 二、 `tsconfig.json` 文件
> tsconfig.json 文件是ts编译器的配置文件

- 当项目中有`tsconfig.json`文件时，可以直接使用`tsc`命令编译所有ts文件（`tsconfig.json` 文件没有指定编译文件时）
- `tsconfig.json` 文件与我们平常接触的json文件不同，`tsconfig.json`文件中可以写注释

### 配置选项
 #### 1. `include`
  用来指定需要编译的ts文件目录
  - 注： `**` 表示任意目录 `*` 表示任意文件
  - `*` 匹配0或多个字符（不包括目录分隔符）
  - `?` 匹配一个任意字符（不包括目录分隔符）
  - `**/` 递归匹配任意子目录
 #### 2. `exclude`
  用来指定被排除(不需要被编译的)的文件目录
  - 注： 默认值`["node_modules", "bower_components", "jspm_packages"]`
 #### 3. `extends`
  指定要继承的配置文件，相对路径在解析是相对于它所在的文件
  循环引用会报错
 #### 4. `files`
  指定要编译的文件目录（比较少用）
 #### 4. `references`
   对象数组，指定要引用的工程
   每个`path` 的属性都可以指向包含 `tsconfig.json` 文件的目录，或者直接指向配置文件本身
   - 导入工程中的模块其实是夹在它输出的声明文件 `.d.ts`
 #### 5. `compilerOptions`
  指定编译器的选项
  - `target`
    用来指定ts要编译为的ES版本
  - `module`
    用来指定要使用的模块化规范
  - `lib`
    指定项目中要使用的库(宿主环境)
  - `outDir`
    指定编译后的文件目录
  - `outFile`
    将代码合并到一个文件，设置outFile之后会将全局作用域中的代码合并到一个文件
  - `allowJs`
    是否编译Js文件（默认`false`）
  - `checkJs`
    是否检查Js代码是否符合规范（默认`false`）
  - `removeComments`
    是否移除注释
  - `noEmit`
    不生成编译后的文件， 默认`false` 
  - `noEmitOnError`
    当有错误后不生成编译后的文件，默认`false`
  - `alwaysStrict`
    设置编译后的文件是否使用严格模式，默认`false`
  - `noImplicitAny`
    不允许使用隐式的`any`，默认`false`
  - `noImplicitThis`
    不允许不明确类型的`this`，默认`false`
  - `strictNullChecks`
    严格地检查null值
  - `strict`
    所有严格检查的总开关
  -  `@types`, `typeRoots`, `types`
     默认所有可见的 `@types` 包会在编译时包含进来（包含`node_moudles/@types` 文件夹及其子文件夹下的所有包）
     如果指定了 `typeRoots`，只有 `typeRoots` 下的包才会包含进来
     如果指定了 `types`，只有`types`指定的包被包含进来
     `"types": []` 表示禁用自动引入 `@types` 包
```json
{
  "include": ["src/**/*"],
  "exclude": ["src/some/**/*"],
  "extends": "config/base", // 表示配置文件会自动包含config/base.json 中的所有配置选项
  "files": [
    "a.ts",
    "b.ts"
  ],
  "complierOption": {
    "target": "es6",
    "module": "es6",
    "lib": ["dom"],
    "outDir":  "./dist",
    "outFile": "./dist/app.js",
    "allowJs": false,
    "checkJs": false,
    "removeComments": false,
    "noEmit": false,
    "noEmitOnError": true,
    "alwaysStrict": false,
    "types": ["node", "lodash", "express"], // 编译时只包含指定的三个包
    "typesRoot": ["./typings"], // 只有 ./typing 下的包会包含进来
  }
}
```



