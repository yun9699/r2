import {ChangeEvent, useRef, useState} from "react";
import {postAdd} from "../../api/productAPI.ts";



const initialState = {
    pname:'',
    pdesc: '',
    price: '',
}

interface IProduct {
    pname: string;
    pdesc: string;
    price: string;
}


function ProductAddPage() {

    const [product] = useState<IProduct>({...initialState})

    const filesRef = useRef<HTMLInputElement>(null)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        // @ts-ignore
        product[name] = value
    }

    const handleClick = () => {
        console.log(product)

        const files = filesRef?.current?.files

        const formData:FormData = new FormData()

        if(files) {
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i])
            }
        }

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        postAdd(formData).then(data => {
            console.log(data)
            if(filesRef?.current?.files){
                filesRef.current.value = ''
            }
        })

    }


    return (
        <div>
            <div>Product Add Page</div>

            <div>

                <input type='text' name='pname' placeholder='Product Name' onChange={(e) =>handleChange(e)} />
                <input type='text' name='pdesc' placeholder='Product Desc' onChange={(e) =>handleChange(e)}/>
                <input type='number' name='price' placeholder='1000' onChange={(e) =>handleChange(e)}/>
                <input type='file' ref={filesRef} name='files' multiple={true}/>

                <button onClick={handleClick}>ADD</button>

            </div>


        </div>
    );
}

export default ProductAddPage;