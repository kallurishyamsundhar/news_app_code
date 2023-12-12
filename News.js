export default function News(props)
{
    console.log(props)
    const { article } = props;

  // Check if article is defined before accessing its properties
  if (!article) {
    return null; // or you can render a loading indicator or some default content
  }
    return(
        <div className="news">
            <div className="news-img">
            <img className="img" src={props.article.urlToImage} alt="Article" />            </div>
            <h1 className="title">{props.article.title}</h1>
            <p className="title">{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read More </a></p>
           
            <div className="source">
                <p class="author">Author:{props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>
        </div>
    )
}