import { Link } from "@remix-run/react";

function NewPost() {
  return (
      <>
         <section>
            <h2>New Post</h2>
            <Link to='/posts' className='btn btn-reverse'>
                Back
            </Link>
        </section>

        <section className="page-content">
            <form method="POST">
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Post Body</label>
                    <textarea name="body" id="body" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-block">Add Post</button>
            </form>
        </section>
      </>
  )
}

export default NewPost;