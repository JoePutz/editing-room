class Response < ApplicationRecord
    belongs_to :resp_critique, foreign_key: :resp_critique_id, class_name: "Story"
    belongs_to :resp_user, foreign_key: :resp_user_id, class_name: "User"
end
