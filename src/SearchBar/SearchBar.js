import React ,{useState} from 'react'
import Axios from 'axios';
import { debounce } from 'lodash';
import Loader from "react-loader-spinner";
import './searchBar.css';

const SearchBar = (props) => {

    const [ClientId , setClientId]=useState('b79d009ec0a36fceefd796ecf2c8f7981dba4259264bcf5db2cadc07100b697d');
    const [loading,setLoading] = useState(false);
    
    const handleChange = debounce((e) => {
        if(e.target.value) {
            setLoading(true)
            props.searchResult([]);
            const url = "https://api.unsplash.com/search/photos?query="+e.target.value+"&client_id="+ClientId;
                Axios.get(url).then(res=>{
                  props.searchResult(res.data.results);
                  setLoading(false)
                }).catch(err=>{ 
                    console.log(err);
                });
        }
                
      }, 1000);

    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                    <input className="search_input" type="text" onChange={handleChange} placeholder="Search..." />
                </div>
            </div>
            {
                loading ? 
                    <div className="text-center mt-5">
                          <Loader
                          type="Circles"
                          color="#353b48"
                          height={100}
                          width={100}
                          timeout={4000} //3 secs
                        />
                    </div>
                : null
            }
        </div>
    );
}

export default SearchBar;