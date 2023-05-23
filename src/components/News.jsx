import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
 

async componentDidMount(){
  let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=280d4dca18ca40f2b9a39cddc65e216c";
  let data= await fetch(url);
  let parsedData=await data.json();
   this.setState({articles:parsedData.articles})
}

  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false
    }
      }
  render() {
    return (
      <div className='container my-3' >
                <h1>LatestNews-Top Headlines</h1>
               
                <div className="row">
                {this.state.articles.map((element)=>{
                 return  <div key={element.url} className="col-md-4">
                   <NewsItem title={element.title} description={element.description} url={element.url} imageUrl= {element.urlToImage}/>
                   </div>
                })}
     
        </div>
      
      </div>
    )
  }
}
