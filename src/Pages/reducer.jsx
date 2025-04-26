
import  {useReducer} from "react"
const initialState=[
                {
                    id:1,
                    name:"pro1",
                    price:240
                },
                {
                    name:"pro2",
                    id:2,
                    price:1000
                },{
                name:"pro3",
                id:3,
                price:2000
                }
]
function productReducer(state,action){
   switch(action.type){
    case "ADD_PRODUCT":
        return [...state,action.payload]
    case "DELETE_PRODUCT":
        return state.filter(product=>product.id!==action.payload.id)
    case "UPDATE_PRODUCT":
        return state.map(product=>product.id===action.payload.id?{...product,...action.payload}:product)
    default:
        return state
   }
}

const ProductFunction=()=>{
    const [products,dispatch]=useReducer(productReducer,initialState)
    const addProduct=()=>{
        const newProduct={
            id: new Date(),
            name:"new Product",
            price: 500
        }
        dispatch({type:"ADD_PRODUCT",payload:newProduct})
    }

    // edit function
    const handleEdit=(id)=>{
        dispatch({type:"UPDATE_PRODUCT",payload:{id,name:"updated name",price:330}})
    }

    // delete procuct
    const handleDelete=(id)=>{
        dispatch({type:"DELETE_PRODUCT",payload:{id:id}})
    }

    return (
        <div>
            <h5>Reducer tutorial</h5>
            <button onClick={addProduct}>Add product</button>
           <ul>
            {products.map(product=>(
            <li key={product.id}>
                NAME: {product.name}
                price {product.price}
                <button onClick={()=>handleEdit(product.id)}>Edit</button>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
            </li>)
        )}
           </ul>
            
        </div>
    )
}


export default ProductFunction
