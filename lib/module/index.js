import { DeviceEventEmitter, NativeEventEmitter, NativeModules, Platform } from 'react-native';
const {
  AliOss
} = NativeModules;
let subscription; //default configuration for OSS Client

const conf = {
  maxRetryCount: 3,
  timeoutIntervalForRequest: 30,
  timeoutIntervalForResource: 24 * 60 * 60
};
const imageXOssProcess = {
  'x-oss-process': ''
};
let partSize = 128 * 1024;
const mulitpartUploadConfig = {
  partSize: partSize
}; //appendObject

const appendOptions = {
  appendPosition: 0,
  contentType: '',
  contentMd5: '',
  contentEncoding: '',
  contentDisposition: ''
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
  initWithPlainTextAccessKey(accessKey, secretKey, endPoint, configuration = conf) {
    AliOss.initWithPlainTextAccessKey(accessKey, secretKey, endPoint, configuration);
  },

  /**
   * Initialize the OSS Client
   * Mode: ImplementedSigner
   */
  initWithImplementedSigner(signature, accessKey, endPoint, configuration = conf) {
    AliOss.initWithImplementedSigner(signature, accessKey, endPoint, configuration);
  },

  /**
   * Initialize the OSS Client
   * Mode: SecurityToken (STS)
   */
  initWithSecurityToken(securityToken, accessKey, secretKey, endPoint, configuration = conf) {
    AliOss.initWithSecurityToken(securityToken, accessKey, secretKey, endPoint, configuration);
  },

  /**
   * Initialize the OSS Client
   * Server STS
   */
  initWithServerSTS(server, endPoint, configuration = conf) {
    AliOss.initWithServerSTS(server, endPoint, configuration);
  },

  /**
   * Asynchronously uploading
   */
  asyncUpload(bucketName, objectKey, filepath, options) {
    return AliOss.asyncUpload(bucketName, objectKey, filepath, options);
  },

  /**
   * Asynchronously
   */
  asyncResumableUpload(bucketName, objectKey, filepath = '', options = {}) {
    return AliOss.asyncResumableUpload(bucketName, objectKey, filepath, options);
  },

  /**
   * Asynchronously asyncAppendObject
   */
  asyncAppendObject(bucketName, objectKey, filepath, options = appendOptions) {
    return AliOss.asyncAppendObject(bucketName, objectKey, filepath, options);
  },

  /**
   * Asynchronously
   */
  initMultipartUpload(bucketName, objectKey) {
    return AliOss.initMultipartUpload(bucketName, objectKey);
  },

  /**
   * Asynchronously multipartUpload
   */
  multipartUpload(bucketName, objectKey, uploadId, filepath = '', options = mulitpartUploadConfig) {
    return AliOss.multipartUpload(bucketName, objectKey, uploadId, filepath, options);
  },

  /**
   * Asynchronously listParts
   */
  listParts(bucketName, objectKey, uploadId) {
    return AliOss.listParts(bucketName, objectKey, uploadId);
  },

  /**
   * Asynchronously abortMultipartUpload
   */
  abortMultipartUpload(bucketName, objectKey, uploadId) {
    return AliOss.abortMultipartUpload(bucketName, objectKey, uploadId);
  },

  /**
   * Asynchronously downloading
   */
  asyncDownload(bucketName, objectKey, filepath = '', options = imageXOssProcess) {
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
  asyncHeadObject(bucketName, objectKey) {
    return AliOss.asyncHeadObject(bucketName, objectKey);
  },

  /**
   * Asynchronously getAsyncObjects
   */
  asyncListObjects(bucketName, options) {
    return AliOss.asyncListObjects(bucketName, options);
  },

  /**
   * Asynchronously asyncCopyObject
   */
  asyncCopyObject(srcBucketName, srcObjectKey, desBucketName, destObjectKey, options) {
    return AliOss.asyncCopyObject(srcBucketName, srcObjectKey, desBucketName, destObjectKey, options);
  },

  /**
   * Asynchronously doesObjectExist
   */
  doesObjectExist(bucketName, objectKey) {
    return AliOss.doesObjectExist(bucketName, objectKey);
  },

  /**
   * Asynchronously asyncDeleteObject
   */
  asyncDeleteObject(bucketName, objectKey) {
    return AliOss.asyncDeleteObject(bucketName, objectKey);
  },

  /**
   * Asynchronously createBucket
   */
  asyncCreateBucket(bucketName, acl = 'private', region) {
    return AliOss.asyncCreateBucket(bucketName, acl, region);
  },

  /**
   * Asynchronously getBucketACL
   */
  asyncGetBucketACL(bucketName) {
    return AliOss.asyncGetBucketACL(bucketName);
  },

  /**
   * Asynchronously deleteBucket
   */
  asyncDeleteBucket(bucketName) {
    return AliOss.asyncDeleteBucket(bucketName);
  },

  /**
   * event listener for native upload/download event
   * @param event one of 'uploadProgress' or 'downloadProgress'
   * @param callback a callback function accepts one params: event
   */
  addEventListener(event, callback) {
    const RNAliyunEmitter = Platform.OS === 'ios' ? new NativeEventEmitter(AliOss) : DeviceEventEmitter;

    switch (event) {
      case 'uploadProgress':
        subscription = RNAliyunEmitter.addListener('uploadProgress', e => callback(e));
        break;

      case 'downloadProgress':
        subscription = RNAliyunEmitter.addListener('downloadProgress', e => callback(e));
        break;

      default:
        break;
    }
  },

  /**
   * remove event listener for native upload/download event
   * @param event one of 'uploadProgress' or 'downloadProgress'
   */
  removeEventListener(event) {
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
  }

};
export { AliyunOSS };
//# sourceMappingURL=index.js.map