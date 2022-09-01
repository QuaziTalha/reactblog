import React, { useEffect,useState  } from "react"
import PostCard from "../components/post-card"
function AllPost(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://mockend.com/mockend/demo/posts")
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return(
        <>
        <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    {data.map((post, index) => (
                     <PostCard prop={post} key={index} />
                ))}
                        {/* <!-- Pager --> */}
                        <ul className="pager">
                            <li className="next">
                                <a href="/">Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllPost;