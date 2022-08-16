class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :genre, :text, :synopsis, :author
  belongs_to :user

  def author
    self.object.user.username
  end
end
