class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :image_url, :bio, :password_digest
  has_many :stories
end
