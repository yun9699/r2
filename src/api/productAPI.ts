import axios from "axios";


const host = 'http://localhost:8089/api/products';

const header = {
    headers: {
        'Content-Type': 'multipart/form-data',  // 파일 전송 형식 지정
    }
}

export const postAdd = async (formData: FormData): Promise<number> => {

    const res = await axios.post(`${host}/`, formData, header)

    return Number(res.data.result)
}
