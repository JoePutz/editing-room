class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]

  # GET /favorites
  def index
    if params[:fav_user_id] && params[:fav_story_id]
      favorite = Favorite.where(fav_user_id: params[:fav_user_id])
      favor2 = favorite.find_by(fav_story_id: params[:fav_story_id])
      if (favor2 == nil)
        render json: 'no favorite'
      else
        render json: favor2
      end
    elsif params[:fav_user_id]
    favorites = Favorite.where(fav_user_id: params[:fav_user_id])
    render json: favorites
    else 
    @favorites = Favorite.all

    render json: @favorites
    end
  end

  # GET /favorites/1
  def show
    render json: @favorite
  end

  # POST /favorites
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:fav_story_id, :fav_user_id)
    end
end
