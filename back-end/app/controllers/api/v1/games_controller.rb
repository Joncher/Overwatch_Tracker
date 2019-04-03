class Api::V1::GamesController < ApplicationController

  def create
    @game = Game.create(game_param)
    byebug
    if @game.valid?
      render json: { game: GameSerializer.new(@game) }, status: :created
    else
      render json: { error: 'failed to create game' }, status: :not_acceptable
    end
  end


  private
  def game_param
    params.permit(:result, :new_ranking, :hero_one, :hero_two, :party_size, :map, :details, :user_id)
  end

  def find_game
    @game = Game.find(params[:id])
  end

end
