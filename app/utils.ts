import axios from "axios";
import { BaseUrl } from "./const";
import useLocalStorageState from "use-local-storage-state";



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


export async function getCurrency(id: string): Promise<JSON> {
    try {
        const data = await axios({
            method: 'post',
            url: `${BaseUrl}/api/upload-file`,
            data: { "id": id },
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

export async function getCampaignType(id: string): Promise<string> {
    try {
        const data = await axios.post(`${BaseUrl}/api/get-campaign-type`);
        if (data.data.status == false) {
            return data.data.message;
        } else {
            let name: string = "";
            for (let i: number = 0; i < data.data.data.length; i++) {
                if (data.data.data[i].id == id) {
                    name = data.data.data[i].categoryName;
                }
            }
            return name;
        }

    } catch (e: any) {
        return e.toString();
    }
}
