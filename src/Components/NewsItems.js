import React  from 'react'

const NewsItems = (props)=> {
    // render() {
    let {title , description , imgUrl , newsUrl} = props;
    return (
      <div>
        <div className="card" >
         <img src={!imgUrl?"https://jkfenner.com/wp-content/uploads/2019/11/default.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Explore</a>
          </div>
        </div>
      </div>
    )
  // }
}

export default NewsItems