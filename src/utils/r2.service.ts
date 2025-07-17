import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class R2Service {
  private readonly s3Client: S3Client;

  constructor() {
    if (!process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
      throw new Error('Credenciais R2 não configuradas.');
    }
    this.s3Client = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT!,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(bucketName: string, key: string, file: Buffer) {
    const fileExtension = path.extname(key);
    const contentType = `image/${fileExtension.substring(1)}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file,
      ContentType: contentType,
    });

    await this.s3Client.send(command);
    return `${process.env.R2_PUBLIC_DOMAIN}/${key}`;
  }
}
