class CreateCritiques < ActiveRecord::Migration[6.1]
  def change
    create_table :critiques do |t|
      t.text :criticism
      t.references :crit_story, foreign_key: { to_table: 'stories'}
      t.references :crit_writer, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
