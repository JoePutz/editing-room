class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response, :resp_user_id, :resp_critique_id, :user
  belongs_to :resp_user
  belongs_to :resp_critique

  def user
    self.object.resp_user.username
  end
end
