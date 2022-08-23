class CritiquesController < ApplicationController
  before_action :set_critique, only: [:show, :update, :destroy]
  # skip_before_action :authorized, only: :index

  # GET /critiques
  def index
    if params[:crit_story_id]
      critiques = Critique.where(crit_story_id: params[:crit_story_id])
      render json: critiques
    else
      @critiques = Critique.all

      render json: @critiques
    end
  end

  # GET /critiques/1
  def show
    render json: @critique
  end

  # POST /critiques
  def create
    @critique = Critique.new(critique_params)

    if @critique.save
      render json: @critique, status: :created, location: @critique
    else
      render json: @critique.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /critiques/1
  def update
    if @critique.update(critique_params)
      render json: @critique
    else
      render json: @critique.errors, status: :unprocessable_entity
    end
  end

  # DELETE /critiques/1
  def destroy
    @critique.responses.destroy_all
    @critique.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_critique
      @critique = Critique.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def critique_params
      params.permit(:criticism, :crit_story_id, :crit_writer_id)
    end
end
