import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const defaultComment = ()=>{
    let max = comments.reduce((acc,comment)=>Math.max(comment.id,acc),0);
    return{
      id:max+1,
      username:'guest',
      text:''
    }
  };
  const { comments, addComment ,id } = props;
	const [newComment,setNewComment] = useState(defaultComment());
  const updateComment =(e)=>{
    setNewComment({...newComment,text:e.target.value});
  };
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
		  {
			  comments.map((comment,i)=><div key={i}><Comment comment={comment}/></div>)
		  }
		<form className='comment-form'>
			<textarea value={newComment.text} onChange={updateComment} />
			<input 
        className='comment-button'
				type='button'
				value='comment'
        onClick={()=>{addComment(id,newComment);setNewComment(defaultComment)}}
			/>
		</form>
    </div>
  );
};

export default Comments;
