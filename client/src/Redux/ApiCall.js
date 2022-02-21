import { loginFailure, loginstart, loginSuccessful } from "./Userslic";
import {PublicRequest,RequestWithToken} from "../Component/Axios"
import {GetproductStart,GetproductSuccess,Getproducterr,
DeleteproductStart,DeleteproductSuccess,Deleteproducterr,
CreateproductStart,CreateproductSuccess,Createproducterr,
UpdateproductStart,UpdateproductSuccess,Updateproducterr} from "./ProductRedux";
import {Storage} from "../Firebase/Uploader"

// login start
export const Login =async(dispatc,users)=>{
     dispatc(loginstart());
     try {
         const {user}=users;
         const check=user?'/auth/register':`/auth/login`;
         const {data}=await PublicRequest.post(check,users);
         dispatc(loginSuccessful(data))
     } catch (error) {
         dispatc(loginFailure())
     }
}
// get all products
export const Products=async(dispatc)=>{
    dispatc(GetproductStart());
    try {
        const {data}=await PublicRequest.get("/product/all");
        dispatc(GetproductSuccess(data))
    } catch (error) {
        dispatc(Getproducterr())
    }
}
// create product
export const CreateProduct=async(dispatc,obj)=>{
    
}
// delete product
export const DeleteProduct=async(dispatc,id)=>{
    dispatc(DeleteproductStart());
    try {
      
        const {data}=await RequestWithToken.delete(`/product/${id}`);
        dispatc(DeleteproductSuccess(data))
    } catch (error) {
        dispatc(Deleteproducterr())
    }
}
// Update Product
export const UpdateProduct=async(dispatc,id,obj,uuid)=>{
    dispatc(UpdateproductStart());
    try {
         const {img}=obj;
         if(img!==undefined){
             console.log("image contained",img);
            const store = Storage.ref(`post/${"Ecom"}/${uuid}`).put(img)
            store.on("state_changed", fun1, fun2, fun3);
            function fun1(snapshot) {
            }
            function fun2(er) {
            }
            function fun3() {
                store.snapshot.ref.getDownloadURL().then(async(x) => {
                    const ob={...obj,img:x};
                    try {
                        const {data}=await RequestWithToken.put(`/product/${id}`,ob);
                        dispatc(UpdateproductSuccess(data))
                    } catch (error) {
        dispatc(Updateproducterr())

                    }
        
                })
        
        
            }
         }
       else{  console.log("hello img not contain");
        const {data}=await RequestWithToken.put(`/product/${id}`,obj);
        dispatc(UpdateproductSuccess(data))}
    } catch (error) {
        dispatc(Updateproducterr())
    }
}
export const ImageUploader = (dispatc,obj,ui, sfile) => {
    const store = Storage.ref(`post/${"Ecom"}/${ui}`).put(sfile)
    store.on("state_changed", fun1, fun2, fun3);
    dispatc(CreateproductStart());
    function fun1(snapshot) {
    }
    function fun2(er) {
    }
    function fun3() {
        store.snapshot.ref.getDownloadURL().then(async(x) => {
            const ob={...obj,img:x};
            try {
                const {data}=await RequestWithToken.post(`/product`,ob);
                dispatc(CreateproductSuccess(data))
            } catch (error) {
                dispatc(Createproducterr())
            }

        })


    }
}

// get all users
export const User=async(dispatc)=>{
    dispatc(GetproductStart());
    try {
        const {data}=await RequestWithToken.get("/user/all");
        dispatc(GetproductSuccess(data))
    } catch (error) {
        dispatc(Getproducterr())
    }
}
// create product
export const CreateUser=async(dispatc,obj)=>{
    
}
// delete product
export const DeleteUser=async(dispatc,id)=>{
    dispatc(DeleteproductStart());
    try {
      
        const {data}=await RequestWithToken.delete(`/user/${id}`);
        dispatc(DeleteproductSuccess(data))
    } catch (error) {
        dispatc(Deleteproducterr())
    }
}
// Update Product
export const UpdateUser=async(dispatc,id,obj,uuid)=>{
    console.log(obj,'img')
    dispatc(UpdateproductStart)
    if(obj.img===undefined){
    try {
        const {data}=  await RequestWithToken.put(`/user/${id}`,obj);
        console.log('dont have permission to update with out img')
        dispatc(UpdateproductSuccess(data))
    } catch (error) {
        dispatc(Updateproducterr())
    }
    }else{
       try {
           console.log(obj.img,"img pro");
        const store = Storage.ref(`post/${"Ecom"}/${uuid}`).put(obj.img)
        store.on("state_changed", fun1, fun2, fun3);
        dispatc(CreateproductStart());
        function fun1(snapshot) {
        }
        function fun2(er) {
        }
        function fun3() {
            store.snapshot.ref.getDownloadURL().then(async(x) => {
                const ob={...obj,img:x};
                console.log(ob,'object filler')
                try {
                    const {data}=await RequestWithToken.post(`/user/${id}`,ob);
                    console.log(data,'update')
                    dispatc(CreateproductSuccess(data))
                } catch (error) {
                    dispatc(Createproducterr())
                }
    
            })
    
    
        }
       } catch (error) {
        dispatc(Updateproducterr())
           
       }
    }
}
export const UserImageUploader = (dispatc,obj,ui, sfile) => {
    const store = Storage.ref(`post/${"Ecom"}/${ui}`).put(sfile)
    store.on("state_changed", fun1, fun2, fun3);
    dispatc(CreateproductStart());
    function fun1(snapshot) {
    }
    function fun2(er) {
    }
    function fun3() {
        store.snapshot.ref.getDownloadURL().then(async(x) => {
            const ob={...obj,img:x};
            try {
                const {data}=await RequestWithToken.post(`/user`,ob);
                dispatc(CreateproductSuccess(data))
            } catch (error) {
                dispatc(Createproducterr())
            }

        })


    }
}