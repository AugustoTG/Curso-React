import './index.css'
export const TextInput = ({ serchValue, handleChange}) => {
    return <input type='search' onChange={handleChange} value={serchValue} className='text-input' placeholder='Search'/>
}
