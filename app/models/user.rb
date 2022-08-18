class User < ApplicationRecord
    has_many :stories
    has_many :critiques, foreign_key: :crit_writer_id
    has_many :crit_stories, through: :critiques
    has_many :favorites, foreign_key: :fav_user_id
    has_many :fav_stories, through: :favorites
    has_many :responses, foreign_key: :resp_user_id
    has_many :resp_critiques, through: :responses
    has_secure_password

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
