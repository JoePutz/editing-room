class Favorite < ApplicationRecord
    belongs_to :fav_story, foreign_key: :fav_story_id, class_name: "Story"
    belongs_to :fav_user, foreign_key: :fav_user_id, class_name: "User"
end
