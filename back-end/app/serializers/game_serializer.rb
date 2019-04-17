class GameSerializer < ActiveModel::Serializer
  attributes :id, :result, :new_ranking, :hero_one, :hero_two, :party_size, :map, :details, :user_id, :created_at, :hero_one_role, :hero_two_role, :map_type
  belongs_to :user
end
