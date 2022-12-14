class CritiqueSerializer < ActiveModel::Serializer
  attributes :id, :criticism, :crit_writer_id, :crit_story_id, :user
  belongs_to :crit_writer
  belongs_to :crit_story
  has_many :responses

  def user
    self.object.crit_writer.username
  end
end
