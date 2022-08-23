class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # skip_before_action :authorized, only: [:index, :create]

  # GET /users
  def index
    if params[:id]
      user = User.where(id: params[:id])
      render json: user
    else
    @users = User.all

    render json: @users
    end
  end

  # GET /users/1
  def me
    render json: current_user
  end


  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # POST /users
  def create
    user = User.create(user_params)

    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :email, :image_url, :username, :bio, :password, :password_confirmation)
    end
end
