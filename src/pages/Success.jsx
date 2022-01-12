import { useLocation } from 'react-router'

const Success = () => {
    const location = useLocation
    console.log(location)
    return (
        <div>
            succesfull
        </div>
    )
}

export default Success
