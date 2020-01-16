'use strict';

import Response from './Response';
import * as Fs from 'fs';
import { createHash } from '../Utils';
import { IncomingMessage } from 'http';

export default class StreamResponse extends Response
{
  save(directory: string, filename: string = ''): string
  {
    let dirStatus = Fs.statSync(directory);
    if (!dirStatus.isDirectory()) {
      Fs.mkdirSync(directory);
    }
    try {
      Fs.accessSync(directory, Fs.constants.W_OK);
    }
    catch (e) {
      throw new Error(`'${directory}' is not writable.`);
    }

    let content = this.getContent().toString();

    if (!content || '{' === content[0]) {
      throw new Error('Invalid media response content.');
    }

    if (!filename) {
      filename = createHash(content, 'md5');
    }

    Fs.writeFileSync(`${directory}/${filename}`, this.getContent());

    return filename;
  }

  saveAs(directory: string, filename: string = ''): string
  {
    return this.save(directory, filename);
  }

  static buildFromIncomingMessage(message: IncomingMessage)
  {
    return new StreamResponse(message['body'], message['statusCode'], message['headers']);
  }

};
