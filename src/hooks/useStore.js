import { useDispatch, useSelector } from "react-redux"
import { gifsApi } from "../api/gifsApi"
import { setError, setGif, setGifs, setLoading, setTrendingGifs } from "../store/slider/gifSlide"


export const useStore = () => {
  
    const dispatch = useDispatch()
    const { isActive, isLoading, data, error, gif } = useSelector( state => state.gifs )

    const getTrendingGifs = async() => {

        dispatch(setLoading())
        dispatch(setGif('Trending gifs'))

        try {
            const { data } = await gifsApi.get(`/v1/gifs/trending?api_key=j0X0U1Ms0e8xoLT43KN4m4Oxwzx0Bzr4&limit=30`)
            dispatch( setTrendingGifs( data.data ))       
        } catch (error) {
            console.log( 'Error', error )
            dispatch( setError( error.message ))
        }
    }

    const getGifs = async( gif ) => {

        dispatch(setLoading())
        dispatch(setGif(gif))
        
        try {            
            const { data } = await gifsApi.get(`/v1/gifs/search?api_key=j0X0U1Ms0e8xoLT43KN4m4Oxwzx0Bzr4&limit=30&q=${ gif }`)
            if( data.data.length === 0 ) {
                dispatch(setError('Gifs no encontrado'))
                //getTrendingGifs()
                setTimeout(() => {
                    getTrendingGifs()
                }, 3000 )
                return
            }
            dispatch( setGifs( data.data ))    
        } catch (error) {
            console.log( error )
            dispatch( setError('gif not found'))
        }
    }

    const onHomeReturn = () => {
        getTrendingGifs()
    }

    return{
        //props
        data,
        error,
        gif,
        isActive,
        isLoading,



        //methods
        getGifs,
        getTrendingGifs,
        onHomeReturn
    }
}

/**
    const getTrendingGifs = async() => {

        try {
            const { data } = await gifsApi.get(`/v1/gifs/trending?api_key=j0X0U1Ms0e8xoLT43KN4m4Oxwzx0Bzr4&limit=20`)
            //console.log( data.data )
            const resp = (Object.values(data.data))

            const gifs = resp.map((gif) => {
                return{
                    title: gif.title,
                    imagens: gif.images.downsized_medium.url
                }
            })
            dispatch( setTrendingGifs( gifs ))
            
        } catch (error) {
            console.log( 'Error', error )
        }
    }
 */
