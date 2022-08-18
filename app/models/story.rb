class Story < ApplicationRecord
    belongs_to :user
    has_many :critiques, foreign_key: :crit_story
    has_many :crit_writers, through: :critiques
    has_many :favorites, foreign_key: :fav_story
    has_many :fav_users, through: :favorites
end
