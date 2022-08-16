# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_11_235307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "critiques", force: :cascade do |t|
    t.text "criticism"
    t.bigint "crit_story_id"
    t.bigint "crit_writer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["crit_story_id"], name: "index_critiques_on_crit_story_id"
    t.index ["crit_writer_id"], name: "index_critiques_on_crit_writer_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.integer "user_id"
    t.string "genre"
    t.text "text"
    t.text "synopsis"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.string "image_url"
    t.text "bio"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "critiques", "stories", column: "crit_story_id"
  add_foreign_key "critiques", "users", column: "crit_writer_id"
end
