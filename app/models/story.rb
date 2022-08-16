class Story < ApplicationRecord
    belongs_to :user
    has_many :critiques, foreign_key: :crit_story
    has_many :crit_writers, through: :critiques
end
