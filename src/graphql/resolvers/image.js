import { createWriteStream } from 'fs';
import { url } from 'inspector';
import { parse, join } from 'path';
import  { URL } from '../../config'

export  default {
    Query: {
        info: () => "Hello I am Image Resolver Methode"
    },
    Mutation: {
        imageUploader: (_, {file}) => {
            let {
                filename, 
                createReadStream 
            } = await file;
            let stream = createReadStream();
            let { ext, name } = parse(filename);
            name = name.replace(/([^a-z0-9 ]+)/gi,'-').replace(' ','_');
            let serverFile = join(__dirname, `../../uploads/${name}-${new Date()}${ext}`);
            let writeStream = await createWriteStream(serverFile);
            await stream.pipe(writeStream);

            serverFile = `${url}${serverFile.split('uploads')[1]}`;
            return serverFile;
        }
    }
}