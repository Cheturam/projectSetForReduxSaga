import apisauce from 'apisauce'

 const create: any = () => {
    // const token = () => localStorage.getItem('token')
    const api: any = () => {   // use this api for all the post and get methods
        return apisauce.create({  //apisauce create value
            baseURL: 'https://restcountries.com/v2/',
            headers: {},
            timeout: 500000,
        })
    }

    const getAllFlag = (all: string) => api().get("/",`${all}`)
   return {
        getAllFlag
    }
 
}

export default {
    create
}