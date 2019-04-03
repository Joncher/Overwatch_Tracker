class GameSerializer < ActiveModel::Serializer
  attributes :id, :result, :new_ranking, :hero_one, :hero_two, :party_size, :map, :details, :user_id
  belongs_to :user
end
