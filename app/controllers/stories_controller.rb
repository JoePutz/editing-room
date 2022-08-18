class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  # GET /stories
  def index
    if params[:genre]
      stories = Story.where(genre: params[:genre])
      render json: stories
    elsif params[:user_id]
      stories = Story.where(user_id: params[:user_id])
      render json: stories
    end
    
    # if params[:genre]
    #   genreStories = @stories.where(genre: params[:genre])
    #   render json: genreStories, serializer: StorySerializer
    #   # if (genreStories == nil)
    #   #   render json: 'no stories of that genre'
    #   # else
    #   #   render json: genreStories, serializer: StorySerializer
    #   # end
    # else
    # @stories = Story.all

    # render json: @stories
    # end
  end
  # def index
  #   if params[:genre]
  #     genreStories = @stories.where(genre: params[:genre])
  #     if (genreStories == nil)
  #       render json: 'no stories of that genre'
  #     else
  #       render json: genreStories, serializer: StorySerializer
  #     end
  #   else
  #   @stories = Story.all

  #   render json: @stories
  #   end
  # end

  # GET /stories/1
  def show
    render json: @story
  end

  # POST /stories
  def create
    @story = Story.new(story_params)

    if @story.save
      render json: @story, status: :created, location: @story
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stories/1
  def update
    if @story.update(story_params)
      render json: @story
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stories/1
  def destroy
    @story.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def story_params
      params.permit(:title, :user_id, :genre, :text, :synopsis)
    end
end
