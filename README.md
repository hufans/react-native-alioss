# rn-alioss

AliYun oss for react native，支持 Android + iOS，感谢[aliyun-oss-react-native](https://github.com/aliyun/aliyun-oss-react-native)提供的基础。 首先向各位声明，本库是在 aliyun-oss-react-native 基础上进行重写,但因常年未曾维护，旧版SDK 等问题，最终决定开一个新仓库，提供给新项目使用。

## Installation

```sh
npm install rn-alioss

or

yarn add rn-alioss
```
## React Native >  0.60

### iOS
```sh
  cd ios
  pod install
```

### Android 

do nothing 

## Usage

```js
import { Alioss } from "rn-alioss";

// ...

Alioss.enableDevMode();

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
