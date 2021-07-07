
package com.reactnativealioss;

import com.alibaba.sdk.android.oss.OSS;
import com.alibaba.sdk.android.oss.common.OSSLog;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class AliOssModule extends ReactContextBaseJavaModule {

    private OSS mOSS;
    private AliOssBucketManager mBucketManager;
    private AliOssObjectManager mObjectManager;
    private AliOssUploadManager mUploadManager;
    private AliOssDownloadManager mDownloadManager;
    private AliOssAuthManager mAuth;

    /**
     * AliOssModule constructor
     * @param reactContext
     */
    public AliOssModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mAuth = new AliOssAuthManager(reactContext.getApplicationContext(), new AliOssAuthManager.AuthListener() {
            @Override
            public void onAuthFinished(OSS oss) {
                init(oss);
            }
        });
    }

    @Override
    public String getName() {
        return "AliOss";
    }

    /**
     * enable dev log
     */
    @ReactMethod
    public void enableDevMode() {
        OSSLog.enableLog();
    }

    /**
     * init oss ReactMethod
     * @param oss
     */
    private void init(OSS oss) {
        mOSS = oss;
        mBucketManager = new AliOssBucketManager(mOSS);
        mObjectManager = new AliOssObjectManager(mOSS);
        mUploadManager = new AliOssUploadManager(mOSS);
        mDownloadManager = new AliOssDownloadManager(mOSS);
    }

    /**
     * initWithSigner ReactMethod
     * @param signature
     * @param accessKey
     * @param endPoint
     * @param configuration
     */
    @ReactMethod
    public void initWithSigner(final String signature, final String accessKey, String endPoint, ReadableMap configuration) {
        mAuth.initWithSigner(signature, accessKey, endPoint, configuration);
    }

    /**
     * initWithPlainTextAccessKey ReactMethod
     * @param accessKeyId
     * @param accessKeySecret
     * @param endPoint
     * @param configuration
     */
    @ReactMethod
    public void initWithPlainTextAccessKey(String accessKeyId, String accessKeySecret, String endPoint, ReadableMap configuration) {
        mAuth.initWithPlainTextAccessKey(accessKeyId, accessKeySecret, endPoint, configuration);
    }

    /**
     * initWithSecurityToken ReactMethod
     * @param securityToken
     * @param accessKeyId
     * @param accessKeySecret
     * @param endPoint
     * @param configuration
     */
    @ReactMethod
    public void initWithSecurityToken(String securityToken, String accessKeyId, String accessKeySecret, String endPoint, ReadableMap configuration) {
        mAuth.initWithSecurityToken(securityToken, accessKeyId, accessKeySecret, endPoint, configuration);
    }

    /**
     * initWithServerSTS ReactMethod
     * @param server
     * @param endPoint
     * @param configuration
     */
    @ReactMethod
    public void initWithServerSTS(final String server, String endPoint, ReadableMap configuration) {
        mAuth.initWithServerSTS(server, endPoint, configuration);
    }

    /**
     * async Upload ReactMethod
     * @param bucketName
     * @param ossFile
     * @param sourceFile
     * @param promise
     */
    @ReactMethod
    public void asyncUpload(String bucketName, String ossFile, String sourceFile,ReadableMap options, final Promise promise) {
        mUploadManager.asyncUpload(getReactApplicationContext(), bucketName, ossFile, sourceFile, options, promise);
    }

    /**
     * asyncAppendObject ReactMethod
     * @param bucketName
     * @param objectKey
     * @param uploadFilePath
     * @param options
     * @param promise
     */
    @ReactMethod
    public void asyncAppendObject(String bucketName,String objectKey,String uploadFilePath,ReadableMap options,final Promise promise) {
        mUploadManager.asyncAppendObject(getReactApplicationContext(),bucketName, objectKey, uploadFilePath, options, promise);
    }

    /**
     * asyncResumableUpload ReactMethod
     * @param bucketName
     * @param objectKey
     * @param uploadFilePath
     * @param options
     * @param promise
     */
    @ReactMethod
    public void asyncResumableUpload(String bucketName,String objectKey,String uploadFilePath,ReadableMap options,final Promise promise) {
        mUploadManager.asyncResumableUpload(getReactApplicationContext(), bucketName, objectKey, uploadFilePath, options, promise);
    }

    /**
     * initMultipartUpload ReactMethod
     * @param bucketName
     * @param objectKey
     * @param promise
     */
    @ReactMethod
    public void initMultipartUpload(String bucketName,String objectKey,final Promise promise) {
        mUploadManager.initMultipartUpload(bucketName, objectKey, promise);
    }

    /**
     * multipartUpload ReactMethod
     * @param bucketName
     * @param objectKey
     * @param filepath
     * @param options
     * @param promise
     */
//    @SuppressLint("LongLogTag")
    @ReactMethod
    public void multipartUpload(String bucketName, String objectKey, String uploadId, String filepath, ReadableMap options,final Promise promise) {
        mUploadManager.multipartUpload(getReactApplicationContext(), bucketName, objectKey, uploadId, filepath, options, promise);
    }

    /**
     * AbortMultipartUploadRequest ReactMethod
     * @param bucketName
     * @param objectKey
     * @param uploadId
     */
    @ReactMethod
    public void abortMultipartUpload(String bucketName,String objectKey,String uploadId,final Promise promise) {
        mUploadManager.abortMultipartUpload(bucketName, objectKey, uploadId, promise);
    }

    /**
     * listParts ReactMethod
     * @param bucketName
     * @param objectKey
     * @param uploadId
     * @param promise
     */
    @ReactMethod
    public void listParts (String bucketName,String objectKey,String uploadId,final Promise promise) {
        mUploadManager.listParts(bucketName, objectKey, uploadId, promise);
    }

    /**
     * asyncDownload and image process ReactMethod
     * @param bucketName
     * @param ossFile
     * @param updateDate
     * @param options
     * @param promise
     */
    @ReactMethod
    public void asyncDownload(String bucketName, String ossFile, String updateDate,ReadableMap options, final Promise promise) {
        mDownloadManager.asyncDownload(getReactApplicationContext(), bucketName, ossFile, updateDate, options, promise);
    }
    /**
     * createBucket ReactMethod
     * @param bucketName
     * @param acl
     * @param region
     * @param promise
     */
    @ReactMethod
    public void asyncCreateBucket (String bucketName,String acl,String region,final Promise promise) {
        mBucketManager.asyncCreateBucket(bucketName, acl, region, promise);
    }

    /**
     * async getBucketName ReactMethod
     * @param bucketName
     * @param promise
     */
    @ReactMethod
    public void asyncGetBucketACL (String bucketName,final Promise promise) {
        mBucketManager.asyncGetBucketACL(bucketName,promise);
    }

    /**
     * list buckets ReactMethod
     * @param promise
     */
    @ReactMethod
    public void asyncListBuckets(final Promise promise) {
        mBucketManager.asyncListBuckets(promise);
    }
    /**
     * async delet bucket ReactMethod
     * @param bucketName
     * @param promise
     */
    @ReactMethod
    public void asyncDeleteBucket(String bucketName,final Promise promise) {
        mBucketManager.asyncDeleteBucket(bucketName,promise);
    }

    /**
     * asyncHeadObject ReactMethod
     * @param bucketName
     * @param objectKey
     * @param promise
     */
    @ReactMethod
    public void asyncHeadObject(String bucketName,String objectKey,final Promise promise) {
       mObjectManager.asyncHeadObject(bucketName,objectKey,promise);
    }

    /**
     * asyncListObjects ReactMethod
     * @param bucketName
     * @param prefix
     * @param promise
     */
    @ReactMethod
    public void asyncListObjects(String bucketName,ReadableMap options,final Promise promise) {
        mObjectManager.asyncListObjects(bucketName, options, promise);
    }

    /**
     * copy objects ReactMethod
     * @param srcBucketName
     * @param srcObjectKey
     * @param desBucketName
     * @param destObjectKey
     * @param options set object metadata
     * @param promise
     */

    @ReactMethod
    public void asyncCopyObject (String srcBucketName,String srcObjectKey, String desBucketName, String destObjectKey,ReadableMap options ,final Promise promise ) {
        mObjectManager.asyncCopyObject(srcBucketName,srcObjectKey,desBucketName,destObjectKey,options,promise);
    }

    /**
     * does object exist ReactMethod
     * @param bucketName
     * @param objectKey
     * @param promise
     */
    @ReactMethod
    public void doesObjectExist(String bucketName,String objectKey,final Promise promise) {
        mObjectManager.doesObjectExist(bucketName,objectKey,promise);
    }

    /**
     * asyncDeleteObject ReactMethod
     * @param bucketName
     * @param objectKey
     * @param promise
     */
    @ReactMethod
    public void asyncDeleteObject(String bucketName, String objectKey,final Promise promise) {
        mObjectManager.asyncDeleteObject(bucketName, objectKey, promise);
    }
}
