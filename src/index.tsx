import {
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Platform,
  EmitterSubscription,
} from 'react-native';

const { AliOss } = NativeModules;

let subscription: EmitterSubscription;

//default configuration for OSS Client
const conf = {
  maxRetryCount: 3,
  timeoutIntervalForRequest: 30,
  timeoutIntervalForResource: 24 * 60 * 60,
};

const imageXOssProcess = {
  'x-oss-process': '',
};

let partSize = 128 * 1024;
const mulitpartUploadConfig = {
  partSize: partSize,
};

//appendObject
const appendOptions = {
  appendPosition: 0,
  contentType: '',
  contentMd5: '',
  contentEncoding: '',
  contentDisposition: '',
};

const AliyunOSS = {
  //Enable dev mode
  enableDevMode() {
    AliOss.enableDevMode();
  },

  /**
   * Initialize the OSS Client
   * Mode: PlainTextAKSK
   */
  initWithPlainTextAccessKey(
    accessKey: string,
    secretKey: string,
    endPoint: string,
    configuration = conf
  ) {
    AliOss.initWithPlainTextAccessKey(
      accessKey,
      secretKey,
      endPoint,
      configuration
    );
  },

  /**
   * Initialize the OSS Client
   * Mode: ImplementedSigner
   */
  initWithImplementedSigner(
    signature: string,
    accessKey: string,
    endPoint: string,
    configuration = conf
  ) {
    AliOss.initWithImplementedSigner(
      signature,
      accessKey,
      endPoint,
      configuration
    );
  },

  /**
   * Initialize the OSS Client
   * Mode: SecurityToken (STS)
   */
  initWithSecurityToken(
    securityToken: string,
    accessKey: string,
    secretKey: string,
    endPoint: string,
    configuration = conf
  ) {
    AliOss.initWithSecurityToken(
      securityToken,
      accessKey,
      secretKey,
      endPoint,
      configuration
    );
  },

  /**
   * Initialize the OSS Client
   * Server STS
   */
  initWithServerSTS(server: string, endPoint: string, configuration = conf) {
    AliOss.initWithServerSTS(server, endPoint, configuration);
  },

  /**
   * Asynchronously uploading
   */
  asyncUpload(
    bucketName: string,
    objectKey: string,
    filepath: string,
    options: any
  ) {
    return AliOss.asyncUpload(bucketName, objectKey, filepath, options);
  },

  /**
   * Asynchronously
   */
  asyncResumableUpload(
    bucketName: string,
    objectKey: string,
    filepath = '',
    options = {}
  ) {
    return AliOss.asyncResumableUpload(
      bucketName,
      objectKey,
      filepath,
      options
    );
  },

  /**
   * Asynchronously asyncAppendObject
   */
  asyncAppendObject(
    bucketName: string,
    objectKey: string,
    filepath: string,
    options = appendOptions
  ) {
    return AliOss.asyncAppendObject(bucketName, objectKey, filepath, options);
  },

  /**
   * Asynchronously
   */
  initMultipartUpload(bucketName: string, objectKey: string) {
    return AliOss.initMultipartUpload(bucketName, objectKey);
  },

  /**
   * Asynchronously multipartUpload
   */
  multipartUpload(
    bucketName: string,
    objectKey: string,
    uploadId: string,
    filepath = '',
    options = mulitpartUploadConfig
  ) {
    return AliOss.multipartUpload(
      bucketName,
      objectKey,
      uploadId,
      filepath,
      options
    );
  },

  /**
   * Asynchronously listParts
   */
  listParts(bucketName: string, objectKey: string, uploadId: string) {
    return AliOss.listParts(bucketName, objectKey, uploadId);
  },
  /**
   * Asynchronously abortMultipartUpload
   */
  abortMultipartUpload(
    bucketName: string,
    objectKey: string,
    uploadId: string
  ) {
    return AliOss.abortMultipartUpload(bucketName, objectKey, uploadId);
  },

  /**
   * Asynchronously downloading
   */
  asyncDownload(
    bucketName: string,
    objectKey: string,
    filepath = '',
    options = imageXOssProcess
  ) {
    return AliOss.asyncDownload(bucketName, objectKey, filepath, options);
  },

  /*
    asyncListBuckets
    */

  asyncListBuckets() {
    return AliOss.asyncListBuckets();
  },

  /**
   * Asynchronously getHeadObject
   */

  asyncHeadObject(bucketName: string, objectKey: string) {
    return AliOss.asyncHeadObject(bucketName, objectKey);
  },

  /**
   * Asynchronously getAsyncObjects
   */

  asyncListObjects(bucketName: string, options: string) {
    return AliOss.asyncListObjects(bucketName, options);
  },

  /**
   * Asynchronously asyncCopyObject
   */

  asyncCopyObject(
    srcBucketName: string,
    srcObjectKey: string,
    desBucketName: string,
    destObjectKey: string,
    options: any
  ) {
    return AliOss.asyncCopyObject(
      srcBucketName,
      srcObjectKey,
      desBucketName,
      destObjectKey,
      options
    );
  },

  /**
   * Asynchronously doesObjectExist
   */

  doesObjectExist(bucketName: string, objectKey: string) {
    return AliOss.doesObjectExist(bucketName, objectKey);
  },

  /**
   * Asynchronously asyncDeleteObject
   */

  asyncDeleteObject(bucketName: string, objectKey: string) {
    return AliOss.asyncDeleteObject(bucketName, objectKey);
  },

  /**
   * Asynchronously createBucket
   */
  asyncCreateBucket(bucketName: string, acl = 'private', region: string) {
    return AliOss.asyncCreateBucket(bucketName, acl, region);
  },

  /**
   * Asynchronously getBucketACL
   */
  asyncGetBucketACL(bucketName: string) {
    return AliOss.asyncGetBucketACL(bucketName);
  },

  /**
   * Asynchronously deleteBucket
   */
  asyncDeleteBucket(bucketName: string) {
    return AliOss.asyncDeleteBucket(bucketName);
  },

  /**
   * event listener for native upload/download event
   * @param event one of 'uploadProgress' or 'downloadProgress'
   * @param callback a callback function accepts one params: event
   */
  addEventListener(event: any, callback: any) {
    const RNAliyunEmitter =
      Platform.OS === 'ios'
        ? new NativeEventEmitter(AliOss)
        : DeviceEventEmitter;
    switch (event) {
      case 'uploadProgress':
        subscription = RNAliyunEmitter.addListener('uploadProgress', (e) =>
          callback(e)
        );
        break;
      case 'downloadProgress':
        subscription = RNAliyunEmitter.addListener('downloadProgress', (e) =>
          callback(e)
        );
        break;
      default:
        break;
    }
  },

  /**
   * remove event listener for native upload/download event
   * @param event one of 'uploadProgress' or 'downloadProgress'
   */
  removeEventListener(event: any) {
    switch (event) {
      case 'uploadProgress':
        subscription.remove();
        break;
      case 'downloadProgress':
        subscription.remove();
        break;
      default:
        break;
    }
  },
};
export { AliyunOSS };
