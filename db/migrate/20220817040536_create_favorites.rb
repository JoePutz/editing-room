class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.references :fav_story, foreign_key: { to_table: 'stories'}
      t.references :fav_user, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
