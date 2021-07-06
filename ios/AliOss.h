//
//  AliOss.h
//  Created by hfan

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <AliyunOSSiOS/OSSService.h>


@interface AliOss : RCTEventEmitter <RCTBridgeModule>

@property OSSClient *client;
@property OSSClientConfiguration *clientConfiguration;
@property bool hasListeners;

-(NSString *)getDocumentDirectory;
-(NSString *)getTemporaryDirectory;
-(void) initConfiguration:(NSDictionary *)configuration;
-(void) beginUploadingWithFilepath:(NSString *)filepath resultBlock:(void (^) (NSData *))callback;


+ (NSString*)generateTemporaryDirectoryFrom:(NSString*)sourcePath withData:(NSData*)data;

@end

