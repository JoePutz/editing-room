class Critique < ApplicationRecord
    belongs_to :crit_story, foreign_key: :crit_story_id, class_name: "Story"
    belongs_to :crit_writer, foreign_key: :crit_writer_id, class_name: "User"
end
