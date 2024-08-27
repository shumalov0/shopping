import axios from 'axios'


const URLS = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/local`;

const loginUser = async(email:any,password:any)=>{

    try {

        const response = await axios.post(URLS,{
        
            identifier:email,
            password:password

        })

        return response.data
        
    } catch (error) {
        
        console.log(error)
        throw error
        
    }

}

export default loginUser;