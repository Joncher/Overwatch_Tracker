class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :ranking
  has_many :games
end
