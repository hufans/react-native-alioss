declare const AliyunOSS: {
    enableDevMode(): void;
    /**
     * Initialize the OSS Client
     * Mode: PlainTextAKSK
     */
    initWithPlainTextAccessKey(accessKey: string, secretKey: string, endPoint: string, configuration?: {
        maxRetryCount: number;
        timeoutIntervalForRequest: number;
        timeoutIntervalForResource: number;
    }): void;
    /**
     * Initialize the OSS Client
     * Mode: ImplementedSigner
     */
    initWithImplementedSigner(signature: string, accessKey: string, endPoint: string, configuration?: {
        maxRetryCount: number;
        timeoutIntervalForRequest: number;
        timeoutIntervalForResource: number;
    }): void;
    /**
     * Initialize the OSS Client
     * Mode: SecurityToken (STS)
     */
    initWithSecurityToken(securityToken: string, accessKey: string, secretKey: string, endPoint: string, configuration?: {
        maxRetryCount: number;
        timeoutIntervalForRequest: number;
        timeoutIntervalForResource: number;
    }): void;
    /**
     * Initialize the OSS Client
     * Server STS
     */
    initWithServerSTS(server: string, endPoint: string, configuration?: {
        maxRetryCount: number;
        timeoutIntervalForRequest: number;
        timeoutIntervalForResource: number;
    }): void;
    /**
     * Asynchronously uploading
     */
    asyncUpload(bucketName: string, objectKey: string, filepath: string, options: any): any;
    /**
     * Asynchronously
     */
    asyncResumableUpload(bucketName: string, objectKey: string, filepath?: string, options?: {}): any;
    /**
     * Asynchronously asyncAppendObject
     */
    asyncAppendObject(bucketName: string, objectKey: string, filepath: string, options?: {
        appendPosition: number;
        contentType: string;
        contentMd5: string;
        contentEncoding: string;
        contentDisposition: string;
    }): any;
    /**
     * Asynchronously
     */
    initMultipartUpload(bucketName: string, objectKey: string): any;
    /**
     * Asynchronously multipartUpload
     */
    multipartUpload(bucketName: string, objectKey: string, uploadId: string, filepath?: string, options?: {
        partSize: number;
    }): any;
    /**
     * Asynchronously listParts
     */
    listParts(bucketName: string, objectKey: string, uploadId: string): any;
    /**
     * Asynchronously abortMultipartUpload
     */
    abortMultipartUpload(bucketName: string, objectKey: string, uploadId: string): any;
    /**
     * Asynchronously downloading
     */
    asyncDownload(bucketName: string, objectKey: string, filepath?: string, options?: {
        'x-oss-process': string;
    }): any;
    asyncListBuckets(): any;
    /**
     * Asynchronously getHeadObject
     */
    asyncHeadObject(bucketName: string, objectKey: string): any;
    /**
     * Asynchronously getAsyncObjects
     */
    asyncListObjects(bucketName: string, options: string): any;
    /**
     * Asynchronously asyncCopyObject
     */
    asyncCopyObject(srcBucketName: string, srcObjectKey: string, desBucketName: string, destObjectKey: string, options: any): any;
    /**
     * Asynchronously doesObjectExist
     */
    doesObjectExist(bucketName: string, objectKey: string): any;
    /**
     * Asynchronously asyncDeleteObject
     */
    asyncDeleteObject(bucketName: string, objectKey: string): any;
    /**
     * Asynchronously createBucket
     */
    asyncCreateBucket(bucketName: string, acl: string | undefined, region: string): any;
    /**
     * Asynchronously getBucketACL
     */
    asyncGetBucketACL(bucketName: string): any;
    /**
     * Asynchronously deleteBucket
     */
    asyncDeleteBucket(bucketName: string): any;
    /**
     * event listener for native upload/download event
     * @param event one of 'uploadProgress' or 'downloadProgress'
     * @param callback a callback function accepts one params: event
     */
    addEventListener(event: any, callback: any): void;
    /**
     * remove event listener for native upload/download event
     * @param event one of 'uploadProgress' or 'downloadProgress'
     */
    removeEventListener(event: any): void;
};
export { AliyunOSS };
