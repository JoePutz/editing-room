class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :genre, :text, :synopsis, :author, :totalFavorites, :updated_at
  belongs_to :user
  has_many :favorites

  def author
    self.object.user.username
  end

  def totalFavorites
    self.object.favorites.count
  end
end
