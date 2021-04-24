import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, addComment ,id } = props;
	const [commentText,setCommentText] = useState('');
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
		  {
			  comments.map((comment,i)=><div key={i}><Comment comment={comment}/></div>)
		  }
		<form className='comment-form' onSubmit={()=>{addComment(commentText,id);setCommentText('')}}>
			<label>
				Comment
				<textarea value={commentText} onChange={(e)=>{setCommentText(e.target.value)}} />
			</label>
			<input 
				type='submit'
				value='comment'
			/>
		</form>
    </div>
  );
};

export default Comments;
