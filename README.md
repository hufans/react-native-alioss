# rn-alioss

AliYun oss for react native，支持 Android + iOS，感谢[aliyun-oss-react-native](https://github.com/aliyun/aliyun-oss-react-native)提供的基础。 首先向各位声明，本库是在 aliyun-oss-react-native 基础上进行重写,但因常年未曾维护，旧版SDK 等问题，最终决定开一个新仓库，提供给新项目使用。

## Environment

- React Native >  0.60
- Node 8.0 or above
- iOS 10.0 or above
- Android 4.4 or above

## Table of Contents
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [FAQ](#FAQ)
- [JOIN](#join)
- [License](#license)
- [CONTACT](#contact)
- [Future](#Future)
- [Documentation](#Documentaion)

## Installation


```sh
npm install rn-alioss

or

yarn add rn-alioss
```

### iOS
```sh
  cd ios
  pod install
```

### Android 
do nothing (The Gradle will automatically import rn-alioss )

## API

This section describes the APIs that are currently implemented and partially supported by the React Native SDK. These APIs mainly cover log management, bucket management, object management, authorization, file upload, and download. Follow-up to improve the relevant API and BUG repair. API list is as follows


API | Android | iOS
----| ---- | ---- |
enableDevMode|Y|Y|
initWithPlainTextAccessKey  |Y|Y
initWithSecurityToken   |Y|Y
initWithServerSTS   |Y|Y
asyncUpload   |Y| Y
initMultipartUpload |Y|Y
multipartUpload  | Y | Y
listParts |Y|Y
abortMultipartUpload |Y|Y
asyncDownload  |Y|Y
asyncCreateBucket  |Y|Y
asyncGetBucketACL  |Y|Y
asyncListBuckets  |Y|Y
asyncDeleteBucket  |Y|Y
asyncHeadObject  |Y|Y
asyncListObjects |Y|Y
doesObjectExist |Y|Y
doesObjectExist |Y|Y
asyncDeleteObject  |Y|Y
## Usage

```typescript 
import { AliyunOSS } from "rn-alioss";
```

---

### Main type 


#### OSSinit
```typescript
declare type OSSinit = {
    maxRetryCount: number;
    timeoutIntervalForRequest: number;
    timeoutIntervalForResource: number;
};
```

#### OssListOptions
```typescript 

declare type OssListOptions = {
    prefix: string;
    marker?: string;
    maxKeys?: string;
    delimiter?: string;
};

```
#### AppendType
```typescript 
declare type AppendType = {
    appendPosition: number;
    contentType: string;
    contentMd5: string;
    contentEncoding: string;
    contentDisposition: string;
};
```
### enableDevMode

```typescript 
  AliyunOSS.enableDevMode();
```

---
### initWithPlainTextAccessKey

init auth client with accessKeyId and accessKeySecret,please refer to the code.you can use ,but we do not suggest use it。

```typescript 


const endPoint = "https://xxx"
const configuration = {
    maxRetryCount: 3,
    timeoutIntervalForRequest: 30,
    timeoutIntervalForResource: 24 * 60 * 60
 };
AliyunOSS. initWithPlainTextAccessKey(accessKey: string, secretKey: string, endPoint: string, configuration?: OSSinit): void;
```
[OSSinit](#OSSinit)
---

### initWithSecurityToken

init client with SecurityToken
```typescript
AliyunOSS.initWithSecurityToken(securityToken: string, accessKey: string, secretKey: string, endPoint: string, configuration?: OSSinit): void;
```
[OSSinit](#OSSinit)
---

### asyncUpload

```typescript
AliyunOSS.asyncUpload(bucketName: string, objectKey: string, filepath: string, options?: {}): Promise<any>;
```
---
### asyncAppendObject

```typescript
AliyunOSS.asyncAppendObject(bucketName: string, objectKey: string, filepath: string, options?: AppendType): Promise<any>;
```
[AppendType](#AppendType)
---
### asyncResumableUpload
```typescript
AliyunOSS.asyncResumableUpload(bucketName: string, objectKey: string, filepath?: string, options?: {}): Promise<any>;
```
---
### initMultipartUpload

```typescript
 AliyunOSS.initMultipartUpload(bucketName: string, objectKey: string): Promise<any>;
```
---
### multipartUpload

```typescript
//uploadId is  the value When call initMultipartUpload ,success callback return
AliyunOSS.abortMultipartUpload(bucketName: string, objectKey: string, uploadId: string): Promise<any>;
```
---
### listParts

```typescript
AliyunOSS.listParts(bucketName: string, objectKey: string, uploadId: string): Promise<any>;
```
---
### abortMultipartUpload

```typescript
 AliyunOSS.abortMultipartUpload(bucketName: string, objectKey: string, uploadId: string): Promise<any>;
```

---

### asyncDownload

```typescript
 AliyunOSS. asyncDownload(bucketName: string, objectKey: string, filepath?: string, options?: {
        'x-oss-process': string;
    }): Promise<any>;
```
---
### asyncCreateBucket

```typescript
 AliyunOSS. asyncCreateBucket(bucketName: string, acl: string | undefined, region: string):
```
---

### asyncGetBucketACL

```typescript
 AliyunOSS.asyncGetBucketACL(bucketName: string): Promise<any>;
```
---
### asyncListBuckets

```typescript
AliyunOSS.asyncListBuckets(): Promise<any>;
```
---
### asyncDeleteBucket

```typescript
 AliyunOSS.asyncDeleteBucket(bucketName: string): Promise<any>;
```
---
### asyncHeadObject

```typescript
 AliyunOSS.asyncHeadObject(bucketName: string, objectKey: string): Promise<any>;
```
---
### asyncListObjects

list objects in some conditions

parameters:

- name {String} bucket name
- options {Object}
  - [delimiter] {String} 
  - [prefix] {String} search buckets using `prefix` key
  - [marker] {String} search start from `marker`, including `marker` key
  - [maxKeys] {String|Number} max buckets, default is `100`, limit to `1000` 
```typescript
 AliyunOSS.asyncListObjects(bucketName: string, options?: OssListOptions | undefined): Promise<any>;
```
 [OssListOptions](#OssListOptions)
---
### doesObjectExist

```typescript
 AliyunOSS.doesObjectExist(bucketName: string, objectKey: string): Promise<any>;
```
---

### asyncCopyObject

```typescript
 AliyunOSS.asyncCopyObject(srcBucketName: string, srcObjectKey: string, desBucketName: string, destObjectKey: string, options: any): Promise<any>;
```
---
### asyncDeleteObject

```typescript
 AliyunOSS. asyncDeleteObject(bucketName: string, objectKey: string): Promise<any>;
```
---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

* MIT
