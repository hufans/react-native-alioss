declare type OSSinit = {
    maxRetryCount: number;
    timeoutIntervalForRequest: number;
    timeoutIntervalForResource: number;
};
declare type OssListOptions = {
    prefix: string;
    marker?: string;
    maxKeys?: string;
    delimiter?: string;
};
declare type AppendType = {
    appendPosition: number;
    contentType: string;
    contentMd5: string;
    contentEncoding: string;
    contentDisposition: string;
};
declare const AliyunOSS: {
    enableDevMode(): void;
    /**
     * Initialize the OSS Client
     * Mode: PlainTextAKSK
     */
    initWithPlainTextAccessKey(accessKey: string, secretKey: string, endPoint: string, configuration?: OSSinit): void;
    /**
     * Initialize the OSS Client
     * Mode: ImplementedSigner
     */
    initWithImplementedSigner(signature: string, accessKey: string, endPoint: string, configuration?: OSSinit): void;
    /**
     * Initialize the OSS Client
     * Mode: SecurityToken (STS)
     */
    initWithSecurityToken(securityToken: string, accessKey: string, secretKey: string, endPoint: string, configuration?: OSSinit): void;
    /**
     * Initialize the OSS Client
     * Server STS
     */
    initWithServerSTS(server: string, endPoint: string, configuration?: OSSinit): void;
    /**
     * Asynchronously uploading
     */
    asyncUpload(bucketName: string, objectKey: string, filepath: string, options?: {}): Promise<any>;
    /**
     * Asynchronously
     */
    asyncResumableUpload(bucketName: string, objectKey: string, filepath?: string, options?: {}): Promise<any>;
    /**
     * Asynchronously asyncAppendObject
     */
    asyncAppendObject(bucketName: string, objectKey: string, filepath: string, options?: AppendType): Promise<any>;
    /**
     * Asynchronously
     */
    initMultipartUpload(bucketName: string, objectKey: string): Promise<any>;
    /**
     * Asynchronously multipartUpload
     */
    multipartUpload(bucketName: string, objectKey: string, uploadId: string, filepath?: string, options?: {
        partSize: number;
    }): Promise<any>;
    /**
     * Asynchronously listParts
     */
    listParts(bucketName: string, objectKey: string, uploadId: string): Promise<any>;
    /**
     * Asynchronously abortMultipartUpload
     */
    abortMultipartUpload(bucketName: string, objectKey: string, uploadId: string): Promise<any>;
    /**
     * Asynchronously downloading
     */
    asyncDownload(bucketName: string, objectKey: string, filepath?: string, options?: {
        'x-oss-process': string;
    }): Promise<any>;
    asyncListBuckets(): Promise<any>;
    /**
     * Asynchronously getHeadObject
     */
    asyncHeadObject(bucketName: string, objectKey: string): Promise<any>;
    /**
     * Asynchronously getAsyncObjects
     */
    asyncListObjects(bucketName: string, options?: OssListOptions | undefined): Promise<any>;
    /**
     * Asynchronously asyncCopyObject
     */
    asyncCopyObject(srcBucketName: string, srcObjectKey: string, desBucketName: string, destObjectKey: string, options: any): Promise<any>;
    /**
     * Asynchronously doesObjectExist
     */
    doesObjectExist(bucketName: string, objectKey: string): Promise<any>;
    /**
     * Asynchronously asyncDeleteObject
     */
    asyncDeleteObject(bucketName: string, objectKey: string): Promise<any>;
    /**
     * Asynchronously createBucket
     */
    asyncCreateBucket(bucketName: string, acl: string | undefined, region: string): Promise<any>;
    /**
     * Asynchronously getBucketACL
     */
    asyncGetBucketACL(bucketName: string): Promise<any>;
    /**
     * Asynchronously deleteBucket
     */
    asyncDeleteBucket(bucketName: string): Promise<any>;
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
