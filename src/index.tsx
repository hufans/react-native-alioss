import { NativeModules } from 'react-native';

type AliossType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Alioss } = NativeModules;

export default Alioss as AliossType;
