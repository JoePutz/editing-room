class User < ApplicationRecord
    has_many :stories
    has_many :critiques, foreign_key: :crit_writer_id
    has_many :crit_stories, through: :critiques
    has_secure_password

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
