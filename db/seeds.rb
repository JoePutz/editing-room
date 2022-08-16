# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User = attributes :id, :first_name, :last_name, :email, :username, :image_url, :bio, :password_digest

# Story = :id, :title, :user_id, :genre, :text, :synopsis

User.create!(first_name: "a", last_name: "a", email: "a", username: "a", image_url: "a", bio: "a", password: "a")
User.create!(first_name: "b", last_name: "b", email: "b", username: "b", image_url: "b", bio: "b", password: "b")
User.create!(first_name: "c", last_name: "c", email: "c", username: "c", image_url: "c", bio: "c", password: "c")
User.create!(first_name: "d", last_name: "d", email: "d", username: "d", image_url: "d", bio: "d", password: "d")

10.times do
    Story.create!(title: Faker::Book.title, user_id: User.all.ids.sample, genre: "Crime", text: Faker::Lorem.paragraphs, synopsis: Faker::Movie.quote)
end

puts "done"