import React,{ useEffect,useState } from 'react'
import useEcomStore from '../../store/ecom-store'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { numberFormat } from "../../utils/number";


const Searchcard = () => {
    const getProduct = useEcomStore((state)=> state.getProduct)
    const products = useEcomStore((state)=> state.products)
    const actionSearchFilters = useEcomStore((state)=>state.actionSearchFilters)
    
    const getCategory = useEcomStore((state)=>state.getCategory)
    const categories = useEcomStore((state)=>state.categories)

    const [text,setText] = useState('')
    const [CategorySelected, setCategoryselected] = useState([])

    const [price, setPrice] = useState([1000,30000])
    const [ok, setOk] = useState(false)



    useEffect(()=>{
        getCategory()
    },[])

    //Step 1 Search Text
    
    // console.log(text);
    useEffect(()=>{
        const delay = setTimeout(()=>{
            
            if(text){
                actionSearchFilters({ query:text} )
            }else{
                getProduct()
            }
        },300)


        return ()=>clearTimeout(delay)
    },[text])


{/*Step 2 Search By Category */}
    const handleCheck = (e) => {
        // console.log(e.target.value);
        const inCheck = e.target.value              // checked value
        const inState = [...CategorySelected]  //[]
        const findCheck = inState.indexOf(inCheck) //not found return-1

        if(findCheck === -1) {
            inState.push(inCheck)
        }else{
            inState.splice(findCheck,1)
        }
        setCategoryselected(inState)

        
        if(inState.length>0){
            actionSearchFilters({ category: inState }) // In post man backend
        }else{
            getProduct()
        }
    }
    // console.log(CategorySelected);
    


    {/*Step 3 Search By Price */}
    useEffect(()=>{
        actionSearchFilters({price })
    },[ok])
    const handlePrice = (value) => {
        console.log(value);
        setPrice(value)

        setTimeout(() => {
            setOk(!ok)
        }, 300);
    }





  return (
    <div>
        <h1 className=' text-xl font-bold mb-4'>ค้นหาสินค้า</h1>

        <input 
        onChange={(e)=>setText(e.target.value)}
        type='text'
        placeholder='ค้นหาสินค้า....'
        className='border rounded-md w-full mb-4 px-2' />
        <hr />
        
        <div>
            <h1 className=' text-2xl'>หมวดหมู่สินค้า</h1>
            <div>
                {
                    categories.map((item,index)=>
                        <div 
                        
                        className='flex gap-2'
                        key={index}>
                        <input 
                        onChange={handleCheck}
                        value={item.id}
                        type='checkbox'/>
                        <label>{item.name}</label>
                        </div>
                    )
                }
            </div>
            {/* Search By Price */}
            <div>
                <h1>ค้นหาราคา</h1>
                <div>
                    <div className=' flex justify-between'>
                        <span>Min{numberFormat(price[0])}</span>
                        <span>Max{numberFormat(price[1])}</span>
                    </div>
                    <Slider
                    onChange={handlePrice} 
                    range
                    min={0}
                    max={100000}
                    defaultValue={[1000,30000]}
                    />
                </div>
            </div>



        </div>










    </div>
  )
}

export default Searchcard