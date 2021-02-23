import React from 'react'
import './listView.css'

const ListView = (props) => {

    return (
        <div className="container mt-5">
            <div className="row" id="product_doc">
                {
                    props.getData.length > 0 ?
                        props.getData.map(e =>
                            <div className="col-md-3 mb-3 my-card" key={e.id}>
                                <img className='image' src={e.urls.small} />
                                    <div className="overlay">
                                        <h5>{e.alt_description}</h5>
                                        <p className="p1"><i className="fa fa-thumbs-up"></i>     {e.likes}</p>
                                        <p className="p2"><a href={e.links.download} target="_blank"><i className="fa fa-eye"></i></a></p>
                                    </div>
                            </div>

                        )
                        : null
                }
            </div>
        </div>
    );
}

export default ListView;