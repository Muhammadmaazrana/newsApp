import React, { Component } from 'react'

export class NewsItem extends Component {

 
  render() {
    let {title,description,imageUrl,url}= this.props;
    return (
      <div>
        <div className="my-3">
       <div className="card" style={{width:"18rem"}}>
  <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-1146087387.jpg?resize=1200,813":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div></div>
</div> 
      </div>
    )
  }
}

export default NewsItem
