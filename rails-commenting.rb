# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController class instantiation. The controller class is extending (<) from the ApplicationController class, which means that it inherits its properties and functionalities/methods.
class BlogPostsController < ApplicationController
  def index
    # ---2) inside the index method we are declaring an instance variable called @posts. we are assigning to the variable the value of the result after running the database query in which we are selecting all of the records present in the table.
    @posts = BlogPost.all
  end

  def show
    # ---3)inside the show method we are declaring an instance variable called @post. we are assigning to the @post variable the value of the result after running the database query in which we are selecting a specific instance in the BlogPost table by using the id value. Here the .find() method will look for the specific instance in the BlogPost table by the :id and by passing in params, it will allow for the information to come from the url. (get request)
    @post = BlogPost.find(params[:id])
  end

  # ---4) Here we are defining the new method inside the controller. The new method displays a form to the user and tie the database object to the form. Inside the method we are declaring a @post instance variable and assiging it to the new instance of the Post class. The new method performs a get request since it is displaying the form to the user.
  def new
    @post = Post.new
  end

  def create
    # ---5) here we are declaring the instance variable @post inside the create method. we are assiging to the variable the value of the BlogPost class instance created and saved to the database using the create method. Inside the create method we are passing in the blog_post_params strong params (defined on the bottom of this code block). This will tell which kind of parameter can be passed in upon the creation of a new BlogPost instance.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) the edit method is the first of the two phases when updating a instance in the database. this method will give the user a form to make changes to an existing item. Since it will show the user a form, it is a get request.
  def edit 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) bellow we are applying the update method to the specific @post instance declared and defined above. we are passing into the update method the strong params blog_post_params (defined on the bottom of the code block under private). This will determine the properties that can be saved to teh database once the instance is updated.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this is part of the conditional inside the destroy method to give the user a better UX. If the specific instance is not deleted upon the DELETE request, than the user is redirected (by the redirect_to helper method) to the specific post instance page (be calling the alias of the GET request -> blog_post_path and passing in the specific instance information.)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is a keyword in Ruby that gives us another level of protection. anything below private can only be called inside the scope of the class. By having the strong params listed as private, we can assure that they will only be called inside the controller class.
  private
  def blog_post_params
    # ---10) inside the strong params definition, we are requiring the blog_post object by referencing its key, and we using the .permit method to list the info that can be saved as part of that specific instance.
    params.require(:blog_post).permit(:title, :content)
  end
end
