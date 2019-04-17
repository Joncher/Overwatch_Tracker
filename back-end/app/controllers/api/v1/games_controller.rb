class Api::V1::GamesController < ApplicationController

  def create
    @game = Game.create(game_param)
    if @game.valid?
      @game.user.ranking = @game.new_ranking
      render json: { game: GameSerializer.new(@game) }, status: :created
    else
      render json: { error: 'failed to create game' }, status: :not_acceptable
    end
  end


  private
  def game_param
    params.permit(:result, :new_ranking, :hero_one, :hero_two, :party_size, :map, :details, :user_id, :time, :hero_one_role, :hero_two_role, :map_type)
  end

  def find_game
    @game = Game.find(params[:id])
  end



end
