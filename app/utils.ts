import axios from "axios";
import { BaseUrl } from "./const";



export async function UploadFile(file: File): Promise<string> {

    try {
        let formData = new FormData();
        formData.append('file', file);
        const data = await axios({
            method: 'post',
            url: `${BaseUrl}/api/upload-file`,
            data: formData,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Options': '*',
                'Access-Control-Allow-Methods': '*',
                'X-Content-Type-Options': '*',
                'Content-Type': 'multipart/form-data',
                'Accept': '*'
            }
        });
        if (data.data.status == false) {
            return data.data.message;
        } else {
            return data.data.data.filePath;
        }

    } catch (e: any) {
        return e.toString();
    }
}