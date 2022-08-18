class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :fav_story_id, :fav_user_id
  belongs_to :fav_story
  belongs_to :fav_user

  validates :fav_story_id, uniqueness: { scope: :fav_user_id }
end
